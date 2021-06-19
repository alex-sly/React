import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { NavBar } from "./Components/NavBar";
import { Menu } from "./Components/Menu";
import { ModalItem } from "./Components/ModalItem";
import { Order } from "./Components/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </React.Fragment>
  );
}

export default App;
