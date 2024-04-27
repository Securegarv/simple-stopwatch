let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to start or stop the stopwatch
function startStop() {
  if (isRunning) { 
    clearInterval(timer); 
    document.getElementById("startStop").innerText = "Start"; 
    isRunning = false; 
  } else { 
    timer = setInterval(updateDisplay, 1000); 
    document.getElementById("startStop").innerText = "Stop"; // Change button text to "Stop"
    isRunning = true; 
  }
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer); // Stop the timer
  document.getElementById("display").innerText = "00:00:00"; // Reset display to "00:00:00"
  document.getElementById("startStop").innerText = "Start"; // Change button text to "Start"
  isRunning = false; 
  seconds = 0; 
  minutes = 0; 
  hours = 0; 
}

// Function to update the display with formatted time
function updateDisplay() {
  seconds++; 
  if (seconds >= 60) { 
    seconds = 0; 
    minutes++; 
    if (minutes >= 60) { // If minutes reach 60
      minutes = 0; 
      hours++; 
    }
  }

  // Format time with leading zeros
  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("display").innerText = formattedTime; // Update display
}

// Function to add leading zero to single digit numbers
function pad(num) {
  return num < 10 ? "0" + num : num;
}
