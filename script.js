const buttons = document.querySelector(".choices");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result");

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

buttons.addEventListener("click", (e) => {
  const className = e.target.className;
  if (!choices.includes(className)) return;
  playGame(className);
});

function playGame(humanChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const resultText = playRound(humanChoice, computerChoice);
  displayScores();
  displayResult(resultText);
  if (humanScore === 5 || computerScore === 5) resetGameState();
}

function playRound(humanChoice, computerChoice) {
  let winner;

  switch (humanChoice) {
    case computerChoice:
      winner = null;
      break;
    case choices[0]:
      winner = computerChoice === choices[2] ? "human" : "computer";
      break;
    case choices[1]:
      winner = computerChoice === choices[0] ? "human" : "computer";
      break;
    case choices[2]:
      winner = computerChoice === choices[1] ? "human" : "computer";
      break;
  }

  if (winner === null) return "It's a tie!";

  winner === "human" ? (humanScore += 1) : (computerScore += 1);

  const reason =
    winner === "human"
      ? `${humanChoice} beats ${computerChoice}`
      : `${computerChoice} beats ${humanChoice}`;

  return `You ${winner === "human" ? "won" : "lost"}!\n ${reason}`;
}

function displayScores() {
  computer.textContent = `Computer: ${computerScore}`;
  player.textContent = `Player: ${humanScore}`;
}

function displayResult(text) {
  if (computerScore === 5) {
    result.textContent = `Computer won!\n Score: ${computerScore}`;
  }

  if (humanScore === 5) {
    result.textContent = `You won!\n Score: ${humanScore}`;
  }

  if (humanScore < 5 && computerScore < 5) {
    result.textContent = text;
  }
}

function resetGameState() {
  computerScore = 0;
  humanScore = 0;
  player.textContent = "Player: 0";
  computer.textContent = "Computer: 0";
}
