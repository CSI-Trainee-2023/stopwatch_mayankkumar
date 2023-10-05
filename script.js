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
    function lapReset() {
        if (isRunning) {
            const lapTime = Date.now() - lapStartTime;
            lapStartTime = Date.now();
            const lapDisplay = formatTime(lapTime);
            const lapItem = document.createElement("p");
            lapItem.textContent = lapDisplay;
            document.getElementById("laps").appendChild(lapItem);
        } else {
            clearInterval(interval);
            document.getElementById("display").textContent = "0:00.0";
            document.getElementById("startStop").textContent = "Start";
            document.getElementById("lapReset").textContent = "Lap";
            isRunning = false;
            startTime = 0;
            lapStartTime = 0;
            document.getElementById("laps").innerHTML = "";
        }
    }
    function updateDisplay() {
        const currentTime = Date.now() - startTime;
        document.getElementById("display").textContent = formatTime(currentTime);
    }

