import { dataStorage } from "../dataStorage.js";
document.addEventListener("keydown", function (event) {
  if (event.code !== "ArrowUp") return;
  let start = Date.now();
  dinoJumping();
  function dinoJumping() {
    let t = Date.now() - start;
    dataStorage.dino.y = (-1 / 3125) * (t * t) + (8 / 25) * t;
    if (t < 1000) {
      window.requestAnimationFrame(dinoJumping);
    }
  }
});
