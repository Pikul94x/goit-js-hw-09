const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startChangeColor = () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log(timerId);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const stopChangeColor = () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);
