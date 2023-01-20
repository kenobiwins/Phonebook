import { useState } from 'react';
import { Form, Label, Input } from './PhonebookForm.styled';
import { memo } from 'react';
import { Button } from 'BaseStyles/BaseStyles.styled';
import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'redux/contactsSlice';

export const PhonebookForm = memo(() => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetAllContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setPhone(value);
      default:
        break;
    }
  };

  const handleSubmit = newUser => {
    const usersInclude = contacts.some(el => el.name === newUser.name);

    if (usersInclude) {
      alert(`${newUser.name} is already in contacts`);
      return null;
    }

    addContact(newUser);

    return 'New contact has already in your list';
  };

  const submitForm = e => {
    e.preventDefault();
    const newUser = handleSubmit({ name, phone });

    if (newUser === null) {
      return;
    } else {
      setName('');
      setPhone('');
      return;
    }
  };

  return (
    <Form onSubmit={submitForm} autoComplete="off">
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInput}
        value={name}
      />
      <Label htmlFor="number">Number</Label>
      <Input
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInput}
        value={phone}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
});
