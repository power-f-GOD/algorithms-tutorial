import { shortestPath } from "../problems/shortest-path";

test("shortestPath returns the length of the shortest path between nodes A and B", () => {
  expect(
    shortestPath(
      [
        ["w", "x"],
        ["x", "y"],
        ["z", "y"],
        ["z", "v"],
        ["w", "v"],
      ],
      "w",
      "z"
    )
  ).toEqual(2);

  expect(
    shortestPath(
      [
        ["w", "x"],
        ["x", "y"],
        ["z", "y"],
        ["z", "v"],
        ["w", "v"],
      ],
      "y",
      "x"
    )
  ).toEqual(1);

  expect(
    shortestPath(
      [
        ["a", "c"],
        ["a", "b"],
        ["c", "b"],
        ["c", "d"],
        ["b", "d"],
        ["e", "d"],
        ["g", "f"],
      ],
      "a",
      "e"
    )
  ).toEqual(3);

  expect(
    shortestPath(
      [
        ["a", "c"],
        ["a", "b"],
        ["c", "b"],
        ["c", "d"],
        ["b", "d"],
        ["e", "d"],
        ["g", "f"],
      ],
      "a",
      "e"
    )
  ).toEqual(3);
});
