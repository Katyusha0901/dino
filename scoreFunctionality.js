import { dataStorage } from "./dataStorage.js";

scoreFunctionality();

function scoreFunctionality() {
  document.querySelector(".gameBoard__score").textContent = `${Math.round(
    dataStorage.dino.x
  )}`;
  
  window.requestAnimationFrame(scoreFunctionality);
}
