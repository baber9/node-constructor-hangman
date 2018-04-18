// Letter Module
var Letter = require("./letter.js");

// CONSTRUCTOR to create new word instance
function Word (word) {
    
    // Array of new Letter objects representing the answer
    this.letterArr = [];

    // Populate letterArr - array of letter objects
    for (i = 0; i < word.length; i++) {
        var newLetter = new Letter(word[i]);
        this.letterArr.push(newLetter);
    }

    // METHOD calls Letter.returnChar and builds a string for output after each letter guess from the user
    this.wordToString = function () {
        
        // initialize return string
        var returnString = '';

        // build return string
        for (i = 0; i < this.letterArr.length; i++) {
            returnString += this.letterArr[i].returnChar();
        }
        // add new line for spacing
        returnString += '\n';
        // show the current puzzle
        console.log(returnString);

        // check for blanks (if not, user has won)
        if (returnString.indexOf('_') === -1) {
            console.log("\x1b[35m%s\x1b[0m","WINNER!!!\n");
            return true;
        }
        return false;
    }

    //METHOD to call Letter.checkGuess
    this.guessLetter = function (guessChar) {

        // initialize ltrGuessed bool as false
        var ltrGuessed = false;
        
        // call checkGuess for each letter and compare to the guess
        for (i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].checkGuess(guessChar);
        }
        
        // return true if current guessChar is equal to any letterArr.str
        for (i = 0; i < this.letterArr.length; i++) {
            if (guessChar.toUpperCase() === this.letterArr[i].str.toUpperCase()) {
                return this.letterArr[i].ltrGuessed;
            }
        }
    }
}

// Word obj export
module.exports = Word;

