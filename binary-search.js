// binary search algorithm

const binary_search = (list, target) => {
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

  return ['Binary search: ', found];
};

module.exports = binary_search;
