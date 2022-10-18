import React from "react";
import "./styles.css";

export default function PlanetDestination(props) {
  return (
    <section className="planetasDestino">
      <h2>
        <span>01</span> PICK YOUR DESTINATION
      </h2>
      <img src={props.imagem} alt={props.textoAlt} />
    </section>
  );
}
