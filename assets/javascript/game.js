//create new variable .. 
var wins = 0; //starting point will count up
var losses = 0; //starting point will count up
var guessLeft = 9; //starting point will count down
var guessSoFar = []; // information that will be filled in as the game progesses

// create variable that hold the info from my html
var winsText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var guessLeftText = document.getElementById("guessLeft");
var guessSoFarText = document.getElementById("guessSoFar");

// new variable that is an array to let computer choose a letter
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //when the program starts, computer chooses from the array

console.log("computer guess: " + computerGuess); // will check to make sure compouter is picking

document.onkeyup = function (event) { //when a user left there finger off a letter on the keyboard
    var userGuess = event.key; //creating an event for activating keyboard
    guessSoFar.push(userGuess); // storing letter that userGuess touched on the keyboard

    // making the game run based on if we have guesses left
    if (guessLeft != 1) { // if the guess is not equal to 1
        guessLeft--; // then 1 point is taken away from guess left
        guessLeftText.textContent = ("Guesses left: " + guessLeft); // calls on var guess left and changes content on display to new total 
        guessSoFarText.textContent = ("Your Guess so far: " + guessSoFar); //calls on var guess so far and list letter that you have used

        if (userGuess === computerGuess) { //if user guess is equal to computer guess
            wins++; // add 1 point to wins column
            winsText.textContent = ("Wins: " + wins); //calls on var wins and changes display to updated points
            guessSoFar = []; //call on which letter have already been list
            guessLeft = 9; //resets back to 9
            guessLeftText.textContent = ("Guesses left: " + guessLeft); //when game is reset, the display resets to say 9
            guessSoFarText.textContent = ("Your Guess so far: "); //when game is reset, the display removes previous guesses 
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //let computer pick another guess
            console.log("computer guess: " + computerGuess);
        }


    } else {
        losses++; //if you guess wrong it, it adds a 1 to the losses colom
        lossText.textContent = ("losses: " + losses);
        guessSoFar = []; //call on which letter have already been list
        guessLeft = 9; //resets back to 9
        guessLeftText.textContent = ("Guess left: " + guessLeft);
        guessSoFarText.textContent = ("Your Guess so far: ");
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //let computer pick another guess
        console.log("computer guess: " + computerGuess);
    }



}
