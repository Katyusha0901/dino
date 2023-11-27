import { dataStorage } from "../dataStorage.js";

let startTime = Date.now();

dinoRunning();

function dinoRunning() {
  let t = Date.now() - startTime;

  dataStorage.dino.x = 0.4 * t;

  if (dataStorage.gameStatus === "go") {
    window.requestAnimationFrame(dinoRunning);
  }
  return;
}
