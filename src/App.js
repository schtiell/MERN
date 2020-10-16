import React from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo, { Adios } from "./components/HolaMundo";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HolaMundo />
        <Adios />
        <Saludar name="Joaquin Sayago" edad="34"/>
      </header>
    </div>
  );
}

export default App;
