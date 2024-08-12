function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0;

  for (rounds; rounds < 5; rounds++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
      } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else {
        console.log("Your choice is invalid. Please try again");
        rounds--;
      }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

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
    playRound(humanSelection, computerSelection);
  }
  if (computerScore === humanScore) {
    console.log(`It's a tie! computer: ${computerScore} your: ${humanScore}`);
  } else if (computerScore > humanScore) {
    console.log(`The computer Won! Score: ${computerScore}`);
  } else {
    console.log(`You Won! Score: ${humanScore}`);
  }
  startGame();
}

function startGame() {
  setTimeout(() => {
    if (confirm("Do you want to start a new game?")) {
      playGame();
    }
  }, 1200);
}

startGame();
