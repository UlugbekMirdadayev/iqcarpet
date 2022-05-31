// globalStyles.js
import styled, { createGlobalStyle, injectGlobal } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url(${'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'});
  body {
    font-family: 'Noto Sans' !important;
  };
  * {

    margin: 0;
    padding: 0;
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
