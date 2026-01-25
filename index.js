var infoSection = document.querySelector(".info");
var h2 = document.querySelector(".info h2");
var buttonsSection = document.querySelector(".buttons");
var p = document.createElement("p");
var choices = ["ROCK", "PAPER", "SCISSORS"];
var computerScore = 0;
var humanScore = 0;
var humanChoice = "";
function getComputerChoice() {
    var choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}
function playRound(humanChoice, computerChoice) {
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
    }
    else {
        return "TIE";
    }
}
buttonsSection.addEventListener("click", function (event) {
    /*
     * Instead of adding an event listener to each button, we take advantage of the bubbling feature of the events in JavaScript and catch the event in the parent container.
     * That so only set one event listener.
     */
    if (humanScore >= 5 || computerScore >= 5) {
        h2.textContent = "Game ended.";
        p.textContent = "The total score is:\n \n    computer score: ".concat(computerScore, ".\n\n    your score: ").concat(humanScore, ".");
    }
    else if (event.target instanceof HTMLElement) {
        humanChoice = event.target.textContent.toUpperCase();
        var computerChoice = getComputerChoice();
        p.textContent = "Computer has chosen: ".concat(computerChoice, ".\n      and you have chosen: ").concat(humanChoice, ". \n      ").concat(playRound(humanChoice, computerChoice), " ");
    }
    infoSection.appendChild(p);
});
