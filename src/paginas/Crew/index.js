import React from "react";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

import NavBar from "../../components/NavBar";
import InfoHome from "../../components/InfoHome";

export default function Crew() {
  const [subtitulo, setSubtitulo] = useState("Commander");
  const [titulo, setTitulo] = useState("Douglas Hurley");
  const [paragrafoCrew, setParagrafoCrew] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2"
  );
  const [crewImage, setCrewImage] = useState(
    "/assets/crew/image-douglas-hurley.webp"
  );
  const [altCrew, setAltCrew] = useState("altComanderCrew");

  const [bolinha1, setBolinha1] = useState("opaco");
  const [bolinha2, setBolinha2] = useState("");
  const [bolinha3, setBolinha3] = useState("");
  const [bolinha4, setBolinha4] = useState("");

  const [selectedTrend, setSelectedTrend] = useState("0");

  function alterarParaCommander() {
    setSubtitulo("comander");
    setTitulo("Douglas Hurley");
    setParagrafoCrew(
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    );
    setCrewImage("/assets/crew/image-douglas-hurley.webp");
    setAltCrew("altComanderCrew");

    setBolinha1("opaco");
    setBolinha2("");
    setBolinha3("");
    setBolinha4("");

    setSelectedTrend("3");
  }

  function alterarParaEspecialista() {
    setSubtitulo("Mission Specialist ");
    setTitulo("MARK SHUTTLEWORTH");
    setParagrafoCrew(
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    );
    setCrewImage("/assets/crew/image-mark-shuttleworth.webp");
    setAltCrew("altEspecialistaCrew");

    setBolinha1("");
    setBolinha2("opaco");
    setBolinha3("");
    setBolinha4("");

    setSelectedTrend("0");
  }
  function alterarParaPiloto() {
    setSubtitulo("Pilot ");
    setTitulo("VICTOR GLOVER");
    setParagrafoCrew(
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    );
    setCrewImage("/assets/crew/image-victor-glover.webp");
    setAltCrew("altPilotCrew");

    setBolinha1("");
    setBolinha2("");
    setBolinha3("opaco");
    setBolinha4("");

    setSelectedTrend("1");
  }
  function alterarParaEnginner() {
    setSubtitulo("Flight Engineer");
    setTitulo("Anousheh Ansari");
    setParagrafoCrew(
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    );
    setCrewImage("/assets/crew/image-anousheh-ansari.webp");
    setAltCrew("altEnginnerCrew");

    setBolinha1("");
    setBolinha2("");
    setBolinha3("");
    setBolinha4("opaco");

    setSelectedTrend("2");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedTrend === "0") {
        alterarParaEspecialista();
        setSelectedTrend("1");
      } else if (selectedTrend === "1") {
        alterarParaPiloto();
        setSelectedTrend("2");
      } else if (selectedTrend === "2") {
        alterarParaEnginner();
        setSelectedTrend("3");
      } else if (selectedTrend === "3") {
        alterarParaCommander();
        setSelectedTrend("0");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedTrend]);

  const [classNavBar, setClassNavBar] = useState(true);
  const [menuHamburguerClose, setMenuHamburgerClose] = useState(true);
  const [classCrew, setClassCrew] = useState(true);
  const [darkScreen, setDarkScreen] = useState(true);

  function openCloseMenu() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassCrew(!classCrew);
    setDarkScreen(!darkScreen);
  }

  function closeMenuTelaEscura() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassCrew(!classCrew);
    setDarkScreen(!darkScreen);
  }

  return (
    <main className={classCrew ? "crewPage" : "crewPageHidden"}>
      <NavBar
        linhaBordaCrew="linhaNavHome"
        openMenu={openCloseMenu}
        menuHamburger={menuHamburguerClose}
        classeNavBar={classNavBar}
        closeDarkScreen={closeMenuTelaEscura}
        classDarkScreen={darkScreen}
      />

      <section className="crewflex">
        <h2 className="subtitBlockMobile">
          <span>02</span>
          MEET YOUR CREW
        </h2>

        <section className="crewSectionInfo">
          <h2 className="subtituloMeet">
            <span>02</span>
            MEET YOUR CREW
          </h2>
          <InfoHome
            clasSection="infoCrew"
            subt={subtitulo}
            title={titulo}
            parag={paragrafoCrew}
          />
          <div className="bolinhaFlex">
            <div
              id={bolinha1}
              onClick={alterarParaCommander}
              className="bolinhaSlide"
            ></div>

            <div
              id={bolinha2}
              onClick={alterarParaEspecialista}
              className="bolinhaSlide"
            ></div>

            <div
              id={bolinha3}
              onClick={alterarParaPiloto}
              className="bolinhaSlide"
            ></div>

            <div
              id={bolinha4}
              onClick={alterarParaEnginner}
              className="bolinhaSlide"
            ></div>
          </div>
        </section>
        <section className="sectionImgCrew">
          <img className="imgCrew" src={crewImage} alt={altCrew} />
        </section>
      </section>
    </main>
  );
}
