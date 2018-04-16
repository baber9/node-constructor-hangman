// CONSTRUCTOR - Letter
function Letter (str) {
    
    // hold letter of Letter obj
    this.str = str;  

    // stores T/F (if letter guessed)
    this.ltrGuessed = false;
    
    // METHOD called for each letter object to return new string with blanks or letters (if this.ltrGuessed is true)
    this.returnChar = function () {
        if (this.ltrGuessed === true) {
            return this.str + " ";
        } else if (this.str === " ") {
            return " ";
        } else {
            return "_ ";
        }
    }
    // METHOD checks the letter.str property and compares it to the user's guess
    this.checkGuess = function (guessChar) {

        if (this.str.toUpperCase() === guessChar.toUpperCase()) {
            this.ltrGuessed = true;
            return true;
        } else {
            return false;
        }
    }
}



module.exports = Letter;

// TESTING
// var newLetter = new Letter('a');
// console.log(`Letter Str: ${newLetter.str}`);
// newLetter.checkGuess('a');
// console.log(`Letter Guessed?: ${newLetter.ltrGuessed}`);
// var newLetter = new Letter('c');
// newLetter.checkGuess('a');
// console.log(`Letter Guessed?: ${newLetter.ltrGuessed}`);




