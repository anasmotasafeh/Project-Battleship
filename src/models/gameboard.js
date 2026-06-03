import { Ship } from "./ship";

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
      return "hit";
    }
    return "missed";
  }
}
