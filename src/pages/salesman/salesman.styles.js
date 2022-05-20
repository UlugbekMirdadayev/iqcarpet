import styled from "styled-components";
import salesmanBg from "../../static/img/salesmanbg.png";

export const SalesmanContainer = styled.div`
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(${salesmanBg});
  padding-top: 20px;
  margin-bottom: 100px;
  @media screen and (max-width: 920px) {
    background-size: 300%;
  }
  @media screen and (max-width: 450px) {
    background-size: 600%;
  }
`;

export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SalesmanUserName = styled.div``;

export const SalesmanContent = styled.div`
  padding: 30px 65px;
  background-color: #f6f9fe;
  border-radius: 10px;
  display: flex;
  gap: 52px;
  align-items: center;

  @media screen and (max-width: 1150px) {
    padding: 20px 45px;
    flex-direction: column;
  }
  @media screen and (max-width: 920px) {
    padding: 20px 15px;
  }
  @media screen and (max-width: 450px) {
    gap: 10px;
  }
`;
export const SalesmanUserInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #dfdfdf;
  .mobile__user_name {
    display: none;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    .user__info_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }
    .mobile__user_name {
      display: inline-block;
    }
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    margin: 0;
    margin-bottom: 20px;
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
  ul {
    display: flex;
    align-items: center;
    @media screen and (max-width: 450px) {
      flex-direction: column;
      align-items: flex-start;
    }
    li {
      margin-right: 10px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 450px) {
        margin-bottom: 10px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        object-fit: contain;
      }
    }
  }
  .social {
    display: flex;
    align-items: center;
    margin-top: 20px;

    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
  }
`;

export const SalesmanUserInfoCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  min-width: 300px;
  max-width: 320px;
  width: 100%;
  @media screen and (max-width: 1150px) {
    max-width: none;
  }
  @media screen and (max-width: 450px) {
    background: none;
  }
`;
export const SalesmanHeadingTwo = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #b3bcc5;
`;

export const SalesmanAbout = styled.div`
  margin-top: 20px;
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;
    margin-top: 15px;
  }
  a {
    color: #2f80ed;
    text-decoration: underline;
  }
  &.is-desktop {
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
  &.is-mobile {
    @media screen and (min-width: 450px) {
      display: none;
    }
    margin-top: 0;
    padding-top: 20px;
    border-top: 2px solid #dfdfdf;
  }
`;

export const CatalogContainer = styled.div`
  .title__catalog {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    color: #000000;
  }
`;
