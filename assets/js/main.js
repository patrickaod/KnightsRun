import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { FlyingEnemy, ClimbingEnemy, GroundEnemy } from './enemies.js';
import { UI } from './ui.js';
// Runs when page is completed loading assets
window.addEventListener('load', function () {
    // Call highScore update function
    highScore();
    // Initial Canvas Settings for CANVAS API
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    //Game Class
    class Game {
        //Game Constructor
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
            this.time = 0;
            this.maxTime = 60000;
            this.gameOver = false;
            this.hearts = 10; 
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();
        }
        /* restartGame()
           Resets all variables back to original states
           Updates game highscore
           then calls the animate function
        */
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
            document.getElementById("highScore").innerHTML = "High Score: " + localStorage.getItem("score");
            animate(0);
        }
        /* update()
           updates the main game file with addition javascript files
           in relation to deltaTime
        */
        update(deltaTime) {
            // The change in time add to the overall time
            this.time += deltaTime;
            // Adds a maximum time allowance to the game 
            if (this.time > this.maxTime) this.gameOver = true;
            // Update Game features 
            this.backgroundLayers.update();
            this.player.update(this.input.keys, deltaTime);
            //handleEnemies
            if (this.enemyTimer > this.enemyInterval) {
                this.addEnemy();
                this.enemyTimer = 0;
            } else {
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
            });
            //collision spirte
            this.collisions.forEach((collision) => {
                collision.update(deltaTime);
            });
            //handle floating messages
            this.floatingMessages.forEach(message => {
                message.update();
            });
            //cooldowntimer
            if (this.cooldown){
                if (this.cooldownTimer > this.cooldownInterval) {
                    this.cooldown = false;
                    this.cooldownTimer = 0;
                } else {
                    this.cooldownTimer += deltaTime;
                }
            }
            // update local score every frame
            if (this.score > localStorage.score) localStorage.setItem("score", this.score);
            /* 
               Array Filters
               Instead of splice, array filters are used to remove marked elements
               because the deletion can happen in the same loop as the animation. 
            */
            this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
            this.collisions = this.collisions.filter(collision => !collision.markedForDeletion);
            this.floatingMessages = this.floatingMessages.filter(message => !message.markedForDeletion);
        }
        /* Draw Method 
           Draws the player, background, enemies, collisions, floating messages, 
           and the UI on the canvas background.
        */
        draw(context) {
            this.backgroundLayers.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
            this.collisions.forEach(collision => {
                collision.draw(context);
            });
            this.floatingMessages.forEach(message => {
                message.draw(context);
            });
            this.UI.draw(context);
        }
        /* addEnemy() 
           Enemy selection in terms of player speed every time this method is called
        */
        addEnemy() {
            if (this.speed > 0 && Math.random() < 0.5) this.enemies.push(new GroundEnemy(this));
            else if (this.speed > 0) this.enemies.push(new ClimbingEnemy(this));
            this.enemies.push(new FlyingEnemy(this));
        }
    }
    
    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    /* Animate()
       In respect to delta time each frame is rendered on the canvas.
       While gameOver is false.
    */
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) requestAnimationFrame(animate);
    }

    // First Animate Call 
    animate(0);
});

// Tutorial Button: Tutorial by Web Dev Simplified @ https://www.youtube.com/watch?v=ywtkJkxJsdg&ab_channel=WebDevSimplified
const openButton = document.getElementById("btn");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

/*
 * Event listener for the open button of the modal.
 * Opens the modal when the information button is clicked.
 */
openButton.addEventListener("click", () => {
    modal.showModal();
});

/*
 * Event listener for the close button of the modal.
 * Closes the modal when the close button is clicked.
 */
closeButton.addEventListener("click", () => {
    modal.close();
});

/*
 * Event listener for the close cosition of the modal.
 * Closes the modal when the user clicks off the area.
 */
modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect();
    if ( 
        e.clientX < dialogDimensions.left ||
        e.clientX < dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY < dialogDimensions.bottom
    ) {
        modal.close();
    }
});

// Initialisation or update of Highscore value
function highScore() {
    if (localStorage.score) {
      localStorage.score = localStorage.score;
      document.getElementById("highScore").innerHTML = "High Score: " + localStorage.getItem("score");
    } else {
      localStorage.score = 0;
    }
}