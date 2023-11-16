import { dataStorage } from "../dataStorage.js";

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowUp":
      dataStorage.dino.direction = "up";
      break;

    case "ArrowDown":
      dataStorage.dino.direction = "down";
      break;
  }
});
