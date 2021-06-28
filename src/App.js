import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyDBDgWqKkd2ZmLO71MJ-_LDy3IXvaD1vIE",
  authDomain: "donald-a1e45.firebaseapp.com",
  databaseURL: "https://donald-a1e45-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "donald-a1e45",
  storageBucket: "donald-a1e45.appspot.com",
  messagingSenderId: "668333525238",
  appId: "1:668333525238:web:be99021cc05774924384d7",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} firebaseDatsbase={firebase.database} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </React.Fragment>
  );
}

export default App;
