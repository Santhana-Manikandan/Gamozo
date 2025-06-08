const choices = ["Rock", "Paper", "Scissors"];
const images = {
  Rock: "rock.png",
  Paper: "paper.png",
  Scissors: "scissors.png",
};

let wins = 0,
  losses = 0,
  draws = 0;

function play(userChoice) {
  document.getElementById("clickSound").play();
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById(
    "computer-picked"
  ).innerHTML = `<img src="${images[computerChoice]}" alt="${computerChoice}" class="picked-img">`;
  const allChoices = document.querySelectorAll(".choices img");
  allChoices.forEach((img) => img.classList.remove("selected"));
  allChoices.forEach((img) => {
    if (img.alt.toLowerCase() === userChoice.toLowerCase()) {
      img.classList.add("selected");
    }
  });

  let result;
  if (userChoice === computerChoice) {
    result = "It's a Draw!";
    draws++;
    document.body.style.background = "#e9e1cf";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You Win!";
    wins++;
    document.body.style.background =
      "linear-gradient(to right, #d0f0d0, #e9e1cf)";
  } else {
    result = "You Lose!";
    losses++;
    document.body.style.background =
      "linear-gradient(to right,  #f8dada, #e9e1cf)";
  }

  document.getElementById("result").textContent = result;
  document.getElementById(
    "score"
  ).textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
}

function resetGame() {
  wins = 0;
  losses = 0;
  draws = 0;
  document.getElementById("user-picked").innerHTML = "";
  document.getElementById(
    "computer-picked"
  ).innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="?" class="placeholder" width="100">`;
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent =
    "Wins: 0 | Losses: 0 | Draws: 0";
  const allChoices = document.querySelectorAll(".choices img");
  allChoices.forEach((img) => img.classList.remove("selected"));
  document.body.style.background = "#e9e1cf";
}
