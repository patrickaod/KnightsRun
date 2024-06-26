// Sets the player's state.
export class FloatingMessages {
    // floatingMessages Constructor
    constructor(value, x, y, targetX, targetY){
        this.value = value;
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.markForDeletion = false;
        this.timer = 0;
    }
    // Updates the position of the message towards its target coordinates.
    update(){
        this.x += (this.targetX - this.x) * 0.03;
        this.y += (this.targetY - this.y) * 0.03;
        this.timer++;
        if (this.timer > 100) this.markForDeletion = true;
    }
    // Draws the message on the canvas.
    draw(context){
        context.font = '25px Sedan SC';
        context.fillStyle = 'black';
        context.fillText(this.value, this.x, this.y);
        context.fillStyle = '#FF8C42';
        context.fillText(this.value, this.x - 2, this.y - 2);
    }
}