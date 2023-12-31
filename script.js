let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timer');
let body = document.body;

function startTimer() {
   resetTimer(); 

  let hours = parseInt(hoursInput.value, 10) || 0;
  let minutes = parseInt(minutesInput.value, 10) || 0;
  let seconds = parseInt(secondsInput.value, 10) || 0;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    alert('zadej cas lol');
    return;
  }

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  timer = setInterval(function () {
    let hoursDisplay = Math.floor(totalSeconds / 3600);
    let minutesDisplay = Math.floor((totalSeconds % 3600) / 60);
    let secondsDisplay = totalSeconds % 60;

    timerDisplay.textContent = `${hoursDisplay.toString().padStart(2, '0')}:${minutesDisplay.toString().padStart(2, '0')}:${secondsDisplay.toString().padStart(2, '0')}`;

    let hexColor = getHexColor(hoursDisplay, minutesDisplay, secondsDisplay);
    body.style.backgroundColor = `#${hexColor}`;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert('Timer is up!');
      body.style.backgroundColor = '';
    } else {
      totalSeconds--;
    }
  }, 1000);
}

function  resetTimer() {
  clearInterval(timer);
  timerDisplay.textContent = '00:00:00';
  body.style.backgroundColor = ''; 
}
function getOf(){
   const hour = new Date();
   hour.getHours();
   const min = new Date();
   min.getMinutes();
   const sec = new Date();
   sec.getSeconds();
    return getHexColor2(hour.getHours(), min.getMinutes(), sec.getSeconds());    
}

function getHexColor2(hour, min, sec) {
    let hexHours2 = hour.toString(16).padStart(2, '0');
    let hexMinutes2 = min.toString(16).padStart(2, '0');
    let hexSeconds2 = sec.toString(16).padStart(2, '0');
  
    return `${hexHours2}${hexMinutes2}${hexSeconds2}`;


    
}

document.getElementById('getof').addEventListener('click', function () {
  resetTimer();
});


 function getHexColor(hours, min, sec) {
   let hexHours = hours.toString(16).padStart(2, '0');
  let hexMinutes = minutes.toString(16).padStart(2, '0');
  let hexSeconds = seconds.toString(16).padStart(2, '0');

  return `${hexHours}${hexMinutes}${hexSeconds}`;
 }

