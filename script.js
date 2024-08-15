const btn = document.querySelector("#choice");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const playerResult = document.createElement("p");

let playerChoice = "";
let comChoice = "";
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      comChoice = "rock";
      break;
    case 1:
      comChoice = "paper";
      break;
    case 2:
      comChoice = "scissors";
      break;
  }
};

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      playerResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      playerResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      playerResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      playerResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      playerResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      playerResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      console.log("It's a tie!");
      playerResult.textContent = "It's a tie!";
    }
    getComputerChoice();
  }
  playRound(playerChoice, comChoice);
}

btn.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "rock":
      playerChoice = "rock";
      break;
    case "paper":
      playerChoice = "paper";
      break;
    case "scissors":
      playerChoice = "scissors";
      break;
  }

  playGame();
  showWinner();
  result.appendChild(playerResult);
});

function showWinner() {
  if (computerScore < 5) {
    computer.textContent = `Computer: ${computerScore}`;
  } else if (computerScore === 5) {
    player.textContent = "";
    computer.textContent = `The computer Won! Score: ${computerScore}`;
  }

  if (humanScore < 5) {
    player.textContent = `Player: ${humanScore}`;
  } else if (humanScore === 5) {
    computer.textContent = "";
    player.textContent = `You Won! Score: ${humanScore}`;
  }

  if (computerScore === 5 || humanScore === 5) {
    computerScore = 0;
    humanScore = 0;
  }
}
