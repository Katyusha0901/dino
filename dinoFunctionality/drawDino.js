import { dataStorage } from "../dataStorage.js";

drawDino();

function drawDino() {
  let newPercentageValue = 30 + dataStorage.dino.y * 0.5;

  document.querySelector(".gameBoard__dino").style.bottom =
    `${newPercentageValue}` + "%";

  if (dataStorage.dino.isDucking === false) {
    document.querySelector(".gameBoard__dino").style.backgroundImage =
      "url(../images/dino.png)";
  } else {
    document.querySelector(".gameBoard__dino").style.backgroundImage =
      "url(/images/downdino.png)";
    document.querySelector(".gameBoard__dino").style.bottom = 26 + "%";
  }

  window.requestAnimationFrame(drawDino);
}
