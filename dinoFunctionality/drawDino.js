import { dataStorage } from "../dataStorage.js";

drawDino();

function drawDino() {
  let newPercentageValue = 30 + dataStorage.dino.y * 0.5;

  document.querySelector(".gameBoard__dino").style.bottom =
    `${newPercentageValue}` + "%";

  window.requestAnimationFrame(drawDino);
}
