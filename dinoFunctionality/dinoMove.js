// import { dataStorage } from "../dataStorage.js";

// document.addEventListener("keydown", function (event) {
//   switch (event.code) {
//     case "ArrowUp":
//       dataStorage.dino.direction = "up";

//       break;

//     case "ArrowDown":
//       dataStorage.dino.direction = "down";
//       break;
//   }
// });

// export function dinoMove() {
//   console.log(dataStorage.dino.direction);
//   dataStorage.dino.coordinates.x = dataStorage.dino.coordinates.x + 1;
//   setTimeout(dinoMove, 500);
// }

// export function dinoJump() {
//   if (dataStorage.dino.direction === "up") {
//     if (dataStorage.dino.coordinates.y === 5) {
//       setTimeout(dinoStandUp, 500);
//       while (dataStorage.dino.coordinates.y !== 1) {
//         dataStorage.dino.coordinates.y = dataStorage.dino.coordinates.y - 1;
//       }
//     } else {
//       dataStorage.dino.coordinates.y = dataStorage.dino.coordinates.y + 1;
//     }
//   } else if (dataStorage.dino.direction === "down") {
//     setTimeout(dinoStandUp, 500);
//   }
//   setTimeout(dinoJump, 500);
// }

// function dinoStandUp() {
//   dataStorage.dino.direction = "forward";
// }

// setTimeout(dinoMove, 500);
// setTimeout(dinoJump, 500);
