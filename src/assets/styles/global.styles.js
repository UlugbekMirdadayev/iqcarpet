// globalStyles.js
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;500;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
    outline: none;

    #root {
        min-height: 100vh;
        max-width: 1920px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1150px) {
    max-width: 850px;
  }
  @media screen and (max-width: 920px) {
    max-width: 720px;
    padding: 0 20px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
  @media screen and (max-width: 450px) {
    max-width: 100%;
    padding: 0 5px;
  }
`;
