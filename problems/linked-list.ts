/*
You are given the head of a linked list and a target number. 
Your goal is to remove all the nodes in the list whose value equals 
that of the target.

Example
Input: head = [1,2,6,3,4,5,6], target = 6
Output: [1,2,3,4,5]

Definition for singly-linked list.
  public class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
  }

*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode | null = null;

  constructor(node: ListNode | null) {
    this.head = node;
  }

  add(value: number) {
    const newNode = new ListNode(value, null);
    let current = this.head;

    while (current) {
      if (current.next === null) break;
      current = current.next;
    }

    if (current) current.next = newNode;
  }

  remove(target: number) {
    if (this.head === null) return null;

    let current = this.head;

    while (current?.next) {
      if (this.head.val === target) this.head = this.head.next;

      // [1,2,6,3,4,5,6]
      if (current.next.val === target) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    return this.head;
  }
}

const linkedList = new LinkedList(new ListNode(6, null));

linkedList.add(6);
linkedList.add(6);
linkedList.add(6);
linkedList.add(6);
linkedList.add(6);
linkedList.add(6);

console.log(linkedList.head);
console.log("running...", Date.now());
console.log(JSON.stringify(linkedList.remove(6)));
