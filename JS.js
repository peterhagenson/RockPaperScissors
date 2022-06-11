//This is the javascript page.//

let words = ["rock", "paper", "scissors"];

function computerPlay() {
  const random = words[Math.floor(Math.random() * words.length)];
  return random;
}

function startGame() {
  //play the game until someone wins 5 times
}

let ties = 0;
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundWinner = "player";
    document.querySelector(
      "#playerScore"
    ).textContent = `Player Score: ${playerScore}`;
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === computerSelection) {
    ties++;
    roundWinner = "tie";
    document.querySelector("#ties").textContent = `Ties: ${ties}`;
    return "It's a tie!";
  } else {
    computerScore++;
    roundWinner = "computer";
    document.querySelector(
      "#computerScore"
    ).textContent = `Computer Score: ${computerScore}`;
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}
/*
document.querySelector("#ties").textContent = `Ties: ${newTScore}`;
document.querySelector(
  "#playerScore"
).textContent = `Player Score: ${newPScore}`;
document.querySelector(
  "#computerScore"
).textContent = `Computer Score: ${newCScore}`;
*/

const computerSelection = computerPlay();

const buttons = document.querySelectorAll("button:not(#reset)");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerSelection = computerPlay();
    function computerPlay() {
      const random = words[Math.floor(Math.random() * words.length)];
      return random;
    }
    const result = playRound(button.textContent, computerSelection);

    document.querySelector("#display").textContent = result;
    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  });
});

function declareWinner() {
  if (playerScore > computerScore) {
    endDesc.textContent = "Player Wins!";
  } else {
    endDesc.textContent = "Computer Wins!";
  }
}

const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", function () {
  document.querySelector("#playerScore").textContent = "Player Score: " + 0;
  document.querySelector("#computerScore").textContent = "Computer Score: " + 0;
  document.querySelector("#ties").textContent = "Ties: " + 0;
  document.querySelector("#display").textContent = "";
  document.querySelector("#endDesc").textContent = "";
  ties = 0;
  playerScore = 0;
  computerScore = 0;
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
