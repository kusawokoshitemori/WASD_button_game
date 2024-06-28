let score = 0;
const scoreDisplay = document.getElementById("score");

// キーボードのキー押下時のイベントリスナー
document.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    score++;
    scoreDisplay.textContent = `スコア: ${score}`;
    console.log("w push");
  }
});
