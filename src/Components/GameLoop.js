

function gameLoop() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    let hasMoved = false;
  
    if (keyPresses.w) {
      moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
      hasMoved = true;
    } else if (keyPresses.s) {
      moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
      hasMoved = true;
    }
  
    if (keyPresses.a) {
      moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
      hasMoved = true;
    } else if (keyPresses.d) {
      moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
      hasMoved = true;
    }
  
    if (hasMoved) {
      frameCount++;
      if (frameCount >= FRAME_LIMIT) {
        frameCount = 0;
        currentLoopIndex++;
        if (currentLoopIndex >= CYCLE_LOOP.length) {
          currentLoopIndex = 0;
        }
      }
    }
  
    if (!hasMoved) {
      currentLoopIndex = 0;
    }
  
    drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
    window.requestAnimationFrame(gameLoop);
  }