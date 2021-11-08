// Linear search algorithm

const linear_search = (list, target) => {
  const limit = list.length;
  let found = false;

  for (let i = 0; i < limit; i++) {
    if (list[i] === target) {
      found = true;
      break;
    }
  }

  return ['Linear search: ', found];
};

module.exports = linear_search;
