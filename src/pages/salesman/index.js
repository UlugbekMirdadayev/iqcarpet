import React from "react";
import { Container } from "../../assets/styles/global.styles";
import { NavLink } from "react-router-dom";
import HideAction from "../../components/ui/hideAction";
import {
  CatalogContainer,
  // CatalogContainer,
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
import { ArrowIcon } from "../../components/icon";

// const filterMaps = [
//   {
//     id: 1,
//     name: "Восточный",
//     type: "oriental",
//   },
//   {
//     id: 2,
//     name: "Современный",
//     type: "modern",
//   },
//   {
//     id: 3,
//     name: "Дизайнерский",
//     type: "designer",
//   },
//   {
//     id: 4,
//     name: "Винтажный",
//     type: "vintage",
//   },
// ];
// const carps = [
//   {
//     img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
//     name: "Mato",
//     price: 123,
//     category: "vintage",
//   },
//   {
//     img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
//     name: "Mato",
//     price: 13,
//     category: "oriental",
//   },
//   {
//     img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
//     name: "Mato",
//     price: 23,
//     category: "modern",
//   },
//   {
//     img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
//     name: "Mato",
//     price: 4443,
//     category: "modern",
//   },
//   {
//     img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
//     name: "Mato",
//     price: 1443,
//     category: "designer",
//   },
//   {
//     img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
//     name: "Mato",
//     price: 3423,
//     category: "designer",
//   },
// ];

function Salesman() {
  // const [filter, setfilter] = React.useState(carps);
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
              </div>
              <div className="col">
                <div className="title_col mt-3">Фильтры</div>
                <div className="col__item filter"></div>
              </div>
            </div>
          </div>
        </CatalogContainer>
      </Container>
    </SalesmanContainer>
  );
}

export default Salesman;
