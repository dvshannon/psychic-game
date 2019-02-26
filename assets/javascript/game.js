var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guessesSoFar = 0;
var guesses = [];
var choices = ["a", "b", "c"];


var userGuessText = document.getElementById("user-guess");
var computerGuessText = document.getElementById("pyschic-guess");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessessoFarText = document.getElementById("guesses-so-far");

	
document.onkeyup = function(event) {
	var userGuess = event.key;

	var computerGuess = choices[Math.floor(Math.random() * choices.length)];

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c")) {
		guesses.push(userGuess);
		userGuessText.textContent = "You chose: " + guesses;
		computerGuessText.textContent = "The psychic chose: " + computerGuess;
		
	} else  {
		alert("You can only use 'a', 'b', or 'c' in this game!");
	} 
	
	if (userGuess === computerGuess) {
		wins++;
		winsText.textContent = "You have won " + wins + " time(s).. but it won't happen again.";
		guessesLeft = 3;
		guesses = [];

	} else  {
		guessesLeft--;
		guessesSoFar++;
		guessessoFarText.textContent = "You only have " + guessesLeft + " guesses left.. choose wisely."
	}

	if (guessesLeft === 0) {
		losses++;
		lossesText.textContent = "HA, I have won " + losses + " time(s), better luck next time.";
		guessesLeft = 3;
		guesses = [];
		userGuessText.textContent = "You chose: " + guesses;
	}
	// userGuessText.push(userGuess);
	};