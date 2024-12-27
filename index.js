const choices = ['ROCK', 'PAPER', 'SCISSORS'];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function getHumanChoice() {
  let choice = prompt("ROCK, PAPER or SCISSORS ?").toUpperCase();

  if (choice != choices[0] && choice != choices[1] && choice != choices[2]) {
    console.warn(`${choice} is not a valid answer.`);
    return getHumanChoice();
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();
  // Computer wins
  if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
    computerScore++;
    return console.log('You lose! Paper beats Rock');
  }
  if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') {
    computerScore++;
    return console.log('You lose! SCISSORS beats Paper');
  }
  if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK') {
    computerScore++;
    return console.log('You lose! Rock beats SCISSORS ');
  }

  // Human wins
  if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
    humanScore++;
    return console.log('Computer lose! Paper beats Rock');
  }
  if (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') {
    humanScore++;
    return console.log('Computer lose! SCISSORS beats PAPER');
  }
  if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS') {
    humanScore++;
    return console.log('Computer lose! ROCK beats SCISSORS');
  }
  else {
    return console.log('TIE')
  }
}
