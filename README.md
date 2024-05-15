# [KNIGHT'S RUN](https://patrickaod.github.io/KnightsRun)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/patrickaod/KnightsRun)](https://github.com/patrickaod/KnightsRun/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/patrickaod/KnightsRun)](https://github.com/patrickaod/KnightsRun/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/patrickaod/KnightsRun)](https://github.com/patrickaod/KnightsRun)

---
![amIResponsive screenshot](documentation/overview/amIResponsive.jpeg)

KNIGHT’S RUN,
a scenic interactive indie side-scroller that follows a player controlled character trying to escape the **Endless Night Wood**. The player will face multiple enemy types along their journey, until their time runs out. Utilising OOP to make player and enemy states easily maintainable across the multiple JS files. Key features include a parallax background, collision detection, and touch controls. Achieved with the Canvas and HTML DOM Api, and built with HTML5, CSS3, and vanilla JavaScript. I’m proud to deliver this more than 100 hour lexically scoped project. 


## UX

Making a game is one of the best ways to showcase a prowess in javascript. Due to time constraints I needed to make a game that wasn't too resource intensive, too complicated, or require too many dependencies. Ruling out 3D games, RPG's, and deck builders. Leaving me with a selection of 2D game ideas. I chose too make a side-scroller because it was simple, yet complicated enough for me to really showcase my skills. 

The game design was made around a suitable player character. Once a viable character was found I added details until I created the **Endless Night Wood**.

Using online tutorial made this process alot easier, and really enabled me to  give this game the polish it deserves. I'm very proud of this accomplishment. 

### Colour Scheme

As stated above, the game design was centered around a viable player character. The background asset that worked best was a [woodland parallax](). To give a greater depth to the pixelated parallax I added a beautiful woodland image.

![Woodland background for index.html](assets/img/background/night-woods.jpg)

Extracting the colour scheme though [coolor.co](https://coolors.co/image-picker) image picker. Produces this colour scheme: 

![Woodland background for index.html](documentation/colour/colour-palette.jpeg)

The produced colour scheme was very homogonous. I wanted to add more contrast to this palette. Unfortunately, due to pricing constrains only five colours can appear on one colour palette with coolor.co.
I removed the two colours of least importance #396C71, #091E28, and added the main contrasting colour of the background Icterine (#F6F451). I then began a search for another complementary contrasting colour, and ended up with this colour palette:

![Contrasting colour palette](documentation/colour/colour-palette-contrast.jpeg)

I then used Icterine (#F6F451) & Pumpkin (#FF7518) in a 180&deg; linear gradient for all the external game features like the title: 

![Title Gradient](documentation/colour/title-grad.jpeg)

and tutorial button, also adding a splash of white to help contrast:

![Information Gradient](documentation/colour/information-grad.jpeg)

For the internal game UI, I chose to stick with black adding just a white shadow. As it more closely matches the enemy assets, and there is the added benefit of highlighting the player assets in an overall drab world. 

![Game UI](documentation/colour/Game-UI-colour.jpeg)

### Typography

A knight in the woods reminds me of Robin Hood, and for that reason I chose typography to support that a more medieval idea. 

#### Font

A serif font is a great choice for the medieval aspect. More specifiaclly, a titling serif would add extra punch to the limited text a player would see. 

[Sedan SC](https://fonts.google.com/specimen/Sedan+SC?stroke=Serif) was the best choice, as the font offered the most emphasis out of the Google serif fonts.

Other quirkier font like [Jacquarda Bastarda 9 Charted](https://fonts.google.com/specimen/Jacquarda+Bastarda+9+Charted?stroke=Serif) were interesting choices, but weren't quite as well fitting.

Serif was chosen as a redundant font in case Google couldn't be reached. 

#### Icons 

To reduce the game UI from obsuring the background a helpful [information circle](https://fontawesome.com/v4/icon/info-circle) from Font Awesome was added to alert the user of the controls.

Finally, a [fallen Leaf](https://favicon.io/emoji-favicons/fallen-leaf/) flavicon was added to give the project a more charming effect but still tie into the old-time nature theme.

## User Stories

### New Site Users

- As a new site user, I would like to start playing immediately, so that I can enjoy myself.
- As a new site user, I would like to see my score, so that I can feel proud I scored high.
- As a new site user, I would like to I would like my progress to be saved, so that I can continue later.
- As a new site user, I would like to be able to play on both pc and laptop, so that I can take it anywhere.
- As a new site user, I would like the controls to be easy to understand and use, so that I can quickly start to play.

### Returning Site Users

- As a returning site user, I would like to see my score from last time, so that I can continue to try and beat it.
- As a returning site user, I would like the enemy types to change, so that the game can feel fresh.
- As a returning site user, I would like to just run though the game, so that I can try different strategies.

## Wireframes

To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Mobile Wireframes

<details>
<summary> Click here to see the Mobile Wireframes </summary>

Game Area with tutorial box 
  - ![Phone with bar](documentation/wireframe/phone-bar.png)

Game Area with tutorial icon
  - ![Phone with icon](documentation/wireframe/phone-icon.png)

</details>

### Tablet Wireframes

<details>
<summary> Click here to see the Tablet Wireframes </summary>

Game Area with tutorial box 
  - ![Tablet with bar](documentation/wireframe/ipad-bar.png)

Game Area with tutorial icon
  - ![Tablet with icon](documentation/wireframe/ipad-icon.png)


</details>

### Desktop Wireframes

<details>
<summary> Click here to see the Desktop Wireframes </summary>

Game Area with tutorial box 
  - ![Window with bar](documentation/wireframe/window-bar.png)

Game Area with tutorial icon
  - ![Window with icon](documentation/wireframe/window-icon.png)

</details>

## Features

### Existing Features

- **Highscore**

    - The highscore use the `localStorage()` window object to store and retrieve the player's greatest score. The feature is manipulated with the `getElementByID()` method. It give alot to the replayability of the site. 

![Title Banner](documentation/features/banner.png)

- **Tutorial Icon**

    - After the page is loaded, this button can be click an unlimited amount of times to show the player what to do. It used also manipulated with the `getElementByID()` and `addEventListener("click", function(){})` methods.

![Tutorial Icon](documentation/colour/information-grad.jpeg)

- **Player States**

    - The player states are managed by one file, which are called by other js files to be animated, checked, or effected. The file uses OOP structuring to make the mainability easier over time. Each player state is entered into an enum that can be selected dependent on the current state's input method. The lexically scoped approach makes adding new states easier, and removes the need for "spaghetti code".
    
![Idel State](documentation/features/idel-state.jpeg)![Crouch State](documentation/features/crouch-state.jpeg)![Running State](documentation/features/running-state.jpeg)

- **Enemies**

    - The game uses three different enemy assets to challenge the play and give score. To win this game the player must achieve a certain score in a given time. There is one constructor with the enemies general settings. Then there are subsequent class that use the `super()` method to inherit previous properties. The unique mob is passed to be `draw()` method to be selected and called to the main game canvas, dependent on a function in the main.js file called `addEnemy()`.

![Flying Enemies](assets/img/enemies/enemy_fly.png)
![Plant Enemies](assets/img/enemies/enemy_plant.png)
![Spider Enemies](assets/img/enemies/enemy_spider_big.png)

- **Parallax Background**

    - The background shifts at different speeds dependent on the game speed. Each layer is assigned a speed modifier. The one closer to the front have higher value. If the player stops moving so to does the background. Really adding a new dimension of detail to the game.

![Parallax Background](documentation/features/para-background.jpeg)

- **Key/Swipe Controls**

    - The key input wait for the `addEventListener()` to fire on 'keydown'. Using es6 notation the fat arrow points to an if statement of inputs ready to be placed in an array. These keys are then removed using `splice()` on the keyup. The same is true for the touch controls.

```
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
```
The touch controls fat arrow points to a javascript object called changedTouches where the x and y co-ordinates are stored. These are then used the same way to add (touchstart), change(touchmove), and remove (touchend).
```
 // On press down register touch X & Y
        window.addEventListener('touchstart', e => {
            this.touchX = e.changedTouches[0].pageX;
            this.touchY = e.changedTouches[0].pageY;  
        });
        // The difference to the inital position indicates the swipe
        window.addEventListener('touchmove', e => {
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
```
- **UI**

    - The UI provides the user with relavent information about their current game such score, time, and life. At the end of the game a win or lose message appears concluding the game. The messages are drawn between the `context.save()` & `context.restore()` methods. These methods keep any changes made to values within the file. The CANVAS API shadow variable is used here to add a white shadow, although this was handle differently in the flaotingmessages.js file. 

![Game UI](documentation/colour/Game-UI-colour.jpeg)

- **Floating Messages**

    - The floating numbers float towards a given x and y position at a given speed, in this case 3% game speed. The image is taken 0.1% speed. The floatingmessages.js file doesn't use the CANVAS API shadow variable as it is slightly more performant to just double the text with a slight offset. 

![Floating Numbers](documentation/features/floatingnumbers.jpeg)

- **Attack Radius**

    - The attack radius of the character will be very important to the player, so it's set to the maximum point of the animation. As seen below. If the player were to attack the enemy plant would be marked for deletion and then removed using the array `filter()` method from the main game file with another animation from the collisionAnimation.js file. The reason `filter()` is used instead of splice is so the enemy can be removed in the same loop as the animation is running, otherwise it leads to stuttering. 

![Tutorial Icon](documentation/features/collision.jpeg)

- **Collision**

    - The character hitbox has strunken to width of the player, but it is not yet dynamic. The code below show shows how this was achieved. The .hasCollided() function prevent multiple hits from the same enemy, avoiding insta-death, and how -1 floatingmessages are fired. The new object is routed through the main game file because the class is exported and imported by the main.js file. Centralising all the code for easy maintainability. 

```
    checkCollision() {
        this.game.enemies.forEach(enemy => {
            // Hitbox Collision
            else if (
                enemy.x < (this.x + 40) + (this.width * 0.22) &&
                enemy.x + enemy.width > (this.x + 40) &&
                enemy.y < (this.y + 5) + (this.height - 5) &&
                enemy.y + enemy.height > (this.y + 5) && 
                !enemy.hasCollided
            ) {
                enemy.hasCollided = true;
                this.setState(6, 0);
                this.game.score -= 1;
                this.game.floatingMessages.push(new FloatingMessages('-1', enemy.x, enemy.y, 180, 50));
                this.game.hearts--;
                if (this.game.hearts <= 0) this.game.gameOver = true;
            }
        });
    }
```
