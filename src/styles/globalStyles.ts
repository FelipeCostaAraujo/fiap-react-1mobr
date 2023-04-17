import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    background-image: url("./Wallpaper - 1920c1080.png");
    height: 100%;
    min-height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  :root {
    --white: #fff;
    --black: #000;
    --background: #005bda;
    --background-image: url("./assets/background.png");
  }
`;

export { GlobalStyles };