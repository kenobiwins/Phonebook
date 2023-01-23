import styled from 'styled-components';

export const FilterButtonStyled = styled.button`
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;

  background: ${p =>
    p.selected ? p.theme.colors.accent : p.theme.colors.primary};
`;
