//import logo from './logo.svg';
import './App.css';
import {loadImage, drawFrame} from './Components/DrawImage';
import {gameLoop} from './Components/GameLoop';
import {variables} from './Components/Variables';
import {moveCharacter} from './Components/MoveCharacter';

function App() {
  console.log("App.js loaded")
  let keyPresses = {};
  //console.log(variables)

    window.addEventListener('keydown', keyDownListener);
  function keyDownListener(event) {
      keyPresses[event.key] = true;
  }

  window.addEventListener('keyup', keyUpListener);
  function keyUpListener(event) {
      keyPresses[event.key] = false;
  }

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
    

  return ( 

    <div id="root">{drawFrame()}</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App;
