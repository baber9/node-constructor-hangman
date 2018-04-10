// CONSTRUCTOR - Letter
function Letter (str, ltrGuessed) {
    this.str = str,
    this.ltrGuessed = ltrGuessed;
    this.returnChar = function () {
        // returns letter (if guessed) or underscore
    }
    this.checkGuess = function (guessChar) {
        // takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    }
}


module.exports = Letter;