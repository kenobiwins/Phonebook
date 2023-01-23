import styled from 'styled-components';

export const FilterButtonStyled = styled.button`
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  position: relative;

  background: ${p =>
    p.selected ? p.theme.colors.accent : p.theme.colors.primary};

  :before {
    content: ${p => {
      const quote = '"';
      return quote + p.children + quote;
    }};
    visibility: hidden;
    opacity: 0;
    width: max-content;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    transition: opacity 250ms linear 1500ms;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }
  :hover:before {
    opacity: 1;
    visibility: visible;
  }
`;
