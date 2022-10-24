import {loadImage, drawFrame} from './DrawImage';
import {moveCharacter} from './MoveCharacter';
import {variables} from './Variables';

function gameLoop(variables) {

  console.log("gameLoop.js loaded")

  variables.ctx.clearRect(0, 0, variables.canvas.width, variables.canvas.height);
  
    let hasMoved = false;
  
    if (variables.keyPresses.w) {
      moveCharacter(0, -variables.MOVEMENT_SPEED, variables.FACING_UP);
      hasMoved = true;
    } else if (variables.keyPresses.s) {
      moveCharacter(0, variables.MOVEMENT_SPEED, variables.FACING_DOWN);
      hasMoved = true;
    }
  
    if (variables.keyPresses.a) {
      moveCharacter(-variables.MOVEMENT_SPEED, 0, variables.FACING_LEFT);
      hasMoved = true;
    } else if (variables.keyPresses.d) {
      moveCharacter(variables.MOVEMENT_SPEED, 0, variables.FACING_RIGHT);
      hasMoved = true;
    }
  
    if (hasMoved) {
      variables.frameCount++;
      if (variables.frameCount >= variables.FRAME_LIMIT) {
        variables.frameCount = 0;
        variables.currentLoopIndex++;
        if (variables.currentLoopIndex >= variables.CYCLE_LOOP.length) {
          variables.currentLoopIndex = 0;
        }
      }
    }
  
    if (!hasMoved) {
      variables.currentLoopIndex = 0;
    }
  
    drawFrame(variables.CYCLE_LOOP[variables.currentLoopIndex], variables.currentDirection, variables.positionX, variables.positionY);
    window.requestAnimationFrame(gameLoop);
  }

  export {gameLoop};