import { Ship } from "./ship";

test("ship stors length", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});

test("number of hits", () => {
  const ship = new Ship(2);
  expect(ship.hits).toBe(0);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});

test("is sunk", () => {
  const ship = new Ship(2);
  expect(ship.sunk).toBe(false);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  expect(ship.sunk).toBe(true);
});
