const buttons = document.querySelectorAll(".game-btn");
const resultEl = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const tieScoreEl = document.getElementById("tie-score");

const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "Light Mode☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "Light Mode☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "Dark Mode🌙";
  }
});

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tieScore++;
    tieScoreEl.textContent = tieScore;
    return "It's a tie🤝 " + playerSelection + " vs " + computerSelection;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win👍 " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose👎 " + computerSelection + " beats " + playerSelection;
  }
}

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;

  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  tieScoreEl.textContent = 0;

  resultEl.textContent = "Choose your move!";
});
