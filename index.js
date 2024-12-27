const choices = ['ROCK', 'PAPER', 'SCISSORS'];

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
