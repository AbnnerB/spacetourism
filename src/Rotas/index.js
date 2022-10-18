import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../paginas/Home";
import Destination from "../paginas/Destination";
import Crew from "../paginas/Crew";
import Technology from "../paginas/Technology";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
