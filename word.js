var Letter = require("./letter.js");

function Word (word) {
    this.letterArr = [];
    this.wordToString = function () {
        // This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    }
    this.guessLetter = function (guessChar) {
        // takes a character as an argument and calls the guess function on each letter object
        Letter.guessChar(guessChar);
    }
}

