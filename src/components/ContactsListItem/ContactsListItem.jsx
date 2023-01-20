import PropTypes from 'prop-types';
import { Avatar, ListItem } from './ContactsListItem.styled';
import { Button } from 'BaseStyles/BaseStyles.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsListItem = ({ name, number, id, avatar }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Avatar src={avatar} alt={`${name} photo`} />
      {name}: {number}
      <Button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
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
