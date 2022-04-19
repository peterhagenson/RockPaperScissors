//This is the javascript page.//

let words = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const random = words[Math.floor(Math.random() * words.length)];
  return random;
}

function playRound(playerSelction, computerSelection) {
  if (computerSelection === "Paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (computerSelection === "Scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
