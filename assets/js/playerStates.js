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