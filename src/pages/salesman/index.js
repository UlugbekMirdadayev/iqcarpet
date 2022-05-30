import React from "react";
import { Container } from "../../assets/styles/global.styles";
import { NavLink } from "react-router-dom";
import HideAction from "../../components/ui/hideAction";
import {
  CatalogContainer,
  ColumnStyled,
  SalesmanAbout,
  SalesmanContainer,
  SalesmanContent,
  SalesmanHeadingTwo,
  SalesmanUserInfo,
  SalesmanUserInfoCard,
} from "./salesman.styles";
import facebook from "../../static/img/facebook.svg";
import instagram from "../../static/img/instagram.svg";
import linkedin from "../../static/img/linkedin.svg";
import web from "../../static/img/web.svg";
import location from "../../static/img/location.svg";
import userStatic from "../../static/img/user-static.svg";
import {
  ArrowIcon,
  Buy_Icon,
  CheckBoxIcon,
  CloseIcon,
  LikeIcon,
  SelectArrowIcon,
  SortIcon,
} from "../../components/icon";
import Carpet1 from "../../static/img/carpet11.png";
import Carpet2 from "../../static/img/carpet22.png";
import Carpet3 from "../../static/img/carpet33.png";
import { FilterIcon } from "./../../components/icon/index";

export const Card = ({ data = {} }) => {
  const [selected, setSelected] = React.useState(null);
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="col_item">
      {data?.status && (
        <div
          style={{ background: data.status.background }}
          className="col_item_sale"
        >
          <p style={{ color: data.status.color }}>{data.status.status}</p>
        </div>
      )}
      <div className="col_item__img">
        <img src={data.img} alt="item1" />
      </div>
      <div className="col_item__title">
        <p>{data.name}</p>
      </div>
      <div className="col_item_price">
        <p
          style={
            data.price.sale && {
              textDecoration: "line-through",
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: ".85rem",
              fontWeight: "400",
            }
          }
        >
          {data.price.price}
        </p>
        <p style={{ color: " #FE3501" }}>{data.price.sale}</p>
      </div>
      <div className="col_item_cart">
        <button
          className={`${selected ? "cart_active" : ""}`}
          onClick={() => setSelected(!selected)}
        >
          {selected ? "В корзине!" : "В корзину"}
          {selected ? "": <Buy_Icon className="Buy_name"/>}
          
        </button>
        <LikeIcon onClick={() => setLiked(!liked)} liked={liked} />
      </div>
    </div>
  );
};
const filterMaps = [
  {
    id: 1,
    name: "Восточный",
    type: "oriental",
  },
  {
    id: 2,
    name: "Современный",
    type: "modern",
  },
  {
    id: 3,
    name: "Дизайнерский",
    type: "designer",
  },
  {
    id: 4,
    name: "Винтажный",
    type: "vintage",
  },
];
const carps = [
  {
    img: Carpet1,
    name: "Название ковра",
    price: {
      price: "32 960 ₽",
      sale: "12 000 ₽",
    },
    category: "vintage",
    status: false,
  },
  {
    img: Carpet2,
    name: "Название ковра",
    price: {
      price: "65 000 ₽",
    },
    category: "oriental",
    status: {
      status: "Скидка",
      color: "#fff",
      background: "#FE3501",
    },
  },
  {
    img: Carpet3,
    name: "Название ковра",
    price: {
      price: "65 000 ₽",
    },
    category: "modern",
    status: {
      status: "NEW!",
      color: "#000000",
      background: "#FCD901",
    },
  },
  {
    img: Carpet3,
    name: "Название ковра",
    price: {
      price: "65 000 ₽",
      sale: "12 000 ₽",
    },
    category: "modern",
    status: false,
  },
  {
    img: Carpet2,
    name: "Название ковра",
    price: {
      price: "65 000 ₽",
      sale: "12 000 ₽",
    },
    category: "designer",
    status: false,
  },
  {
    img: Carpet1,
    name: "Название ковра",
    price: {
      price: "65 000 ₽",
      sale: "12 000 ₽",
    },
    category: "designer",
    status: false,
  },
];

function Salesman() {
  const [filter, setfilter] = React.useState(carps);
  const [isActive, setIsActive] = React.useState("");
  return (
    <SalesmanContainer>
      <Container>
        <SalesmanContent>
          <ColumnStyled>
            <SalesmanUserInfo>
              <div className="user__info_wrapper">
                <img src={userStatic} alt="img about" />
                <h1 className="mobile__user_name">Название продавца</h1>
              </div>
              <div className="col__name">
                <h1>Название продавца</h1>
                <ul>
                  <li>
                    <img src={location} alt="location" />
                    Иран, г. Тегеран
                  </li>
                  <li>
                    <img src={web} alt="location" />
                    русский, турецкий языки
                  </li>
                </ul>
                <div className="social">
                  <NavLink to="#">
                    <img src={facebook} alt="facebook" />
                  </NavLink>
                  <NavLink to="#">
                    <img src={instagram} alt="instagram" />
                  </NavLink>
                  <NavLink to="#">
                    <img src={linkedin} alt="linkedin" />
                  </NavLink>
                </div>
              </div>
            </SalesmanUserInfo>
            <SalesmanAbout className="is-desktop">
              <SalesmanHeadingTwo>О компании</SalesmanHeadingTwo>
              <p>
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее осмысленного текста
                рыбы на русском языке, а начинающему оратору отточить навык
                публичных выступлений в домашних условиях.
              </p>
              <NavLink to="#">{"Подробнее >> "}</NavLink>
            </SalesmanAbout>
          </ColumnStyled>

          <SalesmanUserInfoCard>
            <SalesmanHeadingTwo>Телефон</SalesmanHeadingTwo>
            <HideAction hidden={"8 XXX XXX-XX-XX"} show={"8 897 093-04-02"} />
            <HideAction hidden={"8 XXX XXX-XX-XX"} show={"8 834 333-42-12"} />
            <br />
            <SalesmanHeadingTwo>Почта</SalesmanHeadingTwo>
            <HideAction hidden={"XXXX@mail.com"} show={"ftiko@mail.com"} />
            <HideAction hidden={"XXXX@mail.com"} show={"gnome@mail.com"} />
          </SalesmanUserInfoCard>
          <SalesmanAbout className="is-mobile">
            <SalesmanHeadingTwo>О компании</SalesmanHeadingTwo>
            <p>
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях.
            </p>
            <NavLink to="#">{"Подробнее >> "}</NavLink>
          </SalesmanAbout>
        </SalesmanContent>
        <CatalogContainer>
          <div className="title__catalog">
            <h1>Каталог продавца</h1>
            <small>2 620 товаров</small>
          </div>
          <div className="catelog-body">
            <div className="col">
              <div className="col">
                <div className="col__item box">
                  <div className="row">
                    <button className="new__status">NEW!</button>
                    <p>Новинки</p>
                    <ArrowIcon />
                  </div>
                  <div className="row">
                    <button className="old__status">Скидка</button>
                    <p>Распродажа</p>
                    <ArrowIcon />
                  </div>
                </div>
                {/* <div className="title__catalog is-mobile">
                  <h1>Каталог продавца</h1>
                  <small>2 620 товаров</small>
                </div> */}
              </div>
              <div className="col">
                <div className="row__flex">
                  <div className="title_col is_mobile">
                    Сортировка <SortIcon />
                  </div>
                  <div className="title_col mt-3">
                    Фильтры <FilterIcon />
                  </div>
                </div>
                <div className="col__item filter">
                  <div className="row br-top">
                    <h3>Стиль</h3>
                    <button
                      onClick={() => {
                        setfilter(carps);
                        setIsActive(null);
                      }}
                    >
                      <CloseIcon
                        onClick={() => {
                          setfilter(carps);
                          setIsActive(null);
                        }}
                      />
                    </button>
                  </div>
                  <div className="scroll__filter__div">
                    {filterMaps.map((item, index) => (
                      <div
                        onClick={() => {
                          setfilter(
                            item?.type !== isActive
                              ? carps.filter(
                                  (__res) => __res.category === item?.type
                                )
                              : carps
                          );
                          setIsActive(
                            item?.type !== isActive ? item?.type : null
                          );
                        }}
                        className={`row ${
                          item?.type === isActive ? "active" : ""
                        } `}
                        key={index}
                      >
                        <CheckBoxIcon isChecked={item?.type === isActive} />
                        <p>{item?.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col_two">
                <div className="col_sort">
                  <p>Сортировка</p>
                  <SelectArrowIcon />
                </div>
              </div>
              <div className="col_items">
                {filter.map((item, i) => {
                  return <Card key={i} data={item} />;
                })}
              </div>
            </div>
          </div>
        </CatalogContainer>
      </Container>
    </SalesmanContainer>
  );
}

export default Salesman;
