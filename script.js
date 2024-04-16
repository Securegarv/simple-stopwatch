// Declare variables to track time and status
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to start or stop the stopwatch
function startStop() {
  if (isRunning) { // If stopwatch is running
    clearInterval(timer); // Stop the timer
    document.getElementById("startStop").innerText = "Start"; // Change button text to "Start"
    isRunning = false; // Update status to not running
  } else { // If stopwatch is not running
    timer = setInterval(updateDisplay, 1000); // Start the timer
    document.getElementById("startStop").innerText = "Stop"; // Change button text to "Stop"
    isRunning = true; // Update status to running
  }
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer); // Stop the timer
  document.getElementById("display").innerText = "00:00:00"; // Reset display to "00:00:00"
  document.getElementById("startStop").innerText = "Start"; // Change button text to "Start"
  isRunning = false; // Update status to not running
  seconds = 0; // Reset seconds
  minutes = 0; // Reset minutes
  hours = 0; // Reset hours
}

// Function to update the display with formatted time
function updateDisplay() {
  seconds++; // Increment seconds
  if (seconds >= 60) { // If seconds reach 60
    seconds = 0; // Reset seconds
    minutes++; // Increment minutes
    if (minutes >= 60) { // If minutes reach 60
      minutes = 0; // Reset minutes
      hours++; // Increment hours
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
