// binary search algorithm

const recursive_binary_search = (list, target) => {
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

    return recursive_binary_search(partition, target);
  }

  return ['Recursive binary search: ', found];
};

module.exports = recursive_binary_search;
