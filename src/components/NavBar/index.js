import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = (props) => {
  let nomeImagemHb = "/assets/shared/icon-hamburger.svg";
  let nomeImagemClose = "/assets/shared/icon-close.svg";

  return (
    <header>
      <div
        onClick={props.closeDarkScreen}
        className={props.classDarkScreen ? "classeFake" : "telaEscura"}
      ></div>

      <div className="logoTopo">
        <img src="/assets/shared/logo.svg" alt="LogoTopo" />
      </div>

      <div className="linhaTopo"></div>

      <img
        onClick={props.openMenu}
        src={props.menuHamburger ? nomeImagemHb : nomeImagemClose}
        alt="menuHamburger"
        className="menuIcon"
      />

      <ul className={props.classeNavBar ? "navBar" : "navBar2"}>
        <li className="linkTopo marginLeftPrimeiroLink">
          <Link className="" to="/">
            <span>00</span> Home
          </Link>

          <div className={props.linhaBordaHome}></div>
        </li>
        <li className="linkTopo">
          <Link to="/destination">
            <span>01</span> Destination
          </Link>
          <div className={props.linhaBordaDestin}></div>
        </li>
        <li className="linkTopo">
          <Link to="/crew">
            <span>02</span> Crew
          </Link>
          <div className={props.linhaBordaCrew}></div>
        </li>
        <li className="linkTopo">
          <Link to="/technology">
            <span>03</span> Technology
          </Link>
          <div className={props.linhaBordaTech}></div>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
