import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../assets/styles/global.styles";
import {
  HeaderLinks,
  HeaderLogo,
  HeaderMobile,
  HeaderMobileOpened,
  HeaderNav,
  HeaderRow,
  HeaderStyled,
  SelectBarStyled,
  StatusBarItem,
  StatusBarItemCount,
  StatusBarStyled,
} from "./header.style";
import Logo from "../../static/logo.svg";
import { PrimaryButton } from "../ui/button";
import { CartIcon, CatalogIcon, HeartIcon, SearchIcon } from "../icon";
import Select from "../form/select";
import { MenuIcon } from "./../icon/index";

const Courses = [
  {
    label: "USD",
    value: "USD",
  },
  {
    label: "RUB",
    value: "RUB",
  },
  {
    label: "EUR",
    value: "EUR",
  },
];

const Languages = [
  {
    label: "RU",
    value: "Ru",
  },
  {
    label: "EN",
    value: "En",
  },
];

export default function Header() {
  const [isMobile, setIsMobile] = React.useState(false);
  return (
    <HeaderStyled>
      <Container>
        <HeaderRow>
          <HeaderLogo>
            <img src={Logo} alt="" />
          </HeaderLogo>
          <HeaderNav>
            <PrimaryButton>
              Каталог <CatalogIcon />
            </PrimaryButton>
            <HeaderLinks>
              <NavLink to="/">Продавцы</NavLink>
              <NavLink to="/">Контакты</NavLink>
            </HeaderLinks>
          </HeaderNav>
          <StatusBarStyled>
            <StatusBarItem>
              <HeartIcon />
              <StatusBarItemCount>(2)</StatusBarItemCount>
            </StatusBarItem>
            <StatusBarItem>
              <CartIcon />
              <StatusBarItemCount>(2)</StatusBarItemCount>
            </StatusBarItem>
          </StatusBarStyled>
          <SelectBarStyled>
            <Select options={Courses ?? []} />
            <Select options={Languages ?? []} />
          </SelectBarStyled>
        </HeaderRow>
        <HeaderMobile>
          <MenuIcon isOpen={isMobile} onClick={() => setIsMobile(!isMobile)} />
          <SearchIcon />
          <HeaderLogo>
            <img src={Logo} alt="" />
          </HeaderLogo>
          <HeartIcon />
          <CartIcon />
        </HeaderMobile>
        <HeaderMobileOpened isOpen={isMobile}>
          <PrimaryButton>
            Каталог <CatalogIcon />
          </PrimaryButton>
          <NavLink to="/">Продавцы</NavLink>
          <NavLink to="/">Контакты</NavLink>
        </HeaderMobileOpened>
      </Container>
    </HeaderStyled>
  );
}
