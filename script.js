function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(
            `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Sorry!`
        );

        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(
            `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Congrats!`
        );

        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(
            `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Congrats!`
        );
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(
            `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Sorry!`
        );
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(
            `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Congrats!`
        );
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(
            `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Sorry!`
        );
        computerScore++;
    } else if (playerSelection === computerSelection) {
        console.log(
            `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`
        );
    }

    return playerScore;
    return computerScore;
}

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
    }