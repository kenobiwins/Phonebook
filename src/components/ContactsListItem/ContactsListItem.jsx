import PropTypes from 'prop-types';
import { Avatar, ListItem } from './ContactsListItem.styled';
import { Button } from 'BaseStyles/BaseStyles.styled';
import {
  useDeleteContactMutation,
  useToggleFavoriteMutation,
} from 'redux/contacts/contactsSlice';
import { DeleteSpinner } from 'components/Spinner/Spinner';

export const ContactsListItem = ({ name, number, id, avatar, favorite }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [toggleFavorite, { isLoading: FavoriteIsLoading }] =
    useToggleFavoriteMutation();

  return (
    <ListItem>
      <label>
        {!FavoriteIsLoading && (
          <input
            type="checkbox"
            checked={favorite}
            onChange={() => toggleFavorite({ id, favorite: !favorite })}
          />
        )}
      </label>
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
