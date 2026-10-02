import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Barlow', Arial, Helvetica, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        color: #333;
    }
    
    h1, h2, h3, h4 {
        font-family: 'Playfair Display', serif;
    }
`;

export default GlobalStyles;