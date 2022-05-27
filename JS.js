<<<<<<< HEAD
//This is the javascript page.//

let words = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const random = words[Math.floor(Math.random() * words.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
}

let playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
const computerSelection = computerPlay();

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
console.log(game());
=======
//This is the javascript page.
>>>>>>> b27b4cadacb6399f876eefb6bd9c6a7214f79e5d
