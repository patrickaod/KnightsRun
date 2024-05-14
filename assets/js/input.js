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
        // On key down add to this.keys array
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
        // On key up remove to this.keys array
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
        // On press down register touch X & Y
        window.addEventListener('touchstart', e => {
            console.log(e);
            this.touchX = e.changedTouches[0].pageX;
            this.touchY = e.changedTouches[0].pageY;  
        });
        // The difference to the inital position indicates the swipe
        window.addEventListener('touchmove', e => {
            console.log(e);
            // Jump
            const swipeDistance = e.changedTouches[0].pageY - this.touchY;
            if( swipeDistance < -this.touchTreshold && this.keys.indexOf('swipe up') === -1){
                this.keys.push('swipe up');}
                // Reset
            else if(swipeDistance > this.touchTreshold && this.keys.indexOf('swipe down') === -1){
                this.keys.push('swipe down');   
                if (this.game.gameOver) {this.game.restartGame()};
            }
            //Running
            const swipeDistanceX = e.changedTouches[0].pageX - this.touchX;
            if( swipeDistanceX > this.touchTreshold && this.keys.indexOf('swipe right') === -1)
                {this.keys.push('swipe right');}
            else if (swipeDistanceX < -this.touchTreshold && this.keys.indexOf('swipe left') === -1)
                {this.keys.push('swipe left');}
            else if( swipeDistanceX > this.dashTreshold && this.keys.indexOf('long swipe') === -1)
                {this.keys.push('long swipe');}
            else if( swipeDistanceX < -this.dashTreshold && this.keys.indexOf('long swipe') === -1)
                {this.keys.push('long swipe');}
            //Attack
               if ((swipeDistanceX < -this.atkTreshold || swipeDistanceX >this.atkTreshold) && this.keys.indexOf('tap') === -1){
                  this.keys.push('tap')
              } else if ((swipeDistance < -this.atkTreshold || swipeDistance > this.atkTreshold) && this.keys.indexOf('tap') === -1 ){
                  this.keys.push('tap');
             }  else {
                 this.keys.splice(this.keys.indexOf('tap'), 1)
             }
            console.log(this.keys);
        });
        // On end remove touch event from this.keys
        window.addEventListener('touchend', e => {
            this.keys.splice(this.keys.indexOf('tap'), 1)
            this.keys.splice(this.keys.indexOf('swipe up'), 1)
            this.keys.splice(this.keys.indexOf('swipe down'), 1)
            this.keys.splice(this.keys.indexOf('swipe right'), 1)
            this.keys.splice(this.keys.indexOf('swipe left'), 1)
            this.keys.splice(this.keys.indexOf('long swipe'), 1)
        });

    }
    
}