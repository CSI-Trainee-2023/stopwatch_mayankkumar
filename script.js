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

        function formatTime(milliseconds) {
            const minutes = Math.floor(milliseconds / 60000);
            const seconds = Math.floor((milliseconds % 60000) / 1000);
            const tenths = Math.floor((milliseconds % 1000) / 100);
            return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}.${tenths}`;
        }
 document.addEventListener("keydown", e => { if (e.ctrlKey && e.key.toLowerCase() === "s") { startStop() } });
document.addEventListener("keydown", e => { if (e.ctrlKey && e.key.toLowerCase() === "x") { startStop() } });
document.addEventListener("keydown", e => { if (e.ctrlKey && e.key.toLowerCase() === "r") { lapReset() } });
document.addEventListener("keydown", e => { if (e.ctrlKey && e.key.toLowerCase() === "l") { lapReset() } });
document.addEventListener("keydown", e => { if (e.ctrlKey && e.key.toLowerCase() === "p") { startStop() } });