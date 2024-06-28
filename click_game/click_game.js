let score = 0;
let next = "W";
const scoreDisplay = document.getElementById("score");

// キーボードのキー押下時のイベントリスナー
document.addEventListener("keydown", function (event) {
  if (event.key === "w" && next === "W") {
    score += 0.25;
    next = "A";
    scoreDisplay.textContent = `スコア: ${score}`;

    //やってみた
    documents.getElementById("W-Key-Display").color = "red";

    // 他のキーに対する処理...
  }
  //すぺーーーす
  if (event.key === "a" && next === "A") {
    score += 0.25;
    next = "S";
    scoreDisplay.textContent = `スコア: ${score}`;
  }
  if (event.key === "s" && next === "S") {
    score += 0.25;
    next = "D";
    scoreDisplay.textContent = `スコア: ${score}`;
  }
  if (event.key === "d" && next === "D") {
    score += 0.25;
    next = "W";
    scoreDisplay.textContent = `スコア: ${score}`;
  }
});
