export class variables {
    constructor(SCALE, WIDTH, HEIGHT, SCALED_WIDTH, SCALED_HEIGHT, CYCLE_LOOP, FACING_UP, FACING_DOWN, FACING_LEFT, FACING_RIGHT, FRAME_LIMIT, MOVEMENT_SPEED, canvas, ctx, keypresses, currentDirection, currentLoopIndex, frameCount, positionX, positionY, img) {
        this.SCALE = 1;
        this.WIDTH = 32;
        this.HEIGHT = 32;
        this.SCALED_WIDTH = SCALE * WIDTH;
        this.SCALED_HEIGHT = SCALE * HEIGHT;
        this.CYCLE_LOOP = [0, 1, 0, 2];
        this.FACING_DOWN = 0;
        this.FACING_UP = 3;
        this.FACING_LEFT = 1;
        this.FACING_RIGHT = 2;
        this.FRAME_LIMIT = 12;
        this.MOVEMENT_SPEED = 1;

        this.canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');

        this.keyPresses = {};
        this.currentDirection = FACING_DOWN;
        this.currentLoopIndex = 0;
        this.frameCount = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.img = new Image();
            }
}