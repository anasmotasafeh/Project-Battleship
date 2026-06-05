import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(type, showShips) {
    this.type = type;
    this.showShips = showShips;
    this.gameboard = new Gameboard();
  }
}
