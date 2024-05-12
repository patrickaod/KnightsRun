export class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = [];
        this.touchY = '';
        this.touchX = '';
        this.touchTreshold = 30;
        this.dashTreshold = 100;
        this.atkTreshold = 0;
        this.holdTimer = 2000;
        window.addEventListener('keydown', e => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === ' ' || 
                (e.key === '#'  && !this.game.cooldown)
            ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            } else if (e.key === 'd') this.game.debug = !this.game.debug;
            else if (e.key === 'r' && this.game.gameOver) game.restartGame();
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === ' ' ||
                e.key === '#') 
            {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            } 
        });
    }
}