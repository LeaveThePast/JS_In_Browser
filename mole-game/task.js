let score = 0;
let misses = 0;

const whack = (event) => {
    if (!event.isTrusted) return;
    if (event.target.className.includes("hole_has-mole")) {
        score++;
        document.getElementById("dead").textContent = score;
        if (score === 10) {
            alert("Вы победили!");
            resetGame();
        }
    } else {
        misses++;
        document.getElementById("lost").textContent = misses;
        if (misses === 5) {
            alert("Вы проиграли!");
            resetGame();
        }
    }
};

const resetGame = () => {
    score = 0;
    misses = 0;
    document.getElementById("dead").textContent = score;
    document.getElementById("lost").textContent = misses;
};

getHole = (index) => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener("click", whack);
}
