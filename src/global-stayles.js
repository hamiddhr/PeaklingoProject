import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: #fff;
    color: #555;
    font-family: 'Nunito', sans-serif;
    font-family: 'Nunito Sans', sans-serif;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `;
