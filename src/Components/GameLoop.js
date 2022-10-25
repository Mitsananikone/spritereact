import {loadImage, drawFrame} from './DrawImage';
import {moveCharacter} from './MoveCharacter';
import {Player} from './Player';
import {useState} from 'react';
import {DrawCanvas} from './Canvas';

function GameLoop() {

  console.log("gameLoop.js loaded")

  const [hasMoved, setHaveMoved] = useState(0);
  
    if (Player.keyPresses.w) {
      moveCharacter(0, -Player.movement_speed, Player.facing_up);
      setHaveMoved(true);
    } else if (Player.keyPresses.s) {
      moveCharacter(0, Player.movement_speed, Player.facing_down);
      setHaveMoved(true);
    }
  
    if (Player.keyPresses.a) {
      moveCharacter(-Player.movement_speed, 0, Player.facing_left);
      setHaveMoved(true);
    } else if (Player.keyPresses.d) {
      moveCharacter(Player.movement_speed, 0, Player.facing_right);
      setHaveMoved(true);
    }
  
    if (hasMoved) {
      Player.frameCount++;
      if (Player.frameCount >= Player.frame_limit) {
        Player.frameCount = 0;
        Player.currentLoopIndex++;
        if (Player.currentLoopIndex >= Player.cycle_loop.length) {
          Player.currentLoopIndex = 0;
        }
      }
    }
  
    if (!hasMoved) {
      Player.currentLoopIndex = 0;
    }
  
    drawFrame(Player.cycle_loop[Player.currentLoopIndex], Player.currentDirection, Player.positionX, Player.positionY);
    window.requestAnimationFrame(GameLoop);
  }

  export {GameLoop};