import { dataStorage } from "./dataStorage.js";
import { showCactus } from "./generateObstacle.js";
import { showBird } from "./generateObstacle.js";

showCactus();
setTimeout(showBird, 1500);
