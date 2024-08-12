const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let comChoice = Math.floor(Math.random() * 3);
  if (comChoice === 0) {
    return "rock";
  } else if (comChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors ?").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return alert(
      "Please enter one of the following options: rock, paper or scissors",
    );
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore += 1;
  } else if (humanChoice === computerChoice) {
    console.log(" It's a tie!");
  } else {
    console.log("Your choice is invalid. Please try again");
  }
}

playRound(humanSelection, computerSelection);
