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
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 40px;
    @media screen and (max-width: 1150px) {
      margin-top: 40px;
    }

    h1 {
      font-weight: 600;
      font-size: 40px;
      line-height: 40px;
      color: #000000;
      @media screen and (max-width: 1150px) {
        font-size: 30px;
        line-height: 30px;
      }
    }

    small {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      padding-left: 20px;
      color: rgba(0, 0, 0, 0.7);
      @media screen and (max-width: 1150px) {
        font-size: 12px;
      }
    }
  }
  .catelog-body {
    display: flex;
    gap: 30px;
    @media screen and (max-width: 920px) {
      flex-direction: column;
    }
    .col {
      display: flex;
      flex-direction: column;
      .col__item {
        &.box {
          display: flex;
          flex-direction: column;
          background: #f6f9fe;
          border-radius: 20px;
          padding: 30px 20px;
          gap: 15px;
          @media screen and (max-width: 920px) {
            padding: 10px;
            width: max-content;
          }
          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;
            button {
              border-radius: 48px;
              padding: 5px 10px;
              font-weight: 700;
              font-size: 12px;
              color: #000000;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              &.new__status {
                background: #fcd901;
                border: 1px solid #fcd901;
              }
              &.old__status {
                background: #fe3501;
                border: 1px solid #fe3501;
                color: #fff;
              }
            }
          }
        }
        &.filter {
          .row {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            margin-top: 17px;

            &.br-top {
              border-top: 2px solid #dfdfdf;
              padding-top: 20px;
              justify-content: space-between;
              margin-bottom: 25px;
            }
            h3 {
              font-weight: 700;
              font-size: 20px;
              line-height: 120%;
              color: #000000;
            }
            button {
              background: none;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              border: 0;
            }
            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 120%;
            }
          }
        }
      }
      .title_col {
        font-weight: 400;
        font-size: 26px;
        line-height: 120%;
        color: #b3bcc5;
        &.mt-3 {
          margin: 30px 0;
        }
      }
    }
    .col_two {
      width: 100%;
      padding-bottom: 26px;
      .col_sort {
        width: max-content;
        display: flex;
        align-items: center;
        background: #f5f5f5;
        border-radius: 55px;
        padding: 14px 55px;
        cursor: pointer;
        p {
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          margin-right: 10px;
        }
        svg {
          path {
            stroke: #000000;
          }
        }
      }
    }
    .col_items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;

      .col_item {
        position: relative;
        border-radius: 2px;
        width: 255px;
        @media screen and (max-width: 1150px) {
          width: 180px;
        }
        @media screen and (max-width: 920px) {
          width: calc(33% - 10px);
        }

        .col_item_sale {
          position: absolute;
          top: 10px;
          left: 10px;
          width: max-content;
          padding: 8px 15px;
          /* background: #fe3501; */
          border-radius: 48px;
          p {
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 120%;
            /* color: #ffffff; */
          }
        }
        .col_item__img {
          margin-bottom: 20px;
          img {
            width: 100%;
          }
        }
        .col_item__title {
          p {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 120%;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 20px;
          }
        }
        .col_item_price {
          display: flex;
          align-items: center;
          p {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 120%;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 20px;
            margin-right: 10px;
            @media screen and (max-width: 920px) {
              font-size: 15px;
              margin-bottom: 10px;
            }
          }
        }
        .col_item_cart {
          display: flex;
          align-items: center;
          justify-content: space-between;
          button {
            padding: 6px 25px;
            border-color: #0052b9;
            border: 2px solid #0052b9;
            border-radius: 20px;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 19px;
            text-align: center;
            color: #0052b9;
            cursor: pointer;
            background: transparent;
            user-select: none;
            @media screen and (max-width: 920px) {
              font-size: 13px;
              line-height: 15px;
            }
            &.cart_active {
              background: #0052b9;
              border: 2px solid #0052b9;
              border-radius: 4px;
              color: #fff;
              font-weight: 700;
            }
          }
          svg {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
