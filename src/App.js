import React from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo, { Adios } from "./components/HolaMundo";
import Saludar from "./components/Saludar";
import SaludoConstantes from "./components/SaludoConstantes";

function App() {

  //Constantes con JSX
  const nombre = "Valeria Sayago";
  const edad = 11;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Ejemplo de comentario dentro de JSX 
        Instancias de componentes usando props = "propiedades"*/}

        <HolaMundo />
        <Adios />
        <Saludar name="Joaquin Sayago" edad="35" />
        <Saludar name="Yamilet Castelan" edad="30" />

        {/*Props definiendo constantes... */}

        <SaludoConstantes name={nombre} age={edad} />

      </header>
    </div>
  );
}

export default App;
