const cell = document.querySelectorAll('.cell');
const player1ScoreSpan = document.querySelector('.player1Score');
const player2ScoreSpan = document.querySelector('.player2Score');
const restartBtn = document.querySelector('.restart');
 
const winCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
]
 
let player1 = [];
let player2 = [];
 
let score = {
    player1: 0,
    player2: 0,
}
 
let flag = true;
 
var player1Name = window. prompt("Име на първия играч: ");
var player2Name = window. prompt("Име на втория играч: ");

 
for(let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if(flag === true) {
            if(cell[i].innerHTML === "") {
                addCellsPlayer1(i);
            }
 
        } else {
            if(cell[i].innerHTML === "") {
                addCellsPlayer2(i);
            }
        }
        checkWinner();
        checkTie();
    })
}
 
function addCellsPlayer1(i) {
    cell[i].innerHTML = "X";
    player1.push(i);
    flag = false;
}
function addCellsPlayer2(i) {
    cell[i].innerHTML = "O";
    player2.push(i);
    flag = true;
}

function typeNames() {

}

function checkTie() {
    let isFull;

    for(let i = 0; i < cell.length; i++) {
        if(cell[i].innerHTML === "X" || cell[i].innerHTML === "O") {
            isFull = true;
        }
        else if(cell[i].innerHTML === "") {
            isFull = false;
            break;
        }
    }

    if(isFull === true) {
        alert("Равен резултат!");
        clearField();
    }
    else if(isFull === false) {
       return; 
    }
}

function checkWinner() {
    winCombinations.find((item) => {
        if(item.filter((i) => player1.includes(i)).length === 3) {
            alert(player1Name + " печели!");
            score.player1++;
            drawScore();
            clearField();
            return item;
        } else if(item.filter((i) => player2.includes(i)).length === 3) {
            alert(player2Name + " печели!")
            score.player2++;
            drawScore();
            clearField();
        }
        return;
    })
}
 
function drawScore() {
    player1ScoreSpan.innerHTML = player1Name + "<b> (X):</b> " + score.player1 + "т.";
    player2ScoreSpan.innerHTML = player2Name + "<b> (O):</b> " + score.player2 + "т.";
}
drawScore();
 
function clearField() {
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;
}
 
restartBtn.addEventListener('click', () => {
    clearField();
})