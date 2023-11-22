import { dataStorage } from "./dataStorage.js";

generateObstacle();

function generateObstacle() {
  dataStorage.cactus.x = dataStorage.dino.x + 1200;
  if (dataStorage.dino.x === dataStorage.cactus.x && dataStorage.dino.y > 70) {
    setTimeout(generateObstacle, 2000);
  } else {
    return;
  }
}

function showObstacle(){
    
}