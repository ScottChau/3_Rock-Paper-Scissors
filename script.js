// Computer
function computerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  } else if (randomNumber == 1) {
    return "paper";
  } else if (randomNumber == 2) {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function score() {
  const container = document.querySelector("#container");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = `Player Score: ${playerScore} Computer Score ${computerScore}`;
  container.appendChild(content);
}

function rockC() {
  computer = computerChoice();
  console.log(`Computer:${computer}`);
  if (computer == "rock") {
    return score();
  } else if (computer == "paper") {
    console.log("You lose!");
    computerScore += 1;
    return score();
  } else if (computer == "scissors") {
    console.log("You win");
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
    console.log("You lose");
    computerScore += 1;
    return score();
  } else if (computer == "rock") {
    console.log("You win");
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
    console.log("You lose");
    computerScore += 1;
    return score();
  } else if (computer == "paper") {
    console.log("You win");
    playerScore += 1;
    return score();
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", rockC);

const paper = document.querySelector("#paper");
paper.addEventListener("click", paperC);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", scissorsC);

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
