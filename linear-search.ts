// Linear search algorithm

export const linear_search = (
  list: Array<string | number>,
  target: string | number
) => {
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
