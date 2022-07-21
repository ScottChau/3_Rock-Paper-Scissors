// Computer
function computerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "Rock";
  } else if (randomNumber == 1) {
    return "Paper";
  } else if (randomNumber == 2) {
    return "Scissors";
  }
}

function gameStart(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
  console.log(`Player:${playerChoice}, Computer:${computerSelection}`);

  // Rock
  if (playerChoice == "Rock" && computerSelection == "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (computerSelection == "Rock" && playerChoice == "Scissors") {
    return "You Lose! Rock beats Scissors";
  } else if (computerSelection == "Rock" && playerChoice == "Paper") {
    return "You Win! Paper beats Rock";
  } else if (computerSelection == "Paper" && playerChoice == "Rock") {
    return "You Lose! Paper beats Rock";

    // Paper
  } else if (computerSelection == "Paper" && playerChoice == "Rock") {
    return "You Lose! Paper beats Rock";
  } else if (computerSelection == "Rock" && playerChoice == "Paper") {
    return "You Win! Paper beats Rock";
  } else if (computerSelection == "Paper" && playerChoice == "Scissors") {
    return "You Win! Scissors beats Paper";
  } else if (computerSelection == "Scissors" && playerChoice == "Paper") {
    return "You Lose! Scissors beats Paper  ";
    // Scissors
  } else if (computerSelection == "Scissors" && playerChoice == "Rock") {
    return "You Win! Rock beats Scissors";
  } else if (computerSelection == "Rock" && playerChoice == "Scissors") {
    return "You Lose! Rock beats Scissors";
  } else {
    console.log("Draw!");
  }
}

console.log(gameStart(prompt("Paper Rock or Scissors?"), computerChoice()));
