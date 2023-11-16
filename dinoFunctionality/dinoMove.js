import { dataStorage } from "../dataStorage.js";

export function dinoMove() {
  dataStorage.dino.coordinates.x = dataStorage.dino.coordinates.x + 1;
  setTimeout(dinoMove, 100);
}

export function dinoJump() {
  if (dataStorage.dino.direction === "up") {
    if (dataStorage.dino.coordinates.y === 5) {
      dataStorage.dino.direction = "forward";
      while (dataStorage.dino.coordinates.y !== 1) {
        dataStorage.dino.coordinates.y = dataStorage.dino.coordinates.y - 1;
      }
    } else {
      dataStorage.dino.coordinates.y = dataStorage.dino.coordinates.y + 1;
    }
  }
  else if (dataStorage.dino.direction === "down") {
    setTimeout(dinoStandUp, 100);
  }
  setTimeout(dinoJump, 100);
}

function dinoStandUp(){
  dataStorage.dino.direction = 'forward'
}



setTimeout(dinoMove, 100);
setTimeout(dinoJump, 100);
