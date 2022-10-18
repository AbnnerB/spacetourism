import React from "react";
import "./styles.css";

export default function InfoDestination(props) {
  return (
    <section className="infoDestino">
      <h2>{props.nomePlaneta}</h2>

      <p className="informacoesPlanet">{props.conteudoP}</p>

      <div className="tempoDistancia">
        <div className="distancia">
          <h3>AVG DISTANCE</h3>
          <p>{props.distancia}</p>
        </div>

        <div className="tempo">
          <h3>Est. travel time</h3>
          <p>{props.tempo}</p>
        </div>
      </div>
    </section>
  );
}
