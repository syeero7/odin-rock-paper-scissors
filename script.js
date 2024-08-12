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
