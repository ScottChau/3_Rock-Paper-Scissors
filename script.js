const container = document.querySelector("#container");
const content = document.createElement("div");
const computerC = document.createElement("p");
const winLose = document.createElement("h2");
const scoreBoard = document.createElement("p");

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
    rock.setAttribute("disabled", "disabled");
    paper.setAttribute("disabled", "disabled");
    scissors.setAttribute("disabled", "disabled");
  } else if (computerScore === 5) {
    winLose.textContent = "You Lose!!";
    rock.setAttribute("disabled", "disabled");
    paper.setAttribute("disabled", "disabled");
    scissors.setAttribute("disabled", "disabled");
  }

  scoreBoard.textContent = `Player Score: ${playerScore} Computer Score ${computerScore}`;
  content.appendChild(scoreBoard);
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

function resetC() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;

  scoreBoard.textContent = "";
  computerC.textContent = "";
  winLose.textContent = "";

  content.appendChild(scoreBoard);
  content.appendChild(computerC);
  content.appendChild(winLose);
  container.appendChild(content);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", rockC);

const paper = document.querySelector("#paper");
paper.addEventListener("click", paperC);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", scissorsC);

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetC);
