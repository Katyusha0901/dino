import { dataStorage } from "../dataStorage.js";

document.addEventListener("keydown", function (event) {
  if (event.code !== "ArrowUp") return;
 
  if (dataStorage.dino.y !== 0) return;

  let startTime = Date.now();

  dinoJumping();

  function dinoJumping() {
    let t = Date.now() - startTime;

    if (dataStorage.dino.isDucking === true) {
      return;
    }

    dataStorage.dino.y = (-1 / 3125) * (t * t) + (8 / 25) * t;

    if (dataStorage.dino.y >= 0) {
      window.requestAnimationFrame(dinoJumping);
    } else {
      dataStorage.dino.y = 0;
    }
  }
});
