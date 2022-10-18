import React from "react";
import "./styles.css";

import NavBar from "../../components/NavBar";
import PlanetDestination from "../../components/PlanetDestination";
import InfoDestination from "../../components/InfoDestination";
import { useState } from "react";

export default function Destination() {
  const [imagemSrc, setImagemSrc] = useState(
    "/assets/destination/image-moon.png"
  );
  const [textoAlternativo, setTextoAlternativo] = useState("lua");
  const [namePlanet, setNamePlanet] = useState("moon");
  const [infoParagrafo, setInfoParagrafo] = useState(
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  );
  const [distanceKm, setDistanceKm] = useState("384.400 KM");
  const [distanceDays, setDistanceDays] = useState("3 DAYS");

  //
  const [linhaMarcacaoLua, setLinhaMarcacaoLua] =
    useState("linhaMarcacaoBotao");
  const [linhaMarcacaoMarte, setLinhaMarcacaoMarte] = useState("classFake");
  const [linhaMarcacaoEuropa, setLinhaMarcacaoEuropa] = useState("classFake");
  const [linhaMarcacaoTitan, setLinhaMarcacaoTitan] = useState("classFake");

  function alterarParaMoon() {
    setImagemSrc("/assets/destination/image-moon.png");
    setTextoAlternativo("lua");
    setNamePlanet("moon");
    setInfoParagrafo(
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    );
    setDistanceKm("384.400 KM");
    setDistanceDays("3 DAYS");

    //Acredito q da pra melhorar/ fazer com - linhas
    setLinhaMarcacaoLua("linhaMarcacaoBotao");
    setLinhaMarcacaoMarte("");
    setLinhaMarcacaoEuropa("");
    setLinhaMarcacaoTitan("");
  }
  function alterarParaMars() {
    setImagemSrc("/assets/destination/image-mars.webp");
    setTextoAlternativo("mars");
    setNamePlanet("mars");
    setInfoParagrafo(
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    );
    setDistanceKm("225mil. km");
    setDistanceDays("9 months");

    //
    setLinhaMarcacaoLua("");
    setLinhaMarcacaoMarte("linhaMarcacaoBotao");
    setLinhaMarcacaoEuropa("");
    setLinhaMarcacaoTitan("");
  }
  function alterarParaEuropa() {
    setImagemSrc("/assets/destination/image-europa.webp");
    setTextoAlternativo("europa");
    setNamePlanet("europa");
    setInfoParagrafo(
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    );
    setDistanceKm("628mil. km");
    setDistanceDays("3 years");

    //
    setLinhaMarcacaoLua("");
    setLinhaMarcacaoMarte("");
    setLinhaMarcacaoEuropa("linhaMarcacaoBotao");
    setLinhaMarcacaoTitan("");
  }

  function alterarParaTitan() {
    setImagemSrc("/assets/destination/image-titan.webp");
    setTextoAlternativo("titan");
    setNamePlanet("titan");
    setInfoParagrafo(
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    );
    setDistanceKm("1.6bil. km");
    setDistanceDays("7 years");

    //
    setLinhaMarcacaoLua("");
    setLinhaMarcacaoMarte("");
    setLinhaMarcacaoEuropa("");
    setLinhaMarcacaoTitan("linhaMarcacaoBotao");
  }

  const [classNavBar, setClassNavBar] = useState(true);
  const [menuHamburguerClose, setMenuHamburgerClose] = useState(true);
  const [classDestination, setClassDestination] = useState(true);
  const [darkScreen, setDarkScreen] = useState(true);

  function openCloseMenu() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassDestination(!classDestination);
    setDarkScreen(!darkScreen);
  }
  function closeMenuTelaEscura() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassDestination(!classDestination);
    setDarkScreen(!darkScreen);
  }

  return (
    <main
      className={classDestination ? "destinationPage" : "destinationPageHidden"}
    >
      <NavBar
        linhaBordaDestin="linhaNavHome"
        openMenu={openCloseMenu}
        menuHamburger={menuHamburguerClose}
        classeNavBar={classNavBar}
        closeDarkScreen={closeMenuTelaEscura}
        classDarkScreen={darkScreen}
      />

      <section className="destinoConteudo">
        <PlanetDestination imagem={imagemSrc} textoAlt={textoAlternativo} />

        <section>
          <div className="botoesAlterar">
            <button className={linhaMarcacaoLua} onClick={alterarParaMoon}>
              MOON
            </button>
            <button className={linhaMarcacaoMarte} onClick={alterarParaMars}>
              MARS
            </button>
            <button className={linhaMarcacaoEuropa} onClick={alterarParaEuropa}>
              EUROPA
            </button>
            <button className={linhaMarcacaoTitan} onClick={alterarParaTitan}>
              TITAN
            </button>
          </div>
          <InfoDestination
            nomePlaneta={namePlanet}
            conteudoP={infoParagrafo}
            distancia={distanceKm}
            tempo={distanceDays}
          />
        </section>
      </section>
    </main>
  );
}
