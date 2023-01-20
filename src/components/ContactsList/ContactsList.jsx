import { ContactList } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { Spinner } from 'components/Spinner/Spinner';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllContactsQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();
  const filter = useSelector(getFilter);

  const visibleContacts = useMemo(() => {
    if (filter === '' || !filter) {
      return contacts;
    } else {
      return contacts.filter(el => {
        return el.name.toLowerCase().includes(filter.toLowerCase().trim());
      });
    }
  }, [contacts, filter]);

  return (
    <ContactList>
      {isLoading ? (
        <Spinner />
      ) : (
        visibleContacts.map(({ id, name, phone, avatar }) => {
          return (
            <ContactsListItem
              key={id}
              name={name}
              id={id}
              number={phone}
              avatar={avatar}
            />
          );
        })
      )}
      {error && <p>Wooops :(</p>}
    </ContactList>
  );
};
