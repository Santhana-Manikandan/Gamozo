let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;
const clickSound = document.getElementById("clickSound");
boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      checkWin();
      checkDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  const bg = document.querySelector(".bg");
  if (turn === "X") {
    turn = "O";
    bg.style.transform = "translateX(100%)";
  } else {
    turn = "X";
    bg.style.transform = "translateX(0%)";
  }
}
function playWinSound() {
  const audio = document.getElementById("winSound");
  audio.currentTime = 0;
  audio.play();
}
function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function checkWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let v0 = boxes[winConditions[i][0]].innerHTML;
    let v1 = boxes[winConditions[i][1]].innerHTML;
    let v2 = boxes[winConditions[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = turn + " win";
      document.querySelector("#results").style.display = "inline-block";

      document.querySelector("#play-again").style.display = "inline-block";

      for (j = 0; j < 3; j++) {
        boxes[winConditions[i][j]].style.backgroundColor = "#bdcebe";
        boxes[winConditions[i][j]].style.color = "darkgreen";
      }
      playWinSound();
      showConfetti();
    }
  }
}
function PlayoutSound() {
  const out = document.getElementById("drawSound");
  out.currentTime = 0;
  out.play();
}

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });

    if (isDraw) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = "Draw";
      document.querySelector("#results").style.display = "inline-block";

      document.querySelector("#play-again").style.display = "inline-block";
      PlayoutSound();
    }
  }
}
function setTurnToX() {
  turn = "X";
  document.querySelector(".bg").style.transform = "translateX(0%)";
}

document.querySelector("#play-again").addEventListener("click", () => {
  isGameOver = false;
  setTurnToX();
  document.querySelector("#results").innerHTML = "";
  document.querySelector("#play-again").style.display = "none";

  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "black";
  });
});
document.querySelector("#reset-game").addEventListener("click", () => {
  isGameOver = false;
  setTurnToX();

  document.querySelector("#results").innerHTML = "";
  document.querySelector("#play-again").style.display = "none";

  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "black";
  });
});
