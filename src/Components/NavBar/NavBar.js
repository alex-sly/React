import React, { useContext } from "react";
import styled from "styled-components";
import logoImg from "../../image/logo.svg";
import { Context } from "../Functions/context";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 20px;
  color: white;
  padding: 10px 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 20px;
  color: white;
  padding: 10px 0;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 20px;
`;

const Figure = styled.figure`
  margin: 0 20px;
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ? (
        <User>
          <Figure>
            {/* <img src={signImg} alt={authentication.displayName} /> */}
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LogOut title="выйти" onClick={logOut}>
            X
          </LogOut>
        </User>
      ) : (
        <Login onClick={logIn}>войти</Login>
      )}
    </NavBarStyled>
  );
};
