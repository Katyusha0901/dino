import { dataStorage } from "./dataStorage.js";

window.requestAnimationFrame(gameEnding);

function gameEnding() {
  if (dataStorage.gameStatus === "end") {
    document.querySelector(".gameBoard__dino").style.display = "none";
    document.querySelector(".gameBoard__cactus").style.display = "none";
    document.querySelector(".gameBoard__bird").style.display = "none";
    document.querySelector(".gameStatus").style.display = "flex";
  }

  window.requestAnimationFrame(gameEnding);
}
