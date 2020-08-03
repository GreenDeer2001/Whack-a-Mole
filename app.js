const squares = document.querySelectorAll(".square");
const grid = document.querySelector(".grid");

let score = 0;
let time = 5;



function printMole() {
    squares[Math.floor(Math.random() * 9)].classList.add("mole");
}

function gameEngine(ev) {
    console.log(ev.target)
    if (ev.target.classList.contains("mole")) {
        const SCORE = document.getElementById("score");
        ev.target.classList.remove("mole");

        score++;
        SCORE.textContent = score;


        printMole();
    }
}

function timeToEnd() {
    const TIME = document.getElementById("time-left");
    time--;
    TIME.textContent = time;

    if (time === -1) {
        grid.style.pointerEvents = "none";
        clearInterval(interval);
        alert("Time is over, your score: " + score);
    }

}

squares.forEach((sq) => sq.addEventListener("click", gameEngine.bind(this)))



alert("press ok to start");
printMole();



let interval = setInterval(timeToEnd, 1000);
