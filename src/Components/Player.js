import { useState } from 'react';
import React from 'react';
import  {loadImage, drawFrame} from './DrawImage';
import {canvas, ctx} from './Canvas.js';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.scale = 1;
        this.width = 32;
        this.height = 32;
        this.scaled_width = this.scale * this.width;
        this.scaled_height = this.scale * this.height;

        this.cycle_loop = [0, 1, 0, 2];
        this.frame_limit = 12;
        this.movement_speed = 1;

        function FaceDirection() {
           
            const [facing, setFacing] = useState(0);
            this.facing_down = 0;
            this.facing_left = 1;
            this.facing_right = 2;
            this.facing_up = 3;
            setFacing(1);
            return facing;
            }
        
        this.frameCount = 0;
        this.img = new Image('../../Images/Player.png')

        this.positionX = {positionX: 0}
        this.positionY = {positionY: 0}
    }
}

function moveCharacter(deltaX, deltaY, direction) {
  console.log("moveCharacter.js loaded")
    if (Player.positionX + deltaX > 0 && Player.positionX + Player.scaled_width + deltaX < canvas.width) {
        Player.positionX += deltaX;
    }
    if (Player.positionY + deltaY > 0 && Player.positionY + Player.scaled_height + deltaY < canvas.height) {
        Player.positionY += deltaY;
    }
    Player.currentDirection = direction;
  }

  export {Player, moveCharacter};