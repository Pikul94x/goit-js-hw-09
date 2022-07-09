import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const dateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let timerId = null;
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] > new Date()) {
      btnStart.disabled = false;
      Notiflix.Notify.success('Please press "START" to proceed');
      dateTime.dataset.time = selectedDates[0].getTime();
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(dateTime, options);

function appUpdate() {
  timerId = setInterval(() => {
    btnStart.disabled = true;
    const currentTime = new Date().getTime();
    let countTime = Number(dateTime.dataset.time);
    const result = countTime - currentTime;

    const days = Math.floor(result / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((result % (1000 * 60)) / 1000);

    dataDays.innerHTML = days < 10 ? '0' + days : days;
    dataHours.innerHTML = hours < 10 ? '0' + hours : hours;
    dataMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    dataSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    if (result < 0) {
      clearInterval(timerId);
      dataDays.innerHTML = '00';
      dataHours.innerHTML = '00';
      dataMinutes.innerHTML = '00';
      dataSeconds.innerHTML = '00';
      Notiflix.Notify.info('Countdown stop!');
    }
  }, 1000);
}
btnStart.addEventListener('click', appUpdate);

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// const buttonStart = document.querySelector('button[data-start]');
// const days = document.querySelector('span[data-days]');
// const hours = document.querySelector('span[data-hours]');
// const minutes = document.querySelector('span[data-minutes]');
// const seconds = document.querySelector('span[data-seconds]');

// buttonStart.disabled = true;

// let selectedDate = null;
// let currentDate = null;
// let remainingTime = null;
// let currentValue = '';

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const date = new Date();
//     if (selectedDates[0].getTime() <= date.getTime()) {
//       alert('Please choose a date in the future');
//     } else {
//       buttonStart.disabled = false;
//       selectedDate = selectedDates[0];
//       currentDate = date;
//     }
//   },
// };

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }

// const addLeadingZero = value => {
//   return (currentValue = value.toString().padStart(2, 0));
// };

// function timeCounter() {
//   let time = selectedDate.getTime() - currentDate.getTime();
//   remainingTime = setInterval(() => {
//     time -= 1000;
//     if (time <= 200) {
//       clearInterval(remainingTime);
//     } else {
//       let remaining = convertMs(time);
//       days.innerHTML = addLeadingZero(remaining.days);
//       hours.innerHTML = addLeadingZero(remaining.hours);
//       minutes.innerHTML = addLeadingZero(remaining.minutes);
//       seconds.innerHTML = addLeadingZero(remaining.seconds);
//       buttonStart.disabled = true;
//     }
//   }, 1000);
// }

// flatpickr('#datetime-picker', options);

// buttonStart.addEventListener('click', timeCounter);
