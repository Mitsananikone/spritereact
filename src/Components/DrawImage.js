import {gameLoop} from './GameLoop';
import {Player} from './Player';

function loadImage() {
   console.log("loadImage() loaded")
    let img = new Image();
    img.src = '../../../Images/Player.png';
    img.onload = function() {
      window.requestAnimationFrame(gameLoop);
      console.log("requestAnimationFrame(gameloop() loaded)")
    };
  }
  
function drawFrame(frameX, frameY, canvasX, canvasY, gameLoop, Player) {
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
console.log("drawFrame() loaded")
let img = loadImage(gameLoop, Player);

return (
  ctx.drawImage(img,
                frameX * Player.width, frameY * Player.HEIGHT, Player.width, Player.HEIGHT,
                canvasX, canvasY, Player.scaled_width, Player.scaled_height)
);
}

  export {loadImage, drawFrame};