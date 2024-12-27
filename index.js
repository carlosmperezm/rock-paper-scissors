const choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

