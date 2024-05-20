// Player state enum
const states = {
    IDEL: 0,
    CROUCHING: 1,
    WALKING: 2,
    JUMPING: 3,
    FALLING: 4,
    ATTACK: 5,
    HURT: 6,
    DASHING: 7
};

// A base class for player states.
class State{
    constructor(state, game){
        // The state that this State instance represents.
        this.state = state;
       // The game object that the player belongs to.
        this.game = game;
    }
}

// The Idel class represents the idle state of the player.
export class Idel extends State {
    // Initializes the Idel state with the specified game object.
    constructor(game){
        super('IDEL', game);
    }
    // Sets the initial state of the player when entering the idle state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 0;
    }
    // Handles input events while the player is in the idle state.
    handleInput(input){
        if (input.includes('ArrowLeft') || input.includes('ArrowRight') || input.includes('swipe right') || input.includes('swipe left')){
            this.game.player.setState(states.WALKING, 1);
        } else if (input.includes('ArrowDown') || input.includes('swipe down')){
            this.game.player.setState(states.CROUCHING, 0);
        } else if (input.includes('ArrowUp') || input.includes('swipe up')){
            this.game.player.setState(states.JUMPING, 1);
        } else if (input.includes(' ')) {
            this.game.player.setState(states.ATTACK, 1);
        }
    }
}

// The Crouching class represents the crouching state of the player.
export class Crouching extends State {
    constructor(game){
        super('CROUCHING', game);
    }

    // Sets the initial state of the player when entering the crouching state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 2;
        this.game.player.frameY = 2;
    }
    // Handles input events while the player is in the crouching state.
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

// The Walking class represents the walking state of the player.
export class Walking extends State {
    constructor(game){
        super('WALKING', game);
    }
    // Sets the initial state of the player when entering the walking state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 7;
    }
    // Handles input events while the player is in the walking state.
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

// The Jumping class represents the jumping state of the player.
export class Jumping extends State {
    constructor(game){
        super('JUMPING', game);
    }
    // Sets the initial state of the player when entering the jumping state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 5;
        if (this.game.player.onGround()) this .game.player.vy -= 25;
        this.game.player.frameY = 6;
    }
    // Handles input events while the player is in the jumping state.
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

// The Falling class represents the falling state of the player.
export class Falling extends State {
    constructor(game){
        super('FALLING', game);
    }
    // Sets the initial state of the player when entering the falling state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 2;
        this.game.player.frameY = 4;
    }
    // Handles input events while the player is in the falling state.
    handleInput(input){
        if (this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        }  else if ((input.includes('#') || (input.includes('long swipe')))&& !this.game.cooldown){
            this.game.player.setState(states.DASHING, 3);
            this.game.cooldown = true;
        }
    }
}

// The Attacking class represents the attacking state of the player.
export class Attack extends State {
    constructor(game){
        super('ATTACK', game);
    }
    // Sets the initial state of the player when entering the attacking state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 5;
        this.game.player.frameY = 1;
    }
    // Handles input events while the player is in the attacking state.
    handleInput(input){
        if (!input.includes(' ') && !input.includes('tap') && this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        } else if (((!input.includes(' ')) && (!input.includes('tap'))) && !this.game.player.onGround()){
            this.game.player.setState(states.FALLING, 1);
        }
    }
}

// The Hurt class represents the hurt state of the player.
export class Hurt extends State {
    constructor(game){
        super('HURT', game);
    }
    // Sets the initial state of the player when entering the hurt state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 5;
    }
    // Handles input events while the player is in the hurt state.
    handleInput(){
        if (this.game.player.frameX >= 3 && this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        } else if (this.game.player.frameX >= 3 && !this.game.player.onGround()){
            this.game.player.setState(states.FALLING, 1);
        }
    }
}

// The Dashing class represents the dashing state of the player.
export class Dashing extends State {
    constructor(game){
        super('DASHING', game);
    }
    // Sets the initial state of the player when entering the dashing state.
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 3;
        this.game.player.frameY = 4;
    }
    // Handles input events while the player is in the dashing state.
    handleInput(){
        if (this.game.player.frameX >= 3 && this.game.player.onGround()){
            this.game.player.setState(states.WALKING, 1);
        } else if (this.game.player.frameX >= 3 && !this.game.player.onGround()){
            this.game.player.setState(states.FALLING, 1);
        }

    }
}