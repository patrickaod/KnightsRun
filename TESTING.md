# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
|  | index.html | ![W3C HTML Validator](documentation/validator/w3c-html-validator.jpeg) | All successful|

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets | style.css | ![CSS Jigsaw Validator Warnings](documentation/validator/w3c-jigsaw-validator.org.jpeg) | All successful. There were 26 warnings. Only two referred to the codebase. The other 24 referred to Font Awesome. The background clip was necessary for the text effect, but I was able to remove the vendor extention warning.|
| assets | style.css | ![CSS Jigsaw Validator Warnings](documentation/validator/w3c-jigsaw-validator2.jpeg) | All successful, with one less warning.|

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets | background.js | ![background.js validaiton](documentation/jshint/bg-jshint.jpeg) | All successful |
| assets | collisionAnimation.js | ![collisionAnimation.js validaiton](documentation/jshint/colAni-jshint.jpeg) | All successful |
| assets | enemies.js | ![enemies.js validaiton](documentation/jshint/enemies-jshint.jpeg) | All successful |
| assets | floatingMessages.js | ![floatingMessages.js validaiton](documentation/jshint/floatM-jshint.jpeg) | All successful |
| assets | input.js | ![input.js validaiton](documentation/jshint/input-jshint.jpeg) | All successful |
| assets | main.js | ![main.js validaiton](documentation/jshint/main-jshint.jpeg) | All successful |
| assets | player.js | ![player.js validaiton](documentation/jshint/player-jshint.jpeg) | All successful |
| assets | playerStates.js | ![playerStates.js validaiton](documentation/jshint/pStates-jshint.jpeg) | All successful |
| assets | ui.js | ![ui.js validaiton](documentation/jshint/ui-jshint.jpeg) | All successful |

## Browser Compatibility

Testing a live or deployed site on multiple browsers helps ensure all deployed features function for the end user experience.   

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Index | Notes |
| --- | --- | --- |
| Chrome | ![Chrome Browser](documentation/browser-compt/chrome-browser.png) | |
| Firefox | ![Firefox Browser](documentation/browser-compt/firefox-browser.png) | |
| Edge | ![Edge Browser](documentation/browser-compt/edge-browser.png) | |

## Responsiveness

Testing a live or deployed site on multiple devices helps ensure consistent and high-quality user experiences.

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Index | Notes |
| --- | --- | --- |
| Mobile (DevTools) | ![Mobile](documentation/responsiveness/mobile.png) | |
| Tablet (DevTools) | ![Tablet](documentation/responsiveness/tablet.png) | |
| Desktop (DevTools) | ![Desktop](documentation/responsiveness/laptop.png) | |
| XL Monitor (DevTools) | ![XL Monitor](documentation/responsiveness/xl-laptop.png) | |
| 4K Monitor (DevTools) | ![4K Monitor](documentation/responsiveness/4k.png) | |
| Google Pixel 7 (DevTools) | ![Google Pixel 7](documentation/responsiveness/pixel7.png) | |
| iPhone 14 Max (DevTools) | ![iPhone 14](documentation/responsiveness/iphone14max.png) | |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Index | ![screenshot](documentation/lighthouse/lighthouse-mobile.jpeg) | ![screenshot](documentation/lighthouse/lighthouse-desk.jpeg) | The mobile version was slighlty slower. As expected it had a harder time loading assets. |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| - As a new site user, I would like to see my score, so that I can feel proud I scored high. | ![Game UI](documentation/colour/Game-UI-colour.jpeg) |
|- As a new site user, I would like to I would like my progress to be saved, so that I can continue later.| ![banner high score](documentation/features/banner.png) |
|- As a new site user, I would like the controls to be easy to understand and use, so that I can quickly start to play.| ![tutorial button](documentation/colour/information-grad.jpeg) |
|- As a returning site user, I would like to just run though the game, so that I can try different strategies. | ![Running State](documentation/features/running-state.jpeg) |

## Automated Testing

I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

### JavaScript (Jest Testing)

I have used the [Jest](https://jestjs.io) JavaScript testing framework to test the application functionality.

In order to work with Jest, I first had to initialize NPM.

- `npm init`
- Hit `enter` for all options, except for **test command:**, just type `jest`.

Add Jest to a list called **Dev Dependencies** in a dev environment:

- `npm install --save-dev jest`

**IMPORTANT**: Initial configurations

When creating test files, the name of the file needs to be `file-name.test.js` in order for Jest to properly work.

Without the following, Jest won't properly run the tests:

- `npm install -D jest-environment-jsdom`

Due to a change in Jest's default configuration, you'll need to add the following code to the top of the `.test.js` file:

```js
/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const { function1, function2, function3, etc. } = require("./script-name");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
```

Remember to adjust the `fs.readFileSync()` to the specific file you'd like you test.
The example above is testing the `index.html` file.

Finally, at the bottom of the script file where your primary scripts are written, include the following at the bottom of the file.
Make sure to include the name of all of your functions that are being tested in the `.test.js` file.

```js
if (typeof module !== "undefined") module.exports = {
    function1, function2, function3, etc.
};
```

Now that these steps have been undertaken, further tests can be written, and be expected to fail initially.
Write JS code that can get the tests to pass as part of the Red-Green refactor process.

Once ready, to run the tests, use this command:

- `npm test`

**NOTE**: To obtain a coverage report, use the following command:

- `npm test --coverage`

## Bugs

> [!NOTE]
>  There are no remaining bugs that I am aware of.

