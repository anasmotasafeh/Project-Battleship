import { Ship } from "./ship.js";

export class Gameboard {
  constructor() {
    // const rows = 10;
    // const cols = 10;

    // this.board = Array.from({ length: rows }, (_, row) =>
    //   Array.from({ length: cols }, (_, col) => `${row},${col}`),
    // );
    this.board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => ({
        ship: null,
        attacked: false,
      })),
    );
    this.ships = [];
    this.missedAttacks = 0;
  }

  placeShipAt(x, y, length, direction) {
    const ship = new Ship(length);
    this.ships.push(ship);

    if (direction === "row") {
      for (let i = 0; i < length; i++) {
        this.board[x][y + i].ship = ship;
      }
    } else if (direction === "colum") {
      for (let i = 0; i < length; i++) {
        this.board[x + i][y].ship = ship;
      }
    }
  }

  receiveAttack(x, y) {
    const ship = this.board[x][y].ship;
    if (ship !== null) {
      ship.hit();
      this.board[x][y].attacked = true;
      return "hit";
    }
    this.missedAttacks++;
    this.board[x][y].attacked = true;
    return "missed";
  }

  allShipsSunk() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}
