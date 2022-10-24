import {gameLoop} from './GameLoop';

function loadImage() {
    let img = new Image();
    img.src = './img/player.png';
    img.onload = function() {
      window.requestAnimationFrame(gameLoop);
    };
    return img;
  }
  
function drawFrame(frameX, frameY, canvasX, canvasY) {
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const SCALE = 1;
const WIDTH = 32;
const HEIGHT = 32;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

let img = loadImage();
ctx.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

  export {loadImage, drawFrame};