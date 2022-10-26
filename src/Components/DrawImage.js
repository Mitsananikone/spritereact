import {GameLoop} from './GameLoop';
import {Player} from './Player';
import {Canvas} from './Canvas.js';
import { useRef } from 'react';

function loadImage() {
   console.log("loadImage() loaded")
    let img = new Image();
    img.src = '../../Images/Player.png';
    img.onload = function() {
      window.requestAnimationFrame(GameLoop);
      console.log("requestAnimationFrame(gameloop() loaded)")
    };
  }
  
function DrawFrame(frameX, frameY, canvasX, canvasY) {
// let Canvas = document.getElementsByClassName('Canvas');
// let ctx = Canvas.getContext('2d');
console.log("drawFrame() loaded")

console.log("Canvas:" + JSON.stringify({Canvas}));

const ccanvas = document.getElementById("Canvas");
console.log("ccanvas:" + JSON.stringify({ccanvas}));

const ctx = ccanvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

const CanvasRef = useRef('null');
console.log("CanvasRef:" + JSON.stringify({CanvasRef}));

const CanvasObj = CanvasRef.current;
console.log("CanvasObj:" + JSON.stringify({CanvasObj}));

// const ctx = CanvasObj.getContext('2d');  


return (
  ctx.drawImage(Player.img,
                frameX * Player.width, frameY * Player.height, Player.width, Player.height,
                canvasX, canvasY, Player.scaled_width, Player.scaled_height)
);
}

  export {loadImage, DrawFrame};