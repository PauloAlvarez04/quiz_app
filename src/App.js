import "./App.css";
import React, { useState, useEffect } from "react";
import { get } from "./componentes/preguntas/fetch";
import ReactDOM from "react-dom";
import Navbar from "./componentes/navbar/navbar";
import Jogo from "./componentes/jogo.js";

function App() {

  return (
    <>
      <Navbar />
      <div className="tabelaJogo">

      <Jogo />
      </div>
    </>
  );
}

export default App;
