function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let choice;

    switch (randomNumber) {
        case 1:
            choice = "rock";
            computer.textContent= "🗿"
            computerChoice.appendChild(computer);
            return choice;
            break;
        case 2:
            choice = "paper";
            computer.textContent= "📄"
            computerChoice.appendChild(computer);
            return choice;
            break;
        case 3:
            choice = "scissors";
            computer.textContent= "✂️"
            computerChoice.appendChild(computer);
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
        document.querySelector(".message");
        msg.textContent = message;
        msgContainer.appendChild(msg);
        playerScore++;
        document.querySelector(".displayPlayer");
        PlayerTrack.textContent = playerScore;
        PlayerContainer.appendChild(PlayerTrack);
        checkPlayerScore(playerScore, winCondition);
    } else if (
        message === "Tie! No winners here." ||
        message === "Watch your inputs, man!"
    ) {
        document.querySelector(".message");
        msg.textContent = message;
        msgContainer.appendChild(msg);
    } else {
        document.querySelector(".message");
        msg.textContent = message;
        msgContainer.appendChild(msg);
        computerScore++;
        document.querySelector(".displayComputer");
        CompTrack.textContent = computerScore;
        CompContainer.appendChild(CompTrack);
        checkComputerScore(computerScore, winCondition);
    }
}


function checkComputerScore(computerScore, winCondition) {
  if (computerScore >= winCondition) {
      document.querySelector(".btn1").disabled = true;
      document.querySelector(".btn2").disabled = true;
      document.querySelector(".btn3").disabled = true;
      document.querySelector(".message");
      msg.textContent = "The computer wins! Better luck next time :(";
      msgContainer.appendChild(msg);
  }
}

function checkPlayerScore(playerScore, winCondition) {
  if (playerScore >= winCondition) {
      document.querySelector(".btn1").disabled = true;
      document.querySelector(".btn2").disabled = true;
      document.querySelector(".btn3").disabled = true;
      document.querySelector(".message");
      msg.textContent =
          "You have beaten the computer! You are the new champion ;)";
      msgContainer.appendChild(msg);
  }
}



//Actual Code


let playerScore = 0;
let computerScore = 0;
let message;
let winCondition = 5;

const CompContainer = document.querySelector(".displayComputer");
const CompTrack = document.createElement("div");
CompTrack.classList.add('scores');
CompTrack.textContent = computerScore;
CompContainer.appendChild(CompTrack);

const PlayerContainer = document.querySelector(".displayPlayer");
const PlayerTrack = document.createElement("div");
PlayerTrack.classList.add('scores');
PlayerTrack.textContent = playerScore;
PlayerContainer.appendChild(PlayerTrack);

const msgContainer = document.querySelector(".message");
const msg = document.createElement("div");
msg.classList.add('msg');
msg.textContent = "Click any button to play! First to 5 points wins.";
msgContainer.appendChild(msg);

const userChoice = document.querySelector(".myplay");
const user = document.createElement("div");
user.classList.add('pick');

const computerChoice = document.querySelector(".enemyplay");
const computer = document.createElement("div");
computer.classList.add('pick');

const btn1 = document.querySelector(".btn1");
btn1.classList.add('btn');
btn1.addEventListener("click", () => {
    message = playRound("rock", getComputerChoice());
    checkScore(message);
    user.textContent= "🗿"
    userChoice.appendChild(user);
});
btn1.addEventListener("mouseover", () => {
    btn1.classList.add('trans');
})
btn1.addEventListener("mouseout", () => {
    btn1.classList.remove('trans');
})

const btn2 = document.querySelector(".btn2");
btn2.classList.add('btn');
btn2.addEventListener("click", () => {
    message = playRound("paper", getComputerChoice());
    checkScore(message);
    user.textContent= "📄"
    userChoice.appendChild(user);
});
btn2.addEventListener("mouseover", () => {
    btn2.classList.add('trans');
})
btn2.addEventListener("mouseout", () => {
    btn2.classList.remove('trans');
})

const btn3 = document.querySelector(".btn3");
btn3.classList.add('btn');
btn3.addEventListener("click", () => {
    message = playRound("scissors", getComputerChoice());
    checkScore(message);
    user.textContent= "✂️"
    userChoice.appendChild(user);
});
btn3.addEventListener("mouseover", () => {
    btn3.classList.add('trans');
})
btn3.addEventListener("mouseout", () => {
    btn3.classList.remove('trans');
})
