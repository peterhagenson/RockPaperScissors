//This is the javascript page.//

let words = ["rock", "paper", "scissors"];

function computerPlay() {
  const random = words[Math.floor(Math.random() * words.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
}

/*
let playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
const computerSelection = computerPlay();
*/

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = window
      .prompt("Choose Rock, Paper, or Scissors")
      .toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
console.log(game());
