// A class representing an animation that occurs when two objects collide.
export class CollisionAnimation {
    constructor(game, x, y){
        // Collision Animation Constructor
        this.game = game;
        this.image = document.getElementById('boom');
        this.spriteWidth = 100;
        this.spriteHeight = 90;
        this.sizeModifer = Math.random() + 0.5;
        this.width = this.spriteWidth * this.sizeModifer;
        this.height = this.spriteHeight * this.sizeModifer;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.frameX = 0;
        this.maxFrame = 4;
        this.markedForDeletion = false;
        this.fps = Math.random() * 10 + 5;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
    }
    // Draws the animation to the specified context.
    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, 
            this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    // Updates the animation's position and frame.
    update(deltaTime){
        this.x -= this.game.speed;
        if ( this.frameTimer > this.frameInterval){
            this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
}