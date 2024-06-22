let UserScore = 0;
let ComputerScore = 0;
let userScorepara = document.querySelector("#userScore");
let commputerScorepara = document.querySelector("#Com-Score");
let WinnigMsg = document.querySelector("#winning-status");
let UserChoice = document.querySelectorAll(".choice");

const GenComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = (eachBoxId, computerChoice) => {
  WinnigMsg.innerText = `Game Draw ! No One Win`;
  WinnigMsg.style.color = "black";
};

const showWinner = (userwin, eachBoxId, computerChoice) => {
  if (userwin) {
    UserScore++;
    userScorepara.innerText = UserScore;
    WinnigMsg.innerText = `You Win😊 your Choice is ${eachBoxId} beats ${computerChoice}`;
    WinnigMsg.style.color = "red";
  } else {
    ComputerScore++;
    commputerScorepara.innerText = ComputerScore;
    WinnigMsg.innerText = `You Loose😔 Computer Choice is ${computerChoice} beats ${eachBoxId}`;
  }
  WinnigMsg.style.color = "#FFD449";
};

const playGame = (eachBoxId) => {
  const computerChoice = GenComputerChoice();

  if (eachBoxId === computerChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (eachBoxId === "rock") {
      userwin = computerChoice === "paper" ? false : true;
    } else if (eachBoxId === "paper") {
      userwin = computerChoice === "scissor" ? false : true;
    } else {
      userwin = computerChoice === "rock" ? false : true;
    }
    showWinner(userwin, eachBoxId, computerChoice);
  }
};
UserChoice.forEach((choice) => {
  choice.addEventListener("click", function () {
    let eachBoxId = choice.getAttribute("id");
    playGame(eachBoxId);
  });
});
