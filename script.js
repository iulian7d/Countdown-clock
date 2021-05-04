const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secEl= document.getElementById('sec');

const newHoliday= '26 jan 2022';


function countdown(){
  const newHolidayDate = new Date(newHoliday);
  const currentDate = new Date();

  const totalSeconds =(newHolidayDate - currentDate)/ 1000;
  const days = Math.floor(totalSeconds/ 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600 ) % 24;
  const mins = Math.floor(totalSeconds / 60 ) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secEl.innerHTML = seconds;
}


countdown();

setInterval(countdown, 1000);