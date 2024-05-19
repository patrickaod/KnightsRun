/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const { highScore, Game } = require("./main.test.js");
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("assets/js/main.js", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Test that the game correctly updates and handles local high score.
describe(`Game High Score Test`, () => {
    let game;
    let ctx;
    let canvas;
    let localStorageMock;

    beforeEach(() => {
        canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 500;
        ctx = canvas.getContext("2d");
        localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn()
        };
        Object.defineProperty(window, "localStorage", {
            value: localStorageMock
        });
        window.localStorage = localStorageMock;
        
        console.log('Before creating game instance');
        try {
            game = new Game(canvas.width, canvas.height);
            console.log('After creating game instance', game);
        } catch (error) {
            console.error('Error creating game instance:', error);
        }
    });

    test('Updates highScore element with correct format', () => {
        // Set initial score in localStorage
        localStorage.setItem('score', '100');
    
        // Call highScore function
        highScore();
    
        // Check if highScore element's innerHTML is updated correctly
        const highScoreElement = document.getElementById('highScore');
        expect(highScoreElement.innerHTML).toBe('HighScore: 100');
    });
});

if (typeof module !== "undefined") module.exports = {
    highScore, Game
};