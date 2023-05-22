// Tree
class TreeNode<T = number> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T = number> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(prevNode: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value >= prevNode.value) {
      if (!prevNode.right) {
        prevNode.right = newNode;
      } else {
        this.insertNode(prevNode.right, newNode);
      }
    } else {
      if (!prevNode.left) {
        prevNode.left = newNode;
      } else {
        this.insertNode(prevNode.left, newNode);
      }
    }
  }
}

// binary search algorithm

export const iterativeBinarySearch = (list: any[], target: number) => {
  if (list.length === 0) {
    return false;
  }

  const limit = list.length;
  let first = 0;
  let last = limit - 1;
  let mid = Math.floor(limit / 2);
  let found = false;

  while (first < mid && !found) {
    if (
      list[mid] === target ||
      list[first] === target ||
      list[last] === target
    ) {
      found = true;
    } else if (mid < target) {
      first = mid + 1;
      mid = Math.ceil((first + last) / 2);
    } else if (mid > target) {
      last = mid - 1;
      mid = Math.floor((first + last) / 2);
    }
  }

  return ["Binary search: ", found];
};

// binary search algorithm

export const recursiveBinarySearch = (
  list: Array<string | number>,
  target: string | number
): boolean | Array<string | number | boolean> => {
  if (list.length === 0) {
    return false;
  }

  const size = list.length;
  let found = false;
  let mid = Math.floor(size / 2);

  if (list[mid] === target || list[0] === target || list[size - 1] === target) {
    found = true;
  } else {
    let partition;

    if (list[mid] < target) {
      partition = list.slice(mid + 1, list.length);
    } else {
      partition = list.slice(0, mid);
    }

    return recursiveBinarySearch(partition, target);
  }

  return ["Recursive binary search: ", found];
};
