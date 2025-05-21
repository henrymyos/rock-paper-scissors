let computerChoice = "";
let humanChoice = "";

let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
  const num = Math.random();

  if (num < 0.33) {
    computerChoice = "rock";
  } else if(num > 0.33 && num < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  humanChoice = prompt("What do you choose: rock, paper, or scissors?")
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {

  let result = "";

  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      result = "Tie";
    } else if (computerChoice === "paper") {
      result = "Lose";
      computerScore++;
    } else {
      result = "Win";
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      result = "Win";
      humanScore++;
    } else if (computerChoice === "paper") {
      result = "Tie";
    } else {
      result = "Lose";
      computerScore++;
    }
  } else if(humanChoice === "scissors") {
    if (computerChoice === "rock") {
      result = "Lose";
      computerScore++;
    } else if (computerChoice === "paper") {
      result = "Win";
      humanScore++;
    } else {
      result = "Tie";
    }
  } else {
    console.log("Not a valid choice, try again");
  }
  console.log("Your Choice: " + humanChoice);
  console.log("Computer Choice: " + computerChoice);
  console.log(result + "\nYour Score: " + humanScore + "\nComputer Score: " + computerScore);
}

function playGame() {

  let result = "";

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    result = "You Beat the Computer"
  } else if (humanScore < computerScore) {
    result = "You Lost to the Computer"
  } else {
    result = "You Tied with the Computer!"
  }
  console.log(result + "   " + humanScore + " - " + computerScore);
}

playGame();


