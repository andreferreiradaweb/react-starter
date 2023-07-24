import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  :root {
  --primary: #ffffff;
  --secondary: #000a48;
  --blue-light: #0e3f8b;
  --blue-extra-light: #718cb5;
  --gray: #a3a3a3;
  --gray-text: #656565;
}

body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
    background-color: var(--white);
    color: var(--gray);
  }
  
* {
  box-sizing: border-box;
  box-sizing: border-box;
}

button, a {
    cursor: pointer;
}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`
