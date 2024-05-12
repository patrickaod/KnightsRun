
// Runs when page is completed loading assets
window.addEventListener('load', function () {
    // Canvas Settings
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    //Updates Score from Local Storage
    document.getElementById("highScore").innerHTML = "HighScore: " + localStorage.getItem("score");

    //Game Constructor
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 40;
            this.speed = 0;
            this.maxSpeed = 6;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.backgroundLayers = new Background(this);
            this.UI = new UI(this);
            this.enemies = [];
            this.collisions = [];
            this.floatingMessages = [];
            this.stoppage = 0;
            this.enemyTimer = 0;
            this.enemyInterval = 1000;
            this.cooldown = false;
            this.cooldownTimer = 0;
            this.cooldownInterval = 700;
            this.timeOut = 0;
            this.debug = false;
            this.score = 0;
            this.winningScore = 10;
            this.fontColor = 'black';
            this.time = 0;
            this.maxTime = 500000;
            this.gameOver = false;
            this.hearts = 10; 
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();
        }
        restartGame(){
            this.player.x = 100;
            this.player.y = this.height - this.player.height - this.groundMargin;
            this.player.frameY = 0;
            this.player.maxFrame = 3;
            this.player.currentState = this.player.states[0]; 
            this.backgroundLayers = new Background(this);
            this.enemies = [];
            this.collisions = [];
            this.floatingMessages = [];
            this.speed = 0;
            this.score = 0;
            this.time = 0;
            this.hearts = 10;
            this.player.vy = 0;
            this.debug = false;
            this.cooldown = false;
            this.gameOver = false;
            document.getElementById("highScore").innerHTML = "HighScore: " + localStorage.getItem("score");
            animate(0);
        }
    }
})
