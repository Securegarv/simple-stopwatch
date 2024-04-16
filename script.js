let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
    isRunning = false;
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStop").innerText = "Stop";
    isRunning = true;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStop").innerText = "Start";
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
}

function updateDisplay() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("display").innerText = formattedTime;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}
