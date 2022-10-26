//import logo from './logo.svg';
import  { useState, useRef } from 'react';
import './App.css';
import {loadImage, DrawFrame} from './Components/DrawImage';
import {GameLoop} from './Components/GameLoop';
import {Player} from './Components/Player';
import {moveCharacter} from './Components/MoveCharacter';
import { DrawCanvas, Canvas } from './Components/Canvas';
import { render } from '@testing-library/react';

const draw = context => {
  // context.fillStyle = "rgb(200, 0, 0)";
  // context.fillRect(10, 10, 50, 50);
  loadImage();
};

function App() {
  console.log("App.js loaded")
  
  function DrawFrame(frameX, frameY, canvasX, canvasY) {
  const ccanvas = document.getElementById("Canvas");
  console.log("ccanvas:" + JSON.stringify({ccanvas}));

  const ctx = ccanvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 150, 100);

  const CanvasRef = useRef('null');
  console.log("CanvasRef:" + JSON.stringify({CanvasRef}));

  const CanvasObj = CanvasRef.current;
  console.log("CanvasObj:" + JSON.stringify({CanvasObj}));

  
  return (
    ctx.drawImage(Player.img,
      frameX * Player.width, frameY * Player.height, Player.width, Player.height,
      canvasX, canvasY, Player.scaled_width, Player.scaled_height)

      
  );
}
DrawFrame();
}

export default App;

// https://medium.com/@martin.crabtree/react-creating-an-interactive-canvas-component-e8e88243baf6