import PropTypes from 'prop-types';
import { FilterButtonStyled } from './FilterButton.styled';

export const FilterButton = ({
  children,
  type = 'button',
  selected = false,
  ...otherProps
}) => {
  return (
    <FilterButtonStyled selected={selected} type={type} {...otherProps}>
      {children}
    </FilterButtonStyled>
  );
};

FilterButton.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.string,
};
