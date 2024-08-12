function getComputerChoice() {
  let comChoice = Math.floor(Math.random() * 3);
  if (comChoice === 0) {
    return "Rock";
  } else if (comChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors ?");
  if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
    return choice;
  } else {
    return alert("Please choose one option: rock, paper, or scissors?");
  }
}
