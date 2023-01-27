import { useState } from 'react';
import { memo } from 'react';
import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'redux/contacts/contactsSlice';
import { Button, Input, Stack, useToast } from '@chakra-ui/react';

export const PhonebookForm = memo(() => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetAllContactsQuery();
  const [addContact] = useAddContactMutation();
  const toast = useToast();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        break;
    }
  };

  const handleSubmit = newUser => {
    const usersInclude = contacts.some(el => el.name === newUser.name);

    if (usersInclude) {
      return null;
    }

    addContact(newUser);

    return toast({
      title: `${newUser.name}`,
      description: `New contact has already in your list`,
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const submitForm = e => {
    e.preventDefault();
    const newUser = handleSubmit({ name, number });

    if (newUser === null) {
      return toast({
        title: `Wooops`,
        description: `${name} is already in contacts`,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    } else {
      setName('');
      setNumber('');
      return;
    }
  };

  return (
    <form onSubmit={submitForm} autoComplete="off">
      <Stack color={'blue.400'}>
        <Input
          _focusVisible={{
            borderColor: 'orange.200',
            boxShadow: '0px 1px 0px 0px #fbd38d',
          }}
          pl="1.5rem"
          type="text"
          name="name"
          variant="flushed"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInput}
          value={name}
        />
        <Input
          _focusVisible={{
            borderColor: 'orange.200',
            boxShadow: '0px 1px 0px 0px #fbd38d',
          }}
          pl="1.5rem"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInput}
          value={number}
          variant="flushed"
          placeholder="Number"
        />
        <Button
          w={'sm'}
          m={'auto'}
          type="submit"
          colorScheme="orange"
          variant="ghost"
        >
          Add contact
        </Button>
      </Stack>
    </form>
  );
});
