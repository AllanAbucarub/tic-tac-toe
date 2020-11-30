import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    border: 0;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    background: #c2c0cb;
    transition: background-color 0.5s, color 0.3s;
  }
`;
