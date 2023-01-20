import PropTypes from 'prop-types';
import { Avatar, ListItem } from './ContactsListItem.styled';
import { Button } from 'BaseStyles/BaseStyles.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { DeleteSpinner } from 'components/Spinner/Spinner';

export const ContactsListItem = ({ name, number, id, avatar }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem>
      <Avatar src={avatar} alt={`${name} photo`} />
      {name}: {number}
      <Button
        onClick={() => {
          deleteContact(id);
        }}
      >
        {isLoading ? <DeleteSpinner /> : 'Delete'}
      </Button>
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
