const states = {
    IDEL: 0,
    CROUCHING: 1,
    WALKING: 2,
    JUMPING: 3,
    FALLING: 4,
    ATTACK: 5,
    HURT: 6,
    DASHING: 7
}

class State{
    constructor(state, game){
        this.state = state;
        this.game = game;
    }
}

export class Idel extends State {
    constructor(game){
        super('IDEL', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 0;
    }
    handleInput(input){
        if (input.includes('ArrowLeft') || input.includes('ArrowRight') || input.includes('swipe right') || input.includes('swipe left')){
            this.game.player.setState(states.WALKING, 1);
        } else if (input.includes('ArrowDown') || input.includes('swipe down')){
            this.game.player.setState(states.CROUCHING, 0);
        } else if (input.includes('ArrowUp') || input.includes('swipe up')){
            this.game.player.setState(states.JUMPING, 1);
        } else if (input.includes(' ')) {
            this.game.player.setState(states.ATTACK, 1);
        } else if (input.includes('tap')){
       
        }
    }
}

export class Crouching extends State {
    constructor(game){
        super('CROUCHING', game)
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 2;
        this.game.player.frameY = 2;
    }
    handleInput(input){
        if (input.includes('ArrowLeft') || input.includes('ArrowRight') || input.includes('swipe right') || input.includes('swipe left')){
            this.game.player.setState(states.WALKING, 1);
        } else if (input.includes('ArrowUp') || input.includes('swipe up')){
            this.game.player.setState(states.JUMPING, 1);
        } else if (input.includes(' ')){
            this.game.player.setState(states.ATTACK, 1);
        } else if ((input.includes('#') || (input.includes('long swipe')))&& !this.game.cooldown){
            this.game.player.setState(states.DASHING, 3);
            this.game.cooldown = true;
        } else if (input.includes('tap')){
            this.game.player.setState(states.ATTACK, 1);
        }
    }
}

export class Walking extends State {
    constructor(game){
        super('WALKING', game)
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 7;
    }
    handleInput(input){
        if (input.includes('ArrowDown') || input.includes('swipe down')){
            this.game.player.setState(states.CROUCHING, 0);
        } else if (input.includes('ArrowUp') || input.includes('swipe up')){
            this.game.player.setState(states.JUMPING, 1);
        } else if (input.includes(' ')){
            this.game.player.setState(states.ATTACK, 1);
        }  else if ((input.includes('#') || (input.includes('long swipe')))&& !this.game.cooldown){
            this.game.player.setState(states.DASHING, 3);
            this.game.cooldown = true;
        } else if (input.includes('tap')){
            this.game.player.setState(states.ATTACK, 1);
        }
    }
}

export class Jumping extends State {
    constructor(game){
        super('JUMPING', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 5;
        if (this.game.player.onGround()) this .game.player.vy -= 25;
        this.game.player.frameY = 6;
    }
    handleInput(input){
        if (this.game.player.vy > this.game.player.weigth){
            this.game.player.setState(states.FALLING, 1);
        } else if (input.includes(' ')){
            this.game.player.setState(states.ATTACK, 1);
        }  else if ((input.includes('#') || (input.includes('long swipe')))&& !this.game.cooldown){
            this.game.player.setState(states.DASHING, 3);
            this.game.cooldown = true;
        } else if (input.includes('tap')){
            this.game.player.setState(states.ATTACK, 1);
        }
    }
}

export class Falling extends State {
    constructor(game){
        super('FALLING', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 2;
        this.game.player.frameY = 4;
    }
    handleInput(input){
        if (this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        }  else if ((input.includes('#') || (input.includes('long swipe')))&& !this.game.cooldown){
            this.game.player.setState(states.DASHING, 3);
            this.game.cooldown = true;
        }
    }
}

export class Attack extends State {
    constructor(game){
        super('ATTACK', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 5;
        this.game.player.frameY = 1;
    }
    handleInput(input){
        if (!input.includes(' ') && !input.includes('tap') && this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        } else if (((!input.includes(' ')) && (!input.includes('tap'))) && !this.game.player.onGround()){
            this.game.player.setState(states.FALLING, 1);
        }
    }
}

export class Hurt extends State {
    constructor(game){
        super('HURT', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 5;
    }
    handleInput(){
        if (this.game.player.frameX >= 3 && this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        } else if (this.game.player.frameX >= 3 && !this.game.player.onGround()){
            this.game.player.setState(states.FALLING, 1);
        }
    }
}

export class Dashing extends State {
    constructor(game){
        super('DASHING', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 4;
    }
    handleInput(){
        if (this.game.player.frameX >= 3 && this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        } else if (this.game.player.frameX >= 3 && !this.game.player.onGround()){
            this.game.player.setState(states.FALLING, 1);
        }

    }
}