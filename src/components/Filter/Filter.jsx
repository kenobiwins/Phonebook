import { Input, Label } from 'components/PhonebookForm/PhonebookForm.styled';
import debounce from 'lodash.debounce';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const debounceFilter = useMemo(() => {
    return debounce(query => dispatch(changeFilter(query)), 500);
  }, [dispatch]);

  const handleFilterInput = ({ target: { value } }) => {
    setFilter(value);
    debounceFilter(value);
  };

  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        autoComplete="off"
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterInput}
        value={filter}
      />
    </>
  );
};
