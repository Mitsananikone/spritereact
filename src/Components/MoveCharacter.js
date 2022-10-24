import {variables} from './Variables';
import {App} from '../App';

function moveCharacter(deltaX, deltaY, direction) {
  console.log("moveCharacter.js loaded")
    if (variables.positionX + deltaX > 0 && variables.positionX + variables.SCALED_WIDTH + deltaX < variables.canvas.width) {
      variables.positionX += deltaX;
    }
    if (variables.positionY + deltaY > 0 && variables.positionY + variables.SCALED_HEIGHT + deltaY < variables.canvas.height) {
      variables.positionY += deltaY;
    }
    variables.currentDirection = direction;
  }

  export {moveCharacter};