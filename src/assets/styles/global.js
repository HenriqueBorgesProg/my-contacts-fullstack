// src/assets/styles/global.js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { /* ... */ }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color:            ${({ theme }) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }
`;
