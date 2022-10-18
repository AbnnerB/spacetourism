import React from "react";
import { useState } from "react";
import "./styles.css";

import NavBar from "../../components/NavBar";

export default function Technology() {
  const [titTech, setTitTech] = useState("LAUNCH VEHICLE");
  const [paragTech, setParagTech] = useState(
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  );
  const [imgTech, setImgTech] = useState(
    "/assets/technology/image-launch-vehicle-portrait.jpg"
  );

  const [efeitoButton1, setEfeitoButton1] = useState("botaoMarcado");
  const [efeitoButton2, setEfeitoButton2] = useState("");
  const [efeitoButton3, setEfeitoButton3] = useState("");

  function vehicle() {
    setTitTech("LAUNCH VEHICLE");
    setParagTech(
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    );
    setImgTech("/assets/technology/image-launch-vehicle-portrait.jpg");

    setEfeitoButton1("botaoMarcado");
    setEfeitoButton2("");
    setEfeitoButton3("");
  }
  function spacePort() {
    setTitTech("SPACEPORT");
    setParagTech(
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    );

    setImgTech("/assets/technology/image-spaceport-portrait.jpg");

    setEfeitoButton1("");
    setEfeitoButton2("botaoMarcado");
    setEfeitoButton3("");
  }
  function capsule() {
    setTitTech("SPACE CAPSULE");
    setParagTech(
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    );
    setImgTech("/assets/technology/image-space-capsule-portrait.jpg");

    setEfeitoButton1("");
    setEfeitoButton2("");
    setEfeitoButton3("botaoMarcado");
  }

  const [classNavBar, setClassNavBar] = useState(true);
  const [menuHamburguerClose, setMenuHamburgerClose] = useState(true);
  const [classTech, setClassTech] = useState(true);
  const [darkScreen, setDarkScreen] = useState(true);

  function openCloseMenu() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassTech(!classTech);
    setDarkScreen(!darkScreen);
  }

  function closeMenuTelaEscura() {
    setMenuHamburgerClose(!menuHamburguerClose);
    setClassNavBar(!classNavBar);
    setClassTech(!classTech);
    setDarkScreen(!darkScreen);
  }

  return (
    <main className={classTech ? "techPage" : "techPageHidden"}>
      <NavBar
        linhaBordaTech="linhaNavHome"
        openMenu={openCloseMenu}
        menuHamburger={menuHamburguerClose}
        classeNavBar={classNavBar}
        closeDarkScreen={closeMenuTelaEscura}
        classDarkScreen={darkScreen}
      />

      <section className="containerTech">
        <h3 className="tituloTechBlockMobile">
          <span>03</span> SPACE LAUNCH 101
        </h3>
        <section className="techInfo">
          <h3 className="tituloTech">
            <span>03</span> SPACE LAUNCH 101
          </h3>
          <section className="botoesEInfo">
            <div className="botoes">
              <div onClick={vehicle} className={efeitoButton1}>
                1
              </div>
              <div onClick={spacePort} className={efeitoButton2}>
                2
              </div>
              <div onClick={capsule} className={efeitoButton3}>
                3
              </div>
            </div>
            <div className="techParagrafo">
              <h3>THE TERMINOLOGY…</h3>
              <h2>{titTech}</h2>
              <p>{paragTech}</p>
            </div>
          </section>
        </section>
        <section className="imagemTech">
          <img src={imgTech} alt="foguete" />
        </section>
      </section>
    </main>
  );
}
