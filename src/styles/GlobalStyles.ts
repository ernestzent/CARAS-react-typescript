import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow', Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    color: #222222; /* Ratio > 12:1 sobre #f4f4f4 */
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible {
    outline: 3px solid #111111;
    outline-offset: 2px;
  }
`;