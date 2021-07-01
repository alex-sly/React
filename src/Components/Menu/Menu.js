import React, { useContext } from "react";
import styled from "styled-components";
// import dbMenu from "../DBMenu";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";
import { useFetch } from "../Hooks/useFetch";
import loadingImage from "../../image/loading.gif";
import { Context } from "../Functions/context";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = () => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);
  const res = useFetch();
  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      {res.response ? (
        <div>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </SectionMenu>
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
        </div>
      ) : res.error ? (
        <div>Sorry, we will fix it soon...</div>
      ) : (
        <img src={loadingImage} alt="Loading..." />
      )}
    </MenuStyled>
  );
};
