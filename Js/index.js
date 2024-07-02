


// this is the javascript code that shows the current day and time

const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  let toDay = document.querySelector('#toDay');
  toDay.textContent = `${daylist[day]}`;

  // setting the current time in utc format

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'GMT'
});

const formattedTime = formatter.format(date);
let times = document.querySelector('#times');
times.textContent = `${formattedTime} `;