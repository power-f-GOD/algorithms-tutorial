import { ListNode, zipperLists } from "../problems";

test("zipperList should zipper two linked lists together into one single linked list by alternating nodes", () => {
  const a = new ListNode("a");
  const b = new ListNode("b");
  const c = new ListNode("c");
  a.next = b;
  b.next = c;
  // a -> b -> c

  const x = new ListNode("x");
  const y = new ListNode("y");
  const z = new ListNode("z");
  x.next = y;
  y.next = z;

  console.log(zipperLists(a, x));
  expect(zipperLists(a, x)).toBeTruthy();
});
