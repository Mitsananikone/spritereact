import {gameLoop} from './GameLoop';
import {variables} from './Variables';

function loadImage(gameLoop) {
  // console.log("loadImage() loaded")
    let img = new Image();
    img.src = '../../../Images/player.png';
    img.onload = function() {
      window.requestAnimationFrame(gameLoop(variables));
      console.log("requestAnimationFrame(gameloop() loaded)")
    };
  
  }
  
function drawFrame(frameX, frameY, canvasX, canvasY, gameLoop) {
//let canvas = document.querySelector('canvas');
//let ctx = canvas.getContext('2d');
console.log("drawFrame() loaded")
let img = loadImage(gameLoop, variables);
return (
  variables.ctx.drawImage(img,
                frameX * variables.WIDTH, frameY * variables.HEIGHT, variables.WIDTH, variables.HEIGHT,
                canvasX, canvasY, variables.SCALED_WIDTH, variables.SCALED_HEIGHT)
);
}

  export {loadImage, drawFrame};