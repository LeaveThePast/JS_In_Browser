const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");

const initialTimeString = timerElement.textContent;

const [hours, minutes, seconds] = initialTimeString.split(":").map(Number);

const initialTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

let timeLeft = initialTimeInSeconds;

let interval;

const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
    )}:${String(seconds).padStart(2, "0")}`;
};

const updateTimer = () => {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.textContent = formatTime(timeLeft);
    } else {
        statusElement.textContent = "Вы победили в конкурсе!";
        clearInterval(interval);

        //const downloadLink = document.createElement('a');
        //downloadLink.href = "ссылка_на_файл.zip";
        //downloadLink.target = "_blank";
        //downloadLink.download = "имя_файла.zip";
        //downloadLink.click();
    }
};

interval = setInterval(updateTimer, 1000);