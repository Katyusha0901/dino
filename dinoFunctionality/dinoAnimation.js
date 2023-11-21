// let start = Date.now();
// const element = document.querySelector(".gameBoard__dino");

// let done = false;

// export function jump() {
//   let timePassed = Date.now() - start;
//   const count = Math.min(0.1 * timePassed, 30);
//   element.style.bottom = `${30 + count}` + "%";
//   console.log(element.style.bottom);
//   if (count === 30) {
//     down();
//   }

//   if (timePassed < 500) {
//     if (!done) {
//       window.requestAnimationFrame(jump);
//     }
//   }
// }

// export function down() {
//   let timePassed = Date.now() - start;
//   const count = Math.max(0.1 * timePassed, 5);
//   element.style.bottom = `${80 - count}` + "%";
//   if (count === 30) {
//     return;
//   }
// }
