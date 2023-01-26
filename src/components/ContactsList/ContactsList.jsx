import { ContactList } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
// import { Spinner } from 'components/Spinner/Spinner';
import { statusFilters } from 'constants/statusFilter.constants';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllContactsQuery } from 'redux/contacts/contactsSlice';
import {
  getContactsByAlphabetStatus,
  getFilter,
  getFilterStatus,
} from 'redux/filter/selectors';

export const ContactsList = () => {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();

  const filter = useSelector(getFilter);
  const filterStatus = useSelector(getFilterStatus);
  const alphabetStatus = useSelector(getContactsByAlphabetStatus);

  const visibleContacts = useMemo(() => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(el => {
        return el.name.toLowerCase().includes(filter.toLowerCase().trim());
      });
    }
  }, [contacts, filter]);

  const filteredContacts = (contacts, filter) => {
    if (alphabetStatus) {
      contacts = [...contacts].sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
    }

    switch (filter) {
      case statusFilters.all:
        return contacts;
      case statusFilters.favorite:
        return contacts.filter(contact => contact.favorite);

      default:
        return contacts;
    }
  };

  return (
    <ContactList>
      {!isLoading &&
        filteredContacts(visibleContacts, filterStatus).map(
          ({ id, name, number }) => {
            return (
              <ContactsListItem
                key={id}
                name={name}
                id={id}
                number={number}
                // avatar={avatar}
                // favorite={favorite}
              />
            );
          }
        )}

      {error && <p>Wooops :(</p>}
    </ContactList>
  );
};
