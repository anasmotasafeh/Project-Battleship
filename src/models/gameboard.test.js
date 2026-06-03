import { Gameboard } from "./gameboard";
// import { Ship } from "./ship";

test("place ship at given coordinates", () => {
  const gameboard = new Gameboard();
  expect(gameboard.board[0][0].ship).toBeNull();
  // const ship = new Ship(3)
  gameboard.placeShipAt(0, 0, 2, "colum");
  expect(gameboard.board[0][0].ship).not.toBeNull();
  expect(gameboard.board[1][0].ship).not.toBeNull();
  expect(gameboard.board[0][1].ship).toBeNull();
  expect(gameboard.board[2][0].ship).toBeNull();
});

test("receive attack", () => {
  const gameboard = new Gameboard();

  gameboard.placeShipAt(0, 0, 2, "colum");

  expect(gameboard.receiveAttack(0, 0)).toBe("hit");
  expect(gameboard.receiveAttack(0, 1)).toBe("missed");
  expect(gameboard.board[0][0].ship.isSunk()).toBe(false);

  expect(gameboard.receiveAttack(1, 0)).toBe("hit");
  expect(gameboard.board[0][0].ship.isSunk()).toBe(true);

  gameboard.placeShipAt(3, 3, 3, "row");

  expect(gameboard.receiveAttack(3, 3)).toBe("hit");
  expect(gameboard.receiveAttack(4, 3)).toBe("missed");
  expect(gameboard.board[3][3].ship.isSunk()).toBe(false);

  expect(gameboard.receiveAttack(3, 5)).toBe("hit");
  expect(gameboard.board[3][3].ship.isSunk()).toBe(false);

  expect(gameboard.receiveAttack(3, 4)).toBe("hit");
  expect(gameboard.board[3][3].ship.isSunk()).toBe(true);
});
