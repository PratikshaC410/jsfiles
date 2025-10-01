// Guess the Number Game
 const prompt = require("prompt-sync")();
// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = 0;
let userGuess;

do {
  // Take user input
  userGuess = parseInt(prompt("Guess a number between 1 and 100: "), 10);
  guesses++;

  if (userGuess > randomNumber) {
    console.log("Too high! Try again.");
  } else if (userGuess < randomNumber) {
    console.log("Too low! Try again.");
  } else {
    let score = 100 - (guesses - 1);
    console.log(`🎉 Correct! The number was ${randomNumber}.
You took ${guesses} guesses.
Your score is ${score}.`);
  }
} while (userGuess !== randomNumber);
