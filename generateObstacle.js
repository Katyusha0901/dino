import { dataStorage } from "./dataStorage.js";

generateObstacle();

function generateObstacle() {
  dataStorage.cactus.x = dataStorage.dino.x + 1200;
  
  setTimeout(generateObstacle, 2000);
}
