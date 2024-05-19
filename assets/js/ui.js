// UI class for rendering game elements.
export class UI {
    // UI Constructor
    constructor(game) {
        this.game = game;
        this.fontSize = 40;
        this.fontFamily = 'Sedan SC';
        this.heartImage = document.getElementById('heart');
    }

   // Draws the game elements on the canvas.
    draw(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;

        // Draw score
        context.fillText('Score: ' + this.game.score, 20, 50);

        // Draw timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);

        // Draw hearts
        for(let i = 0; i < this.game.hearts; i++) {
            context.drawImage(this.heartImage, 25 * i + 12, 85, 40, 40);
        }

        // Draw game over message
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if (this.game.score > this.game.winningScore) {
                context.fillText('Yay !!', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('You Win!!!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText('Dang !!', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('You Lose !!!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
        }

        context.restore();
    }
}