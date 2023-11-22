import { dataStorage } from "../dataStorage.js";

let startTime = Date.now();

dinoRunning();

function dinoRunning() {
  let t = Date.now() - startTime;

  dataStorage.dino.x = 0.6 * t;

  if (dataStorage.dino.x === dataStorage.cactus.x && dataStorage.dino.y > 70) {
    window.requestAnimationFrame(dinoRunning);
  }
  return;
  endOfTheGame();
}

function endOfTheGame() {
    
}
