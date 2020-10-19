import React from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo, { Adios } from "./components/HolaMundo";
import Saludar from "./components/Saludar";
import SaludoConstantes from "./components/SaludoConstantes";
import SaludoConstantesObjeto from "./components/SaludoConstantesObjeto";

function App() {

  const nombre = "Joaquin Sayago";
  const edad = 35;

  const user ={
    user: "Lourdes V",
    color: "verde",
    direccion: "xalapa ver"
  };

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
        <SaludoConstantes name={nombre} age={edad}/>

        {/*Props definiendo constantes... */}
        <SaludoConstantesObjeto info={user} />


      </header>
    </div>
  );
}

export default App;
