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
