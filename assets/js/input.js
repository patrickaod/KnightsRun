// Sets the player's state.
export class InputHandler {
    // InputHandler Constructor
    constructor(game) {
        this.game = game;
        this.keys = [];
        this.touchY = '';
        this.touchX = '';
        this.touchTreshold = 30;
        this.dashTreshold = 100;
        this.atkTreshold = 0;
        this.holdTimer = 2000;

        // On key down add to this.keys array.
        window.addEventListener('keydown', this.onKeyDown.bind(this));

        // On key up remove to this.keys array.
        window.addEventListener('keyup', this.onKeyUp.bind(this));

        // On press down register touch X & Y.
        window.addEventListener('touchstart', this.onTouchStart.bind(this));

        // The difference to the initial position indicates the swipe.
        window.addEventListener('touchmove', this.onTouchMove.bind(this));

        // On end remove touch event from this.keys.
        window.addEventListener('touchend', this.onTouchEnd.bind(this));
    }
    // Add key down events to this.keys array.  
    onKeyDown(e) {
        if ((e.key === 'ArrowDown' ||
            e.key === 'ArrowUp' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === ' ' ||
            (e.key === '#' && !this.game.cooldown)) &&
            this.keys.indexOf(e.key) === -1) {
            this.keys.push(e.key);
        } else if (e.key === 'd') {
            this.game.debug = !this.game.debug;
        } else if (e.key === 'r' && this.game.gameOver) {
            this.game.restartGame();
        }
    }
    //Remove key up events from this.keys array.
    onKeyUp(e) {
        if (e.key === 'ArrowDown' ||
            e.key === 'ArrowUp' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === ' ' ||
            e.key === '#') {
            this.keys.splice(this.keys.indexOf(e.key), 1);
        }
    }
    //Register touch X & Y when pressed down.
        onTouchStart(e) {
            this.touchX = e.changedTouches[0].pageX;
            this.touchY = e.changedTouches[0].pageY;
        }
    //The difference to the initial position indicates the swipe.
        onTouchMove(e) {
            const swipeDistance = e.changedTouches[0].pageY - this.touchY;
            if (swipeDistance < -this.touchTreshold && this.keys.indexOf('swipe up') === -1) {
                this.keys.push('swipe up');
            } else if (swipeDistance > this.touchTreshold && this.keys.indexOf('swipe down') === -1) {
                this.keys.push('swipe down');
                if (this.game.gameOver) {
                    this.game.restartGame();
                }
            }

        const swipeDistanceX = e.changedTouches[0].pageX - this.touchX;
        if (swipeDistanceX > this.touchTreshold && this.keys.indexOf('swipe right') === -1) {
            this.keys.push('swipe right');
        } else if (swipeDistanceX < -this.touchTreshold && this.keys.indexOf('swipe left') === -1) {
            this.keys.push('swipe left');
        } else if (swipeDistanceX > this.dashTreshold && this.keys.indexOf('long swipe') === -1) {
            this.keys.push('long swipe');
        } else if (swipeDistanceX < -this.dashTreshold && this.keys.indexOf('long swipe') === -1) {
            this.keys.push('long swipe');
        }

        // Attack
        if ((swipeDistanceX < -this.atkTreshold || swipeDistanceX > this.atkTreshold) && this.keys.indexOf('tap') === -1) {
            this.keys.push('tap');
        } else if ((swipeDistanceX < -this.atkTreshold || swipeDistanceX > this.atkTreshold) && this.keys.indexOf('tap') === -1) {
            this.keys.push('tap');
        } else {
            this.keys.splice(this.keys.indexOf('tap'), 1);
        }
    }
    //Remove touch event from this.keys array when end.
        onTouchEnd(e) {
            this.keys.splice(this.keys.indexOf('tap'), 1);
            this.keys.splice(this.keys.indexOf('swipe up'), 1);
            this.keys.splice(this.keys.indexOf('swipe down'), 1);
            this.keys.splice(this.keys.indexOf('swipe right'), 1);
            this.keys.splice(this.keys.indexOf('swipe left'), 1);
            this.keys.splice(this.keys.indexOf('long swipe'), 1);
        }
    }