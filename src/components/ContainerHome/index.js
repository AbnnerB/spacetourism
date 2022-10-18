import React from "react";
import "./styles.css";

import InfoHome from "../InfoHome";
import CircleExplore from "../CircleExplore";

export default function Container() {
  return (
    <main className="container">
      <InfoHome
        clasSection="infoHome"
        subt="SO, YOU WANT TO TRAVEL TO"
        title="SPACE"
        parag="  Let’s face it; if you want to go to space, you might as well genuinely      go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world     experience!"
      />
      <CircleExplore />
    </main>
  );
}
