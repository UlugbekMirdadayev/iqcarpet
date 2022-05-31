import styled from "styled-components";
import salesmanBg from "../../static/img/salesmanbg.png";

export const SalesmanContainer = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${salesmanBg});
  padding-top: 20px;
  margin-bottom: 100px;
  background-size: 100% 340px;

  @media screen and (max-width: 768px) {
    background-size: 100% 460px;
  }
`;

export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
    border-radius: 2px;
    padding: 20px 10px;
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
  @media screen and (max-width: 420px) {
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
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
      margin-bottom: 0px;
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
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  ul {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
    li {
      margin-right: 10px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        margin-bottom: 10px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        object-fit: contain;
        @media screen and (max-width: 450px) {
          width: 27px;
          height: 27px;
        }
      }
    }
  }
  .social {
    display: flex;
    align-items: center;
    margin-top: 20px;
    @media (max-width: 400px) {
      margin-top: 5px;
    }
    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      @media (max-width: 450px) {
        width: 45px;
        height: 45px;
      }
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
  @media screen and (max-width: 768px) {
    background: none;
    padding: 30px 0;
  }
  @media screen and (max-width: 408px) {
    background: none;
    padding: 10px 0;
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
    @media screen and (max-width: 768px) {
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
    margin-left: 24%;
    align-items: flex-end;
    justify-content: flex-start;
    margin-top: 60px;
    margin-bottom: 40px;
    @media screen and (max-width: 1150px) {
      margin-top: 40px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding-left: 10px;
      /* display: none; */
      &.is-mobile {
        display: flex;
        margin-top: 20px;
        margin-bottom: 30px;
      }
    }

    @media screen and (max-width: 450px) {
      display: flex;
      margin: 0px !important;
      padding: 0%;
      padding-top: 22px !important;
      gap: 12px;
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
      @media screen and (max-width: 768px) {
        font-size: 26px;
      }
      @media screen and (max-width: 450px) {
        font-size: 30px;
        font-weight: 700;
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
      @media screen and (max-width: 768px) {
        padding-left: 0;
        font-size: 14px;
      }
    }
  }
  .catelog-body {
    display: flex;
    gap: 30px;
    @media screen and (max-width: 920px) {
      flex-direction: column;
    }
    @media screen and (max-width: 400px) {
      padding: 10px;
    }
    .col {
      display: flex;
      flex-direction: column;
      .Buy_name {
        @media screen and (max-width: 400px) {
          display: none;
        }
      }
      .col__item {
        &.box {
          display: flex;
          flex-direction: column;
          background: #f6f9fe;
          border-radius: 20px;
          padding: 32px 22px;
          gap: 15px;
          @media screen and (max-width: 920px) {
            width: max-content;
          }

          @media screen and (max-width: 768px) {
            width: max-content;
            padding-left: 18px;
            padding-right: 5px;
            padding-top: 5px;
            padding-bottom: 5px;
            gap: 7.5px;
            margin-top: 40px;
          }
          @media screen and (max-width: 420px) {
            margin-top: 30px;
          }
          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;

            button {
              border-radius: 48px;
              width: 70px;
              padding: 6px 12px;
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
            > p {
              font-weight: 400;
              font-size: 14px;
              line-height: 120%;
              color: #000000;
            }
            > svg {
              width: 14px;
              height: 14px;
            }
          }
        }
        &.filter {
          @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
            display: flex;
            padding: 20px 0;
            border-top: 2px solid #dfdfdf;
            border-bottom: 2px solid #dfdfdf;
            .row.active {
              background-color: #0052b9;
              color: #fff;
              border: transparent;
            }
          }
          @media screen and (max-width: 408px) {
            gap: 5px;
            padding-bottom: 5px;
          }

          .row {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            margin-top: 17px;
            @media screen and (max-width: 768px) {
              border: 1px solid rgba(0, 0, 0, 0.6);
              border-radius: 55px;
              padding: 10px;
              margin: 0 5px;
              svg {
                display: none;
              }
              &::before {
                content: "×";
                font-size: 36px;
                line-height: 10px;
              }
            }
            &.br-top {
              &::before {
                content: none !important;
              }
              border-top: 2px solid #dfdfdf;
              padding-top: 20px;
              justify-content: space-between;
              margin-bottom: 25px;
              @media screen and (max-width: 768px) {
                padding: 10px;
                margin: 0 5px;
                border: 1px solid rgba(0, 0, 0, 0);
                position: relative;
                width: 40px;
                height: 40px;
              }
            }
            h3 {
              font-weight: 700;
              font-size: 20px;
              line-height: 120%;
              color: #000000;
              @media screen and (max-width: 768px) {
                opacity: 0;
                font-size: 0;
                border: none;
              }
            }
            button {
              background: none;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              border: 0;
              @media screen and (max-width: 768px) {
                svg {
                  display: none;
                }
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                width: max-content;

                &::after {
                  color: #0052b9;
                  font-weight: 700;
                  content: "Сбросить фильтры";
                }
              }
            }
            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 120%;
              @media screen and (max-width: 768px) {
                font-size: 14px;
                font-weight: 550;
              }
            }
          }
        }
      }
      .row__flex {
        margin: 30px 0;
        margin-bottom: 13px;
        @media screen and (max-width: 768px) {
          display: flex;
          flex-direction: row;
          gap: 15px;
        }
        .title_col {
          font-weight: 400;
          font-size: 26px;
          line-height: 120%;
          color: #b3bcc5;
          &.is_mobile {
            display: none;
            @media screen and (max-width: 768px) {
              background: #f5f5f5;
              border-radius: 55px;
              font-size: 12px;
              line-height: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #000000;
              padding: 15px;
              width: 50%;
              font-weight: 700;
              @media screen and (max-width: 450px) {
                line-height: 12px;
                padding: 13px;
              }
              svg {
                display: inline-block;
                margin-left: 10px;
              }
            }
          }
          &.mt-3 {
            svg {
              display: none;
            }
            @media screen and (max-width: 768px) {
              background: #f5f5f5;
              border-radius: 55px;
              font-size: 12px;
              line-height: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #000000;
              padding: 15px;
              width: 50%;
              font-weight: 700;
              svg {
                display: inline-block;
                margin-left: 10px;
              }
            }
          }
        }
      }
      .scroll__filter__div {
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
        user-select: none;
        &::-webkit-scrollbar {
          height: 10px;
          background: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
          background: #b3bcc54d;
        }
        &:hover {
          &::-webkit-scrollbar {
            background: #f5f5f5;
          }
          &::-webkit-scrollbar-thumb {
            background: #b3bcc5;
          }
        }

        @media screen and (max-width: 768px) {
          flex-direction: row;
        }
      }
    }
    .col_two {
      width: 100%;
      padding-bottom: 26px;
      border-bottom: 2px solid #dfdfdf;
      margin-bottom: 40px;
      @media screen and (max-width: 768px) {
        display: none;
      }
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
      row-gap: 80px;
      @media screen and (max-width: 450px) {
        row-gap: 30px;
      }
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
        @media screen and (max-width: 768px) {
          width: calc(50% - 10px);
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
          @media screen and (max-width: 450px) {
            margin-bottom: 5px;
          }
          img {
            width: 100%;
            transition: 0.3s;
            &:hover {
              /* transform: scale(1.3); */
              filter: drop-shadow(2px 4px 6px black);
              cursor: pointer;
            }
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
            text-shadow: 0 0 0.1px black;
            @media (max-width: 450px) {
              font-weight: 500;
              font-size: 18px;
            }
          }
        }
        .col_item_price {
          display: flex;
          align-items: center;
          align-items: flex-start;
          p {
            font-weight: 700;
            font-size: 26px;
            line-height: 120%;
            color: #000000;
            flex: none;
            order: 1;
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
            padding: 10px 26px;
            white-space: nowrap;
            border-color: #0052b9;
            border: 2px solid #0052b9;
            border-radius: 20px;
            font-style: normal;

            text-align: center;
            color: #0052b9;
            cursor: pointer;
            background: transparent;
            user-select: none;
            display: flex;
            gap: 11px;
            font-weight: 600;
            font-size: 14px;
            align-items: center;
            justify-content: center;
            line-height: 19px;
            height: 40px;
            transition: 0.3s;
            &:hover {
              background-color: #0052b9;
              color: #fff;
            }
            &:hover svg path {
              stroke: #fff;
              color: #fff;
            }
            @media screen and (max-width: 1150px) {
              padding: 7px 18px;
            }
            @media screen and (min-width: 1250px) {
              max-width: 160px;
              min-width: 160px;
            }
            @media screen and (max-width: 920px) {
              font-size: 13px;
              line-height: 15px;
            }
            @media screen and (max-width: 1150px) {
              padding: 5px 15px;
              font-size: 11px;
            }
            @media screen and (max-width: 450px) {
              font-size: 16px;
            }
            &.cart_active {
              background: #0052b9;
              border: 2px solid #0052b9;
              border-radius: 4px;
              color: #fff;
              font-weight: 700;
            }
            @media screen and (max-width: 400px) {
              max-width: 103px;
              padding: 6px 16px;
              height: auto;
              min-width: 103px;
              border: 2px solid #0052b9;
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
