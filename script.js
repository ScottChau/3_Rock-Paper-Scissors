const container = document.querySelector("#container");
const content = document.createElement("div");
const computerC = document.createElement("p");
const winLose = document.createElement("h2");

function computerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    result = "rock";
  } else if (randomNumber == 1) {
    result = "paper";
  } else if (randomNumber == 2) {
    result = "scissors";
  }
  computerC.textContent = `Computer: ${result}`;

  return result;
}

let playerScore = 0;
let computerScore = 0;

function score() {
  if (playerScore === 5) {
    winLose.textContent = "You Win!!";
  } else if (computerScore === 5) {
    winLose.textContent = "You Lose!!";
  } else {
    content.textContent = `Player Score: ${playerScore} Computer Score ${computerScore}`;
  }

  content.appendChild(computerC);
  content.appendChild(winLose);
  container.appendChild(content);
}

function rockC() {
  computer = computerChoice();
  console.log(`Computer:${computer}`);
  if (computer == "rock") {
    return score();
  } else if (computer == "paper") {
    computerScore += 1;
    return score();
  } else if (computer == "scissors") {
    playerScore += 1;
    return score();
  }
}

function paperC() {
  computer = computerChoice();
  console.log(`Computer:${computer}`);
  if (computer == "paper") {
    return score();
  } else if (computer == "scissors") {
    computerScore += 1;
    return score();
  } else if (computer == "rock") {
    playerScore += 1;
    return score();
  }
}

function scissorsC() {
  computer = computerChoice();
  console.log(`Computer:${computer}`);
  if (computer == "scissors") {
    return score();
  } else if (computer == "rock") {
    computerScore += 1;
    return score();
  } else if (computer == "paper") {
    playerScore += 1;
    return score();
  }
}

if (playerScore <= 5 || computerScore <= 5) {
  const rock = document.querySelector("#rock");
  rock.addEventListener("click", rockC);

  const paper = document.querySelector("#paper");
  paper.addEventListener("click", paperC);

  const scissors = document.querySelector("#scissors");
  scissors.addEventListener("click", scissorsC);
}

// adding content

// function game() {
//   for (let i = 0; i < 5; i++) {
//     gameStart(prompt("Rock, Paper or Scissors?"), computerChoice());
//     console.log(
//       `Player Scores: ${playerScore} Computer Scores ${computerScore}`
//     );
//   }
//   if (playerScore > computerScore) {
//     console.log("Player wins");
//   } else if (computerScore > playerScore) {
//     console.log("Computer wins");
//   } else {
//     console.log("Draw");
//   }
// }

// game();
