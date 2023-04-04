function getComputerChoice(){
let choices = ['Rock', 'Paper', 'Scissors'];
let thing = choices[Math.floor(Math.random()*choices.length)];
console.log("The computer's choice is: "+ thing);
}