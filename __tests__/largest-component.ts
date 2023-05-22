import { largestComponent } from "../problems";

test("largestComponent returns the size of the largest connected component in a graph", () => {
  expect(
    largestComponent({
      0: ["8", "1", "5"],
      1: ["0"],
      5: ["0", "8"],
      8: ["0", "5"],
      2: ["3", "4"],
      3: ["2", "4"],
      4: ["3", "2"],
    })
  ).toEqual(4);

  expect(
    largestComponent({
      1: ["2"],
      2: ["1", "8"],
      6: ["7"],
      9: ["8"],
      7: ["6", "8"],
      8: ["9", "7", "2"],
    })
  ).toEqual(6);

  expect(
    largestComponent({
      3: [],
      4: ["6"],
      6: ["4", "5", "7", "8"],
      8: ["6"],
      7: ["6"],
      5: ["6"],
      1: ["2"],
      2: ["1"],
    })
  ).toEqual(5);

  expect(largestComponent({})).toEqual(0);

  expect(
    largestComponent({
      0: ["4", "7"],
      1: [],
      2: [],
      3: ["6"],
      4: ["0"],
      6: ["3"],
      7: ["0"],
      8: [],
    })
  ).toEqual(3);
});
