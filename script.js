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
  if (playerChoice === computerSelection) {
    console.log("Draw!");
  } else if (
    (computerSelection == "Rock" && playerChoice == "Paper") ||
    (computerSelection == "Paper" && playerChoice == "Scissors") ||
    (computerSelection == "Scissors" && playerChoice == "Rock")
  ) {
    console.log(`You win! ${playerChoice} beats ${computerSelection}`);
    return (playerScore += 1);

    // Computer wins
  } else if (
    (playerChoice == "Rock" && computerSelection == "Paper") ||
    (playerChoice == "Paper" && computerSelection == "Scissors") ||
    (playerChoice == "Scissors" && computerSelection == "Rock")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
    return (computerScore += 1);
    // Invaild input
  } else {
    console.log(`Invalid Input, please type "Rock, Paper,Scissor" `);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    gameStart(prompt("Rock, Paper or Scissors?"), computerChoice());
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
