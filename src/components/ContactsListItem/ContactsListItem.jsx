import PropTypes from 'prop-types';
import { Avatar, ListItem } from './ContactsListItem.styled';
import { defaultAvatar } from 'constants/defaultAvatar';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { IconButton, Spinner } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const ContactsListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem>
      <Avatar src={defaultAvatar} alt={`${name} photo`} />
      {name}: {number}
      <IconButton
        variant="outline"
        colorScheme="cyan"
        aria-label="Delete contact"
        icon={
          isLoading ? (
            <Spinner size="md" boxSize={4} />
          ) : (
            <DeleteIcon size="md" boxSize={4} />
          )
        }
        onClick={() => {
          deleteContact(id);
        }}
      />
      {/* <IconButton
        size="md"
        icon={
          isLoading ? (
            <Spinner size="md" boxSize={4} />
          ) : (
            <DeleteIcon boxSize={4} />
          )
        }
        onClick={() => {
          deleteContact(id);
        }}
      /> */}
    </ListItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  // deleteData: PropTypes.func.isRequired,
};
