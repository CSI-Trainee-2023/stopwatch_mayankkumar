let isRunning = false;
let startTime = 0;
let lapStartTime = 0;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
        document.getElementById("lapReset").textContent = "Reset";
        isRunning = false;
    } else {
        startTime = Date.now() - (lapStartTime > 0 ? lapStartTime : startTime);
        interval = setInterval(updateDisplay, 100);
        document.getElementById("startStop").textContent = "Stop";
        document.getElementById("lapReset").textContent = "Lap";
        isRunning = true;
    }
}

