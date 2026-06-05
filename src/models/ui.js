// import { createPlayerWithDefultBoards } from "./controller";
import { handleAttack } from "./controller.js";
// import { currentPlayer } from "./controller.js";

const board1Ele = document.querySelector(".board1");
const board2Ele = document.querySelector(".board2");

// board1Ele.addEventListener("click", (e) => {
//   if (currentPlayer === "player2") {
//     handleAttack(Number(e.target.dataset.x), Number(e.target.dataset.y));
//   }
// });

board2Ele.addEventListener("click", (e) => {
  // if (currentPlayer === "player1") {
  handleAttack(Number(e.target.dataset.x), Number(e.target.dataset.y));
  // }
});
export function renderBoards(player1, player2) {
  renderBoard(player1, board1Ele);
  renderBoard(player2, board2Ele);
}

function renderBoard(player, boardEle) {
  const showShips = player.showShips;

  boardEle.innerHTML = "";
  player.gameboard.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      const cellEle = document.createElement("div");
      cellEle.classList.add("cell");

      if (showShips && cell.ship !== null) cellEle.classList.add("ship");
      if (cell.ship !== null && cell.attacked === true)
        cellEle.classList.add("hitted");
      else if (cell.ship === null && cell.attacked === true)
        cellEle.classList.add("attacked");

      cellEle.dataset.x = x;
      cellEle.dataset.y = y;

      boardEle.appendChild(cellEle);
    });
  });
}
