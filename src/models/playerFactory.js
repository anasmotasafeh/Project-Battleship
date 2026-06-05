import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

export function createPlayerWithDefultBoards(playerType, showShips) {
  const player = new Player(playerType, showShips);
  player.gameboard = new Gameboard();

  player.gameboard.placeShipAt(0, 0, 2, "colum");
  player.gameboard.placeShipAt(0, 2, 1, "colum");
  player.gameboard.placeShipAt(4, 0, 4, "colum");
  player.gameboard.placeShipAt(5, 2, 1, "colum");
  player.gameboard.placeShipAt(8, 3, 1, "colum");
  player.gameboard.placeShipAt(0, 7, 2, "row");
  player.gameboard.placeShipAt(2, 8, 2, "row");
  player.gameboard.placeShipAt(3, 6, 3, "colum");
  player.gameboard.placeShipAt(7, 9, 3, "colum");

  return player;
}
