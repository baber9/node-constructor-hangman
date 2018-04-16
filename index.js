var Word = require("./word.js");
var inquirer = require("inquirer");

var answerBank = ["Arizona Cardinals","Atlanta Falcons","Baltimore Ravens","Buffalo Bills","Carolina Panthers","Chicago Bears","Cincinnati Bengals","Cleveland Browns","Dallas Cowboys","Denver Broncos","Detroit Lions","Green Bay Packers","Houston Texans","Indianapolis Colts","Jacksonville Jaguars","Kansas City Chiefs","Los Angeles Chargers","Los Angeles Rams","Miami Dolphins","Minnesota Vikings","New England Patriots","New Orleans Saints","New York Giants","New York Jets","Oakland Raiders","Philadelphia Eagles","Pittsburgh Steelers","San Francisco FortyNiners","Seattle Seahawks","Tampa Bay Buccaneers","Tennessee Titans","Washington Redskins"
];

// Randomly select answer from answerBank
var randomNum = Math.floor(Math.random() * 32);
var currentAnswer = answerBank[randomNum];

console.log(currentAnswer);  // FOR TESTING

var answer = new Word(currentAnswer);

// var blanks = answer.wordToString();
answer.wordToString();
var ltrCounter = 0;

var hangman = () => {

    if (ltrCounter < 10) {
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then((ans) => {
            var ltrGuessed = answer.guessLetter(ans.guess);
            answer.wordToString();

            if (!ltrGuessed) {
                ltrCounter++;
                console.log(ltrCounter);
            } else {
                console.log("letter correct!");
            }
            hangman();
        });
    } else {
        console.log("You have run out of guesses.  Game Over!");
    }
}

hangman();

