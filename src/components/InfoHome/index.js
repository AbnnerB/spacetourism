import React from "react";

import "./styles.css";

export default function InfoHome(props) {
  return (
    <section className={props.clasSection}>
      <h3>{props.subt}</h3>

      <h2>{props.title}</h2>

      <p>{props.parag} </p>
    </section>
  );
}
