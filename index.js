const h2 = document.querySelector(".info h2");
const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");
const buttonsSection = document.querySelector(".buttons")

const choices = ["ROCK", "PAPER", "SCISSORS"];
let computerScore = 0;
let humanScore = 0;
let humanChoice = "";

buttonsSection.addEventListener("click", (evnt) => {
  humanChoice = evnt.target.textContent.toUpperCase();
  h2.textContent = playRound(humanChoice, getComputerChoice());
});


function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function playRound(humanChoice, computerChoice) {
  // Computer wins
  if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
    computerScore++;
    return 'You lose! Paper beats Rock';
  }
  if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') {
    computerScore++;
    return 'You lose! SCISSORS beats Paper';
  }
  if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK') {
    computerScore++;
    return 'You lose! Rock beats SCISSORS ';
  }

  // Human wins
  if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
    humanScore++;
    return 'Computer lose! Paper beats Rock';
  }
  if (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') {
    humanScore++;
    return 'Computer lose! SCISSORS beats PAPER';
  }
  if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS') {
    humanScore++;
    return 'Computer lose! ROCK beats SCISSORS';
  }
  else {
    return 'TIE';
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(humanChoice, getComputerChoice());
  }
  h2.textContent = `The total score is: 
    computer score: ${computerScore}.
    your score: ${humanScore}. `
}
