import {loadImage, DrawFrame} from './DrawImage';
import {moveCharacter} from './MoveCharacter';
import {Player} from './Player';
import {useState} from 'react';
import {DrawCanvas} from './Canvas';

function GameLoop() {

  console.log("gameLoop.js loaded")
  let keyPresses = {};
  const [hasMoved, setHaveMoved] = useState(0);
  
    if (keyPresses.w) {
      moveCharacter(0, -Player.movement_speed, Player.facing_up);
      setHaveMoved(true);
    } else if (keyPresses.s) {
      moveCharacter(0, Player.movement_speed, Player.facing_down);
      setHaveMoved(true);
    }
  
    if (keyPresses.a) {
      moveCharacter(-Player.movement_speed, 0, Player.facing_left);
      setHaveMoved(true);
    } else if (keyPresses.d) {
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
  
    DrawFrame(Player.cycle_loop[Player.currentLoopIndex], Player.currentDirection, Player.positionX, Player.positionY);
    window.requestAnimationFrame(GameLoop);
  }

  export {GameLoop};