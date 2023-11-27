import { dataStorage } from "./dataStorage.js";

generateCactus();
setTimeout(generateBird, 2500);

function generateCactus() {
  dataStorage.cactus.x = dataStorage.dino.x + 1400;
  let startTime = Date.now();

  showCactus();

  function showCactus() {
    let t = Date.now() - startTime;
    let newPercentageValue = -0.02 * t + 90;

    document.querySelector(".gameBoard__cactus").style.left =
      `${newPercentageValue}` + "%";

    if (
      newPercentageValue < 20.5 &&
      newPercentageValue > 19.9 &&
      dataStorage.dino.y < 65
    ) {
      dataStorage.gameStatus = "end";
    } else {
      window.requestAnimationFrame(showCactus);
    }
  }

  setTimeout(generateCactus, 4300);
}

function generateBird() {
  dataStorage.bird.x = dataStorage.dino.x + 1400;
  let startTime = Date.now();

  showBird();

  function showBird() {
    let t = Date.now() - startTime;
    let newPercentageValue = -0.02 * t + 90;

    document.querySelector(".gameBoard__bird").style.left =
      `${newPercentageValue}` + "%";

    if (
      newPercentageValue < 21 &&
      newPercentageValue > 19 &&
      dataStorage.dino.isDucking === false
    ) {
      dataStorage.gameStatus = "end";
    } else {
      setTimeout(window.requestAnimationFrame(showBird), 500);
    }
  }

  setTimeout(generateBird, 4300);
}
