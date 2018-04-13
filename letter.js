// CONSTRUCTOR - Letter
function Letter (str) {
    this.str = str;  // this is the letter only
    this.ltrGuessed = false;
    this.returnChar = function () {
        // returns letter (if guessed) or underscore
        if (this.ltrGuessed === true) {
            return this.str + " ";
        } else {
            return "__ ";
        }
    }
    this.checkGuess = function (guessChar) {
        // takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        if (this.str === guessChar) {
            this.ltrGuessed = true;
        }
        return this.returnChar();
        console.log(returnString);
    }
}



module.exports = Letter;

// TESTING
// var newLetter = new Letter('a');
// console.log(`Letter Str: ${newLetter.str}`);
// newLetter.checkGuess('a');
// console.log(`Letter Guessed?: ${newLetter.ltrGuessed}`);



