//import logo from './logo.svg';
import  { useState } from 'react';
import './App.css';
import {loadImage, drawFrame} from './Components/DrawImage';
import {GameLoop} from './Components/GameLoop';
import {Player} from './Components/Player';
import {moveCharacter} from './Components/MoveCharacter';
import { DrawCanvas } from './Components/Canvas';
import { render } from '@testing-library/react';
import Canvas from './canvas';

function App() {
  console.log("App.js loaded")
  let keyPresses = {};
  <loadImage />

  return ( 
    <canvas id="canvas" ></canvas>
    // <DrawCanvas />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App;
