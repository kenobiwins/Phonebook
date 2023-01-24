import { Input, Label } from 'components/PhonebookForm/PhonebookForm.styled';
import debounce from 'lodash.debounce';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  setStatusFilter,
  toggleAlphabetStatus,
} from 'redux/filter/filterSlice';
import { statusFilters } from 'constants/statusFilter.constants';
import { FilterButton } from 'components/FilterButton/FilterButton';
import {
  getContactsByAlphabetStatus,
  getFilterStatus,
} from 'redux/filter/selectors';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const FilterStatus = useSelector(getFilterStatus);
  const alphabetStatus = useSelector(getContactsByAlphabetStatus);

  const debounceFilter = useMemo(() => {
    return debounce(query => dispatch(changeFilter(query)), 500);
  }, [dispatch]);

  const handleFilterInput = ({ target: { value } }) => {
    setFilter(value);
    debounceFilter(value);
  };

  const handleStatusFilter = filter => dispatch(setStatusFilter(filter));

  const handleAlphabetStatus = () => {
    return dispatch(toggleAlphabetStatus(!alphabetStatus));
  };

  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>

      <FilterButton
        type="button"
        selected={FilterStatus === statusFilters.all}
        onClick={() => handleStatusFilter(statusFilters.all)}
      >
        All
      </FilterButton>
      <FilterButton
        type="button"
        selected={FilterStatus === statusFilters.favorite}
        onClick={() => handleStatusFilter(statusFilters.favorite)}
      >
        Fav
      </FilterButton>

      <input
        type="checkbox"
        checked={alphabetStatus}
        onChange={handleAlphabetStatus}
      />

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
