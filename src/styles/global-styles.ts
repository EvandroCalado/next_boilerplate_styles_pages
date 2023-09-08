import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    color: ${({ theme }) => theme.colors.textLight};
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }
`;
