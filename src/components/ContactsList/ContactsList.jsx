// import debounce from 'lodash.debounce';
import { ContactList } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

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
      {visibleContacts.length > 0 &&
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
        })}
    </ContactList>
  );
};
