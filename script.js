function getComputerChoice(){
let choices = ['rock', 'paper', 'scissors'];
let randomIndex = Math.floor(Math.random()*3);

return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    //Check for a tie
    if ( playerSelection === computerSelection){
        return "It's a tie!";
    }

    //Check for player win scenarios
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }

    //If it's not a tie and player doesn't win, then it's a loss
    return `You Lose! ${computerSelection} beats ${playerSelection}`
}