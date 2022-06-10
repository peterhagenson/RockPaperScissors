//This is the javascript page.//

let words = ["rock", "paper", "scissors"];

function computerPlay() {
  const random = words[Math.floor(Math.random() * words.length)];
  return random;
}

function resetGame() {
  //reset game
}

function startGame() {
  //play the game until someone wins 5 times
}

let ties = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log("playerScore " + playerScore);
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === computerSelection) {
    ties++;
    console.log("Ties  " + ties);
    return "It's a tie!";
  } else {
    computerScore++;
    console.log("ComputerScore " + computerScore);
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

document.querySelector("#ties").textContent = ties;
document.querySelector("#playerScore").textContent = playerScore;
document.querySelector("#computerScore").textContent = computerScore;

const computerSelection = computerPlay();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.textContent, computerSelection);
    document.querySelector("#display").textContent = result;
  });
});

/*
let playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
*/

/*
const btn1 = document.querySelector("#rock");
btn1.addEventListener("click", playRound);

const btn2 = document.querySelector("#paper");
btn2.addEventListener("click", playRound);

const btn3 = document.querySelector("#scissors");
btn3.addEventListener("click", playRound);

*/
/*
function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = window
      .prompt("Choose Rock, Paper, or Scissors")
      .toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
*/

/*
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
*/
