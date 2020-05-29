import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    align-items: center;
  }

  .input{ 
    padding-top: 200px;
    padding-left:200px;
    align-items:center;
  }

  input{
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  }
`;