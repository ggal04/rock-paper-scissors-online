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

function getPlayerChoice() {
  let choice;
  let insensitiveChoice;
  choice = prompt("Choose Rock, Paper or Scissors: ");
  insensitiveChoice = choice.toLowerCase();
  if (
    insensitiveChoice !== "rock" &&
    insensitiveChoice !== "paper" &&
    insensitiveChoice !== "scissors"
  ) {
    insensitiveChoice = "invalid";
  }
  return insensitiveChoice;
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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let message;

  while (playerScore !== 3 && computerScore !== 3) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    message = playRound(playerSelection, computerSelection);
    console.log(message);
    if (
      message === "Your rock wins against scissors! Lets go!" ||
      message === "Your paper wins against rock! Lets go!" ||
      message === "Your scissors win against paper! Lets go!"
    ) {
      playerScore++;
    } else if (
      message === "Tie! No winners here." ||
      message === "Watch your inputs, man!"
    ) {
      playerScore = playerScore;
    } else {
      computerScore++;
    }
    console.log(playerScore);
    console.log(computerScore);
  }
  if (playerScore === 3) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

game(); 
