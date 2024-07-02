


// this is the javascript code that shows the current day and time

const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  let toDay = document.querySelector('#toDay');
  toDay.textContent = `${daylist[day]}`;

  // setting the current time in utc format

function updateUTCTime() {
  const now = new Date();
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;
  document.getElementById('times').innerHTML = currentTime+ ' UTC';
}
updateUTCTime();
setInterval(updateUTCTime, 60000)