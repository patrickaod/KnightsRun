export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 64;
        this.x = 100;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.vy = 0;
        this.weigth = 1;
        this.image = document.getElementsByTagName("img");
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 3;
        this.fps = 10;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.states = [new Idel(this.game), new Crouching(this.game), new Walking(this.game),
        new Jumping(this.game), new Falling(this.game), new Attack(this.game),
        new Hurt(this.game), new Dashing(this.game)];
        this.currentState = null;
    }
    update(input, deltaTime) {
        this.checkCollision();
        this.currentState.handleInput(input);
        // horizontal movement 
        this.x += this.speed;
        if ((input.includes('ArrowRight') || input.includes('swipe right')) && this.currentState !== this.states[6]) this.speed = this.maxSpeed;
        else if ((input.includes('ArrowLeft')|| input.includes('swipe left')) && this.currentState !== this.states[6]) this.speed = -this.maxSpeed;
        else this.speed = 0;
        //boundary 
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        //vertical movement 
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weigth;
        else this.vy = 0;
        //vertical boundaries
        if (this.y > this.game.height - this.height - this.game.groundMargin)
            this.y = this.game.height - this.height - this.game.groundMargin;
        // sprite animation
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }
    draw(context) {
        if (this.game.debug) context.strokeRect(this.x + 40, this.y + 5, this.width / 4.5, this.height - 5);
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image[this.frameY], this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}