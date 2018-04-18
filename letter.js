// CONSTRUCTOR to create new letter instances of answer
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
        } 
        
        // returns t/f
        return this.ltrGuessed;
    }
}


// Letter obj export
module.exports = Letter;





