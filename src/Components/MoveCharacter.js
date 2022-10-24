
function moveCharacter(deltaX, deltaY, direction) {
    if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
      positionX += deltaX;
    }
    if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
      positionY += deltaY;
    }
    currentDirection = direction;
  }

  export {moveCharacter};