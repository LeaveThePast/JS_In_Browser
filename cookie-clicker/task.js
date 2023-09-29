const clickerCounterElement = document.getElementById("clicker__counter");
const clickerElement = document.getElementById("cookie");
const clickerSpeedCounterElement = document.getElementById(
    "clicker__speed__counter"
);

let clickerSpeedCounter = 0;
let clickerLastClickTime = 0;
let clickerCounter = 0;

const clickerCounterUpdater = () => {
    clickerCounter++;
    clickerCounterElement.textContent = clickerCounter;
    makeCoockieMassive();
    setTimeout(makeCoockieShmoll, 100);
};

const makeCoockieMassive = () => {
    clickerElement.width = 250;
    clickerElement.height = 250;
};

const makeCoockieShmoll = () => {
    clickerElement.width = 200;
    clickerElement.height = 200;
};

const clickerSpeedUpdater = () => {
    const now = Date.now();
    const clickInterval = now - clickerLastClickTime;
    const clicksPerSecond = clickInterval > 0 ? 1000 / clickInterval : 0;
    clickerSpeedCounter = clicksPerSecond.toFixed(2);
    clickerSpeedCounterElement.textContent = clickerSpeedCounter;
    clickerLastClickTime = now;
};

clickerElement.onclick = () => {
    clickerCounterUpdater();
    clickerSpeedUpdater();
};