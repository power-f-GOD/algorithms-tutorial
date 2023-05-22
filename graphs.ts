const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// We use a stack to implement a depth-first search/traversal
const iterativeDepthFirstTraversal = (
  graph: Record<string, string[]>,
  node: string
) => {
  // First, initialize stack (with source node)
  const stack = [node];

  while (stack.length) {
    const current = stack.pop();

    console.log(current);

    for (const neighbour of graph[current!]) {
      stack.push(neighbour);
    }
  }
};

const recursiveDepthFirstTraversal = (
  graph: Record<string, string[]>,
  node: string
) => {
  console.log(node);

  for (const neighbour of graph[node]) {
    recursiveDepthFirstTraversal(graph, neighbour);
  }
};
