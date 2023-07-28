function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);
  let choice;

  switch (randomNumber) {
    case 1:
      choice = "rock";
      return choice;
      break;
    case 2:
      choice = "paper";
      return choice;
      break;
    case 3:
      choice = "scissors";
      return choice;
      break;
    default:
      choice = "Something is wrong.";
      return choice;
  }
}

function playRound(playerSelection, computerSelection) {
  let message;
  if (computerSelection === playerSelection) {
    message = "Tie! No winners here.";
    return message;
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "paper") {
          message = "Oh no! Your rock loses to paper.";
        } else {
          message = "Your rock wins against scissors! Lets go!";
        }
        return message;
        break;
      case "paper":
        if (computerSelection === "scissors") {
          message = "Oh no! Your paper loses to scissors.";
        } else {
          message = "Your paper wins against rock! Lets go!";
        }
        return message;
        break;
      case "scissors":
        if (computerSelection === "rock") {
          message = "Oh no! Your scissors lose to rock.";
        } else {
          message = "Your scissors win against paper! Lets go!";
        }
        return message;
        break;
      default:
        message = "Watch your inputs, man!";
        return message;
        break;
    }
  }
}

function checkScore(message) {
  if (
    message === "Your scissors win against paper! Lets go!" ||
    message === "Your paper wins against rock! Lets go!" ||
    message === "Your rock wins against scissors! Lets go!"
  ) {
    playerScore++;
    document.querySelector('.displayPlayer')
    PlayerTrack.textContent = playerScore;
    PlayerContainer.appendChild(PlayerTrack);
  } else if (
    message === "Tie! No winners here." ||
    message === "Watch your inputs, man!"
  ) {
    playerScore = playerScore;
  } else {
    computerScore++;
    document.querySelector('.displayComputer');
    CompTrack.textContent = computerScore;
    CompContainer.appendChild(CompTrack);
  }
}

let playerScore = 0;
let computerScore = 0;
let message;

const CompContainer = document.querySelector('.displayComputer');
const CompTrack = document.createElement("div");
CompTrack.textContent = computerScore;
CompContainer.appendChild(CompTrack);

const PlayerContainer = document.querySelector('.displayPlayer')
const PlayerTrack = document.createElement("div");
PlayerTrack.textContent = playerScore;
PlayerContainer.appendChild(PlayerTrack);

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  message = playRound("rock", getComputerChoice());
  checkScore(message);
  console.log(playerScore);
  console.log(computerScore);
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  message = playRound("paper", getComputerChoice());
  checkScore(message);
  console.log(playerScore);
  console.log(computerScore);
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  message = playRound("scissors", getComputerChoice());
  checkScore(message);
  console.log(playerScore);
  console.log(computerScore);
});






