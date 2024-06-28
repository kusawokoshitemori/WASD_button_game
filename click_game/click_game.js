let score = 0;
let next = "W";
const scoreDisplay = document.getElementById("score");

var W_push = document.getElementById("W-Key-Display");
var A_push = document.getElementById("A-Key-Display");
var S_push = document.getElementById("S-Key-Display");
var D_push = document.getElementById("D-Key-Display");

// キーボードのキー押下時のイベントリスナー
document.addEventListener("keydown", function (event) {
  if (event.key === "w" && next === "W") {
    score += 0.25;
    next = "A";
    scoreDisplay.textContent = `スコア: ${score}`;
    W_push.style.color = "initial";
    A_push.style.color = "#f00";
  }
  if (event.key === "a" && next === "A") {
    score += 0.25;
    next = "S";
    scoreDisplay.textContent = `スコア: ${score}`;
    A_push.style.color = "initial";
    S_push.style.color = "#f00";
  }
  if (event.key === "s" && next === "S") {
    score += 0.25;
    next = "D";
    scoreDisplay.textContent = `スコア: ${score}`;
    S_push.style.color = "initial";
    D_push.style.color = "#f00";
  }
  if (event.key === "d" && next === "D") {
    score += 0.25;
    next = "W";
    scoreDisplay.textContent = `スコア: ${score}`;
    D_push.style.color = "initial";
    W_push.style.color = "#f00";
  }
});
