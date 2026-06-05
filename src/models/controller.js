import { createPlayerWithDefultBoards } from "./playerFactory.js";
import { renderBoards } from "./ui.js";
let player1;
let player2;
export let currentPlayer;
let defender;
let turnActive;

export function initGame() {
  player1 = createPlayerWithDefultBoards("player", true);
  player2 = createPlayerWithDefultBoards("computer", false);

  renderBoards(player1, player2);
  currentPlayer = player1;
  defender = player2;
  turnActive = false;
}

export function handleAttack(x, y) {
  // defender;
  // currentPlayer === player1 ? (defender = player2) : (defender = player1);

  const attack = defender.gameboard.receiveAttack(x, y);
  renderBoards(player1, player2);

  if (attack === "missed") {
    switchplayers();
  }
  if (currentPlayer === player2) {
    turnActive = true;
    setTimeout(computerAttack, 900);
  }
}

function switchplayers() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    defender = player1;
  } else {
    currentPlayer = player1;
    defender = player2;
  }
}

function computerAttack() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  while (defender.gameboard.board[x][y].attacked === true) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  }
  turnActive = false;
  handleAttack(x, y);
}
