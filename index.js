// Word module
var Word = require("./word.js");

// Inquire nmp package
var inquirer = require("inquirer");

var answerBank = ["Arizona Cardinals","Atlanta Falcons","Baltimore Ravens","Buffalo Bills","Carolina Panthers","Chicago Bears","Cincinnati Bengals","Cleveland Browns","Dallas Cowboys","Denver Broncos","Detroit Lions","Green Bay Packers","Houston Texans","Indianapolis Colts","Jacksonville Jaguars","Kansas City Chiefs","Los Angeles Chargers","Los Angeles Rams","Miami Dolphins","Minnesota Vikings","New England Patriots","New Orleans Saints","New York Giants","New York Jets","Oakland Raiders","Philadelphia Eagles","Pittsburgh Steelers","San Francisco FortyNiners","Seattle Seahawks","Tampa Bay Buccaneers","Tennessee Titans","Washington Redskins"];

// Initialize vars
var randonNum, currentAnswer, guessCtr, answer, checkForWin = false;

// FUNCTION to randomly select answer from answerBank
function getRandomAnswer() {
    randomNum = Math.floor(Math.random() * 32);
    currentAnswer = answerBank[randomNum];
    // console.log(currentAnswer);  // FOR TESTING
}

// FUNCTION to reset checkForWin bool and guessCtr
function resetGame () {
    guessCtr = 10;
    checkForWin = false;
}

// FUNCTION to display puzzle (with blanks)
function displayPuzzle () {
    
    // new Word instance (answer)
    answer = new Word(currentAnswer);

    // new line for spacing
    console.log("");

    // use Word.wordToString to build blanks string and display
    answer.wordToString();
}

// FUNCTION to display welcome message
function displayWelcomeMessage () {
    var displayMessage = "\nWelcome to NFL Node Constructor Hangman!\n" + 
    "------------------------------------------------------------\n" + 
    "Try to guess the NFL team puzzle below within 10 guesses.\nGood Luck!\n" + "------------------------------------------------------------\n";
    console.log(displayMessage);
}

// choose random answer from array
getRandomAnswer();
// reset game
resetGame();
// display welcome message
displayWelcomeMessage();
// display puzzle
displayPuzzle();

// FUNCTION for main game play
var hangman = () => {

    if (guessCtr > 0 && !checkForWin) {

        // Guess letter prompt
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then((ans) => {

            // declare ltrGuessed bool = calls guessLetter, ret t/f
            var ltrGuessed = answer.guessLetter(ans.guess);

            // if not guessed, dec guessCtr, log "Incorrect", disp # guesses remaining
            if (!ltrGuessed) {
                guessCtr--;
                console.log("\x1b[33m%s\x1b[0m", "\nINCORRECT!!!\n");
                console.log(`${guessCtr} guesses remaining...\n`);
            
                // log "Correct"
            } else {
                console.log("\x1b[32m%s\x1b[0m", "\nCORRECT!!!\n");
            }
            
            // checkForWin stores bool from Word.wordToString()
            checkForWin = answer.wordToString();
            
            // loop
            hangman();
        });
    
      // if guessCtr === 0 or checkForWin === true    
    } else {

        // this displays only if guessCtr === 0
        if (guessCtr === 0) {
            console.log("You have run out of guesses.  Game Over!\n");
        }

        // Play again prompt
        inquirer.prompt([
            {
                name: "playAgain",
                type: "confirm",
                message: "Play again?"
            }
        ]).then((ans) => {

            // if 'y' get new puzzle, reset game, display puzzle, loop back to hangman function
            if (ans.playAgain) {
                getRandomAnswer();
                resetGame();
                // console.log("\n");
                displayPuzzle();
                hangman();
            }
        });
    }
}

// initial hangman call (starts game)
hangman();


