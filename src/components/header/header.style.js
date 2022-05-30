import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  background-color: #000;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const HeaderLogo = styled.div`
  width: 160px;
  height: 30.35px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  gap: 25px;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }
`;

export const StatusBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  padding: 3px 25px;
  &:nth-child(1) {
    border-left: 2px solid #3a3a3a;
    border-right: 2px solid #3a3a3a;
  }
  &:nth-child(2) {
    border-right: 2px solid #3a3a3a;
  }
`;

export const StatusBarItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  color: #ffffff;
  letter-spacing: 2px;
`;

export const SelectBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMobile = styled.div`
  @media screen and (min-width: 920px) {
    display: none;
  }
  img {
    width: 100px;
    height: 35px;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  .MobileLogo{
    @media screen and (max-width: 400px) {
      width: 120px;
    }
  }
`;
export const HeaderMobileOpened = styled.div`
  @media screen and (min-width: 920px) {
    display: none;
  }
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #000;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  height: ${({ isOpen }) => (isOpen ? "150px" : "0px")};
  padding: ${({ isOpen }) => (isOpen ? "20px 0" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    margin-top: 10px;
    transition: all 0.3s ease-in-out;
  }
`;
export const ActiveNavbarItem = styled(NavLink)`
  &.active {
    border-radius: 2px;
    background: #0052b9;
  }
`;
export const NavbarItem = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  gap: 10px;
  width: auto;
  height: 39px;
  font-weight: 700;
  border-radius: 2px;
  margin: 0 20px;
`;
