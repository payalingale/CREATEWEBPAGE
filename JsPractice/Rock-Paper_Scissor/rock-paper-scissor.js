let playerMove;
let computerGenerate = Math.random();
let computerMove = "";
let result = "";
let computerResult = "";
let buttonValue = "";
let score = {
  win: 0,
  losses: 0,
  tie: 0,
};
let scoreString = JSON.stringify(score);
let savedScore = JSON.parse(localStorage.getItem("scoreString"));
if (savedScore) {
  score = savedScore;
}

getPlayersMove();
function getPlayersMove() {
  const buttons = document.querySelectorAll(".js-input");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttonValue = button.value;
      console.log("clicked button value", buttonValue);
      playerMove = buttonValue;
      decideComputerMove();
    });
  });
  return playerMove;
}

function decideComputerMove() {
  let computerGenerate = Math.random();
  if (computerGenerate > 0 && computerGenerate <= 1 / 3) {
    computerMove = "Rock";
  } else if (computerGenerate > 1 / 3 && computerGenerate <= 2 / 3) {
    computerMove = "Paper";
  } else if (computerGenerate > 2 / 3 && computerGenerate <= 1) {
    computerMove = "Scissor";
  }
  decideWinner(playerMove, computerMove);
}
function decideWinner(playerMove, computerMove) {
  if (playerMove === "Rock") {
    if (computerMove === "Scissor") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Rock") {
      result = "Tie";
    }
  }
  if (playerMove === "Paper") {
    if (computerMove === "Scissor") {
      result = "You win";
    } else if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "Tie";
    }
  }
  if (playerMove === "Scissor") {
    if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Scissor") {
      result = "Tie";
    }
  }
  console.log(result);
  displayResult(playerMove, computerMove);
}

function displayResult(playerMove, computerMove) {
  if (result === "You win") {
    score.win = score.win + 1;
  } else if (result === "You lose") {
    score.losses = score.losses + 1;
  } else if (result === "Tie") {
    score.tie = score.tie + 1;
  }
  localStorage.setItem("Score", scoreString);

  document.querySelector(
    ".js-result"
  ).innerHTML = `Player chose ${playerMove} and computer chose ${computerMove} 
  ${result} `;
  document.querySelector(
    ".score"
  ).innerHTML = `<p>Win:${score.win},Losses:${score.losses},Tie:${score.tie}</p>`;
}
