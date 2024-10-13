const squares = document.querySelectorAll(".square");
const playerMsg = document.getElementById("player");
const resetBtn = document.querySelector(".reset");
let activePlayer = 1;
const modal = document.querySelector('.outline');
const winMsg = document.getElementById("winner-message");



resetBtn.addEventListener('click', () => {
    activePlayer = 1;
    initialBoard = ["", "", "", "", "", "", "", "", ""]; // Reset the board

    squares.forEach(square => {
        square.textContent = ""; // Clear the squares
    });

    modal.style.display = "none"; // Hide the modal
    playerMsg.innerText = "Player 1"; // Reset the player message

}
)





playerMsg.addEventListener('click', () => {
    activePlayer = 1
    initialBoard = ["", "", "",
        "", "", "",
        "", "", "",];
    resetBtn.style.display = "none";
})

let initialBoard = [
    "", "", "",
    "", "", "",
    "", "", "",
];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

squares.forEach((square, i) => square.addEventListener("click", () => {
    if (square.textContent === "") {
        square.textContent = activePlayer === 1 ? "X" : "O"
        activePlayer = activePlayer === 1 ? 2 : 1;
        initialBoard[i] = square.textContent

    }
    const winner = checkWinner(initialBoard);
    if (winner) {
        console.log(`${winner} wins!`);
        modal.style.display = "flex";
        winMsg.textContent = `${winner === 'x' ? "player 1" : "player 2"} won the game`


    } else if (initialBoard.every(cell => cell !== "")) {
        modal.style.display = "flex";
        winMsg.textContent = "It's a draw!";
    }
    playerMsg.innerText = activePlayer === 1 ? "Player 1" : "Player 2";

}))

function checkWinner(board) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];


        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}
