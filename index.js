const c = document.querySelector("#c");
const context = c.getContext("2d");

const numberArray = [9, 11, 17, 6, 5, 7, 12, 22];
let number = 11;

setInterval(() => {
  context.clearRect(0, 0, 880, 840);
  number = numberArray[Math.floor(Math.random() * numberArray.length)];

  console.log(number);

  for (let x = 0; x < 222; x++) {
    for (let y = 0; y < 210; y++) {
      if ((x ^ y) % number) {
        context.fillRect(x * 4, y * 4, 4, 4);
      }
    }
  }
}, 3000);
