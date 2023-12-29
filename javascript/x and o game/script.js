
const cells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const gameOver = document.querySelector(".game-over");
const resetBtn = document.querySelector(".reset");


let player1 = true;
let count = 0;

//add event listener
resetBtn.addEventListener("click", resetGame);

function startGame() {
    cells.forEach(cell => {
        cell.addEventListener("click", executeGame, { once: true });
    })
}



function executeGame() {
    this.innerText = player1 ? "x" : "o";
    player1 = !player1;
    count++;


    let val1 = cells[0].innerText;
    let val2 = cells[1].innerText;
    let val3 = cells[2].innerText;
    let val4 = cells[3].innerText;
    let val5 = cells[4].innerText;
    let val6 = cells[5].innerText;
    let val7 = cells[6].innerText;
    let val8 = cells[7].innerText;
    let val9 = cells[8].innerText;

    if (
        (val1 != "" && val1 == val2 && val2 == val3) ||
        (val4 != "" && val4 == val5 && val5 == val6) ||
        (val7 != "" && val7 == val8 && val8 == val9) ||
        (val1 != "" && val1 == val4 && val4 == val7) ||
        (val2 != "" && val2 == val5 && val5 == val8) ||
        (val3 != "" && val3 == val6 && val6 == val9) ||
        (val1 != "" && val1 == val5 && val5 == val9) ||
        (val3 != "" && val3 == val5 && val5 == val7)
    ) {

        result.innerText = player1 ? "Player o won" : "player x won";
        return;
    }
    if (count == 9) {
        result.innerText = "It's a tie";
        return;
    }
}
function resetGame() {
    cells.forEach(cell => {
        cell.innerText = "";

    })
    startGame();
    player1 = true;
    count = 0;


}

startGame();


