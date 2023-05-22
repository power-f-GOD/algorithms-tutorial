/**
 * zipper lists
   Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

   Do this in-place, by mutating the original Nodes.

   You may assume that both input lists are non-empty.

   a x
   b y
   c z

   

   

   head1Current = a;
   head1Next = a.next;
   head2Current = x;
   head2Next = x.next;
   current = a;
   current.next = 

 */

export class ListNode<T = string> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export const zipperLists = (head1: ListNode, head2: ListNode) => {
  // todo
  let head1Current: ListNode | null = head1;
  let head1Next: ListNode | null = head1.next;
  let head2Current: ListNode | null = head2;
  let head2Next: ListNode | null = head2.next;
  let current: ListNode | null = head1;

  while (head1Current || head2Current) {
    head1.next = console.log({ current });
  }

  return current;
};
