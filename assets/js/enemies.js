// Represents an enemy in the game.
class Enemy {
    constructor(){
        // Enemy Constructor
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
    }
    // Updates the enemy's position and animation.
    update(deltaTime){
        // movement
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        // check if off screen
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    // Draws the enemy on the canvas.
    draw(context){
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}
// Extends the Enemy class to create a flying enemy.
export class FlyingEnemy extends Enemy {
    constructor(game){
        // Constructor for the flying enemy.
        super();
        this.game = game;
        this.width = 60;
        this.height = 44;
        this.x = this.game.width + Math.random() * this.game.width * 0.5;
        this.y = Math.random() * this.game.height * 0.5;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.maxFrame = 5;
        this.image = document.getElementById('fly');
        this.angle = 0;
        this.va = Math.random() * 0.1 + 0.1;
        this.hasCollided = false;
    }
    // Updates the flying enemy's position and animation.
    update(deltaTime){
        super.update(deltaTime);
        this.angle += this.va;
        this.y += Math.sin(this.angle);
    }
}

// Extends the Enemy class to create a ground enemy.
export class GroundEnemy extends Enemy {
    // Constructor for the ground enemy.
    constructor(game){
        super();
        this.game = game;
        this.width = 60;
        this.height = 87;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById('plant');
        this.speedX = 0;
        this.speedY = 0;
        this.maxFrame = 1;
    }
}

// Extends the Enemy class to create a climbing enemy.
export class ClimbingEnemy extends Enemy {
    // Constructor for the climbing enemy.
    constructor(game){
        super();
        this.game = game;
        this.width = 120;
        this.height = 144;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height * 0.5;
        this.image = document.getElementById('spider');
        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;
        this.maxFrame = 5;
    }
    // Updates the climbing enemy's position and animation.
    update(deltaTime){
        super.update(deltaTime);
        if (this.y > this.game.height - this.height - this.game.groundMargin) this.speedY *= -1;
        if (this.y < -this.height) this.markedFordeletion = true;
    }
    // Draws the climbing enemy on the canvas with a line.
    draw(context){
        super.draw(context);
        context.beginPath();
        context.moveTo(this.x + this.width/2, 0);
        context.lineTo(this.x + this.width/2, this.y + 50);
        context.stroke();
    }
}