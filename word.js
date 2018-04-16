var Letter = require("./letter.js");
var newLetter = '';

function Word (word) {
    // Array of new Letter objects representing the answer
    this.letterArr = [];

    // Populate letterArr - array of letter objects
    for (i = 0; i < word.length; i++) {
        newLetter = new Letter(word[i]);
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
        console.log(returnString);

        // check for blanks (if not, user has won)
        if (returnString.indexOf('_') === -1) {
            console.log("winner");
        }
    }

    //METHOD to call Letter.checkGuess
    this.guessLetter = function (guessChar) {
        var ltrGuessed = false;
        
        for (i = 0; i < this.letterArr.length; i++) {
            // call checkGuess for each letter
            this.letterArr[i].checkGuess(guessChar);

            // if any letters are correct during loop, set ltrGuessed to true
            ltrGuessed = this.letterArr[i].checkGuess(guessChar);

            // FIGURE THIS OUT.  MAYBE TAKE OUT OF THIS FOR LOOP AND SOMEHOW CHECK IF GUESS CHAR HAS BEEN GUESSED (ltr.Guessed).
        }
        // return true/false
        // console.log(ltrGuessed);
        return ltrGuessed;
    }
}

module.exports = Word;

// TESTING
// var newWord = new Word("Dallas Cowboys");

// newWord.guessLetter('d');
// newWord.wordToString();
// newWord.guessLetter('a');
// newWord.wordToString();
// newWord.guessLetter('w');
// newWord.wordToString();
// newWord.guessLetter('l');
// newWord.wordToString();
// newWord.guessLetter('s');
// newWord.wordToString();
// newWord.guessLetter('c');
// newWord.wordToString();
// newWord.guessLetter('o');
// newWord.wordToString();

// newWord.guessLetter('b');
// newWord.wordToString();
// newWord.guessLetter('a');
// newWord.wordToString();
// newWord.guessLetter('y');
// newWord.wordToString();

