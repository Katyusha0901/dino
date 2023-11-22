import { dataStorage } from "../dataStorage.js";

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown") dataStorage.dino.isDucking = true;
});

document.addEventListener("keyup", function (event) {
  if (event.code === "ArrowDown") dataStorage.dino.isDucking = false;
});
