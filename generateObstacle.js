import { dataStorage } from "./dataStorage.js";

generateCactus();
setTimeout(generateBird, 1500);

function generateCactus() {
  dataStorage.cactus.x = dataStorage.dino.x + 1500;

  setTimeout(generateCactus, 3500);

  if (dataStorage.dino.x === dataStorage.cactus.x && dataStorage.dino.y < 70) {
    return;
  }
}

function generateBird() {
  dataStorage.bird.x = dataStorage.dino.x + 1700;

  setTimeout(generateBird, 3900);

  if (dataStorage.dino.x === dataStorage.bird.x && dataStorage.dino.y < 70) {
    return;
  }
}

export function showCactus() {
  let newPercentageValue = (dataStorage.cactus.x - dataStorage.dino.x) / 17;

  document.querySelector(".gameBoard__cactus").style.left =
    `${newPercentageValue}` + "%";

  if (dataStorage.cactus.x - dataStorage.dino.x > 20) {
    window.requestAnimationFrame(showCactus);
  }
}

export function showBird() {
  let newPercentageValue = (dataStorage.bird.x - dataStorage.dino.x) / 17;

  document.querySelector(".gameBoard__bird").style.left =
    `${newPercentageValue}` + "%";

  if (dataStorage.bird.x - dataStorage.dino.x > 10) {
    window.requestAnimationFrame(showBird);
  }
}
