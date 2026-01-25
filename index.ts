const infoSection: HTMLElement = document.querySelector(".info");
const h2: HTMLHeadingElement = document.querySelector(".info h2");
const buttonsSection: HTMLElement = document.querySelector(".buttons");
const p: HTMLParagraphElement = document.createElement("p");

const choices: string[] = ["ROCK", "PAPER", "SCISSORS"];
let computerScore: number = 0;
let humanScore: number = 0;
let humanChoice: string = "";

function getComputerChoice(): string {
  let choice: number = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function playRound(humanChoice: string, computerChoice: string): string {
  // Computer wins
  if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    computerScore++;
    return "You lose! Paper beats Rock";
  }
  if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    computerScore++;
    return "You lose! SCISSORS beats Paper";
  }
  if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    computerScore++;
    return "You lose! Rock beats SCISSORS ";
  }

  // Human wins
  if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    humanScore++;
    return "Computer lose! Paper beats Rock";
  }
  if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    humanScore++;
    return "Computer lose! SCISSORS beats PAPER";
  }
  if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
    humanScore++;
    return "Computer lose! ROCK beats SCISSORS";
  } else {
    return "TIE";
  }
}

buttonsSection.addEventListener("click", (event: Event): void => {
  /*
   * Instead of adding an event listener to each button, we take advantage of the bubbling feature of the events in JavaScript and catch the event in the parent container.
   * That so only set one event listener.
   */

  if (humanScore >= 5 || computerScore >= 5) {
    h2.textContent = "Game ended.";
    p.textContent = `The total score is:\n 
    computer score: ${computerScore}.\n
    your score: ${humanScore}.`;
  } else if (event.target instanceof HTMLElement) {
    humanChoice = event.target.textContent.toUpperCase();
    let computerChoice: string = getComputerChoice();
    p.textContent = `Computer has chosen: ${computerChoice}.
      and you have chosen: ${humanChoice}. 
      ${playRound(humanChoice, computerChoice)} `;
  }

  infoSection.appendChild(p);
});
