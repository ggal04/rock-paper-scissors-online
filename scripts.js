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

for (i = 0; i < 3; i++) {
  var computerSelection = getComputerChoice();
  var playerSelection = getPlayerChoice();

  if (computerSelection === playerSelection) {
    console.log("Tie! No winners here.");
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "paper") {
          console.log("Oh no! Your rock loses to paper.");
        } else {
          console.log("Your rock wins against scissors! Lets go!");
        }
        break;
      case "paper":
        if (computerSelection === "scissors") {
          console.log("Oh no! Your paper loses to scissors.");
        } else {
          console.log("Your paper wins against rock! Lets go!");
        }
        break;
      case "scissors":
        if (computerSelection === "rock") {
          console.log("Oh no! Your scissors lose to rock.");
        } else {
          console.log("Your scissors win against paper! Lets go!");
        }
        break;
      default:
        console.log("Watch your inputs, man!");
        break;
    }
  }
}
