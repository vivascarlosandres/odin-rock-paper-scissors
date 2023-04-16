// Query Selectors for buttons and scores
const rockBtn = document.querySelector("#rock");
rockBtn.classList.add("playButtons");

const paperBtn = document.querySelector("#paper");
paperBtn.classList.add("playButtons");

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.classList.add("playButton");

const newGameBtn = document.querySelector("#newGame");
newGameBtn.classList.add("newGameButton");

const roundScore = document.querySelector("#roundScore");
const finalScore = document.querySelector("#finalScore");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

// Randomly returns the computer's choice
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}
// Set initial values for the game
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let scoreToReach = 5;

// Buttons call playRound when clicked and can call endGame when scoreToReach = 5
rockBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("rock", getComputerChoice());
    endGame();
  }
})

paperBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("paper", getComputerChoice());
    endGame();
  }
})

scissorsBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("scissors", getComputerChoice());
    endGame();
  }
})

// Restart the game by reseting the score, clearing the score log and removing classes
newGameBtn.addEventListener("click", function () {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;
  roundScore.innerText = "";
  player.innerText = "0";
  computer.innerText = "0";
  finalScore.innerText = "";
  player.classList.remove("winner", "loser");
  computer.classList.remove("winner", "loser");
})

// For each round, a new li is added as a round score log
// player or computer score increments
// player and computer score displays each round
function playRound(playerSelection, computerSelection) {

  const newLi = document.createElement('li');
  newLi.classList.add("newLi");
  
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
    roundScore.appendChild(newLi);
    computerScore++;
    computer.innerText = computerScore;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
    roundScore.appendChild(newLi);
    playerScore++;
    player.innerText = playerScore;
  } else if (playerSelection === computerSelection) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`;
    roundScore.appendChild(newLi);
  }
}
/*
function game() {
    for (let i = 0; i < 5; i++) {
  
      let playerSelection = prompt(
        "Choose rock, paper, or scissors"
      ).toLowerCase();
  
      while (
        playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors"
      ) {
        playerSelection = prompt(
          "Choose a valid input: rock, paper, or scissors"
        ).toLowerCase();
      }
  
      playRound(playerSelection, getComputerChoice());
    }

    if (playerScore > computerScore) {
        console.log(
          `Congrats! You beat the computer ${playerScore} out of 5 rounds!`
        );
      } else if (playerScore === computerScore) {
        console.log("This game ended in a tie. How bizzare.");
      } else {
        console.log(
          `Oh no, the computer beat you ${computerScore} out of 5 rounds...`
        );
      }
    }*/