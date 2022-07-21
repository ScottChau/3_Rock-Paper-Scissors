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

let playerScore = 0;
let computerScore = 0;

function gameStart(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
  console.log(`Player:${playerChoice}, Computer:${computerSelection}`);

  // Player wins
  if (playerChoice == "Rock" && computerSelection == "Scissors") {
    console.log("You Win! Rock beats Scissors");
    return (playerScore += 1);
  } else if (computerSelection == "Rock" && playerChoice == "Paper") {
    console.log("You Win! Paper beats Rock");
    return (playerScore += 1);
  } else if (computerSelection == "Paper" && playerChoice == "Scissors") {
    console.log("You Win! Scissors beats Paper");
    return (playerScore += 1);
  } else if (computerSelection == "Rock" && playerChoice == "Paper") {
    console.log("You Win! Paper beats Rock");
    return (playerScore += 1);
  } else if (computerSelection == "Scissors" && playerChoice == "Rock") {
    console.log("You Win! Rock beats Scissors");
    return (playerScore += 1);
    // Computer wins
  } else if (computerSelection == "Paper" && playerChoice == "Rock") {
    console.log("You Lose! Paper beats Rock");
    return (computerScore += 1);
  } else if (computerSelection == "Rock" && playerChoice == "Scissors") {
    console.log("You Lose! Rock beats Scissors");
    return (computerScore += 1);
  } else if (computerSelection == "Paper" && playerChoice == "Rock") {
    console.log("You Lose! Paper beats Rock");
    return (computerScore += 1);
  } else if (computerSelection == "Scissors" && playerChoice == "Paper") {
    console.log("You Lose! Scissors beats Paper");
    return (computerScore += 1);
  } else if (computerSelection == "Rock" && playerChoice == "Scissors") {
    console.log("You Lose! Rock beats Scissors");
    return (computerScore += 1);
  } else {
    console.log("Draw!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    gameStart(prompt("Paper Rock or Scissors?"), computerChoice());
    console.log(
      `Player Scores: ${playerScore} Computer Scores ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    console.log("Player wins");
  } else if (computerScore > playerScore) {
    console.log("Computer wins");
  } else {
    console.log("Draw");
  }
}

game();
