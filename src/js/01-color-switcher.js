const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
});

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const startBtn = document.querySelector('button[data-start]');
// const stopBtn = document.querySelector('button[data-stop]');
// const body = document.querySelector('body');

// stopBtn.disabled = true;
// let timeId = null;

// startBtn.addEventListener('click', () => {
//   timeId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
// });
// stopBtn.addEventListener('click', () => {
//   clearInterval(timeId);
//   startBtn.disabled = false;
//   stopBtn.disabled = true;
// });
