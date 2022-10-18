import React, { useState } from "react";
import "./styles.css";

import NavBar from "../../components/NavBar";
import ContainerHome from "../../components/ContainerHome";

export default function Home() {
  const [classNavBar, setClassNavBar] = useState(true);
  const [menuHamburguerClose, setMenuHamburgerClose] = useState(true);
  const [classHome, setClassHome] = useState(true);
  const [darkScreen, setDarkScreen] = useState(true);

  function openCloseMenu() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassHome(!classHome);
    setDarkScreen(!darkScreen);
  }
  function closeMenuTelaEscura() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassHome(!classHome);
    setDarkScreen(!darkScreen);
  }

  return (
    <main className={classHome ? "home" : "homeHidden"}>
      <NavBar
        linhaBordaHome="linhaNavHome"
        openMenu={openCloseMenu}
        menuHamburger={menuHamburguerClose}
        classeNavBar={classNavBar}
        closeDarkScreen={closeMenuTelaEscura}
        classDarkScreen={darkScreen}
      />
      <ContainerHome />
    </main>
  );
}
