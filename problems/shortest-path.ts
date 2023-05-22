export const buildGraph = (edges: Array<[string, string]>) => {
  const graph: Record<string, string[]> = {};

  for (const edge of edges) {
    const [nodeA, nodeB] = edge;

    if (!graph[nodeA]) graph[nodeA] = [];
    graph[nodeA].push(nodeB);
    if (!graph[nodeB]) graph[nodeB] = [];
    graph[nodeB].push(nodeA);
  }

  return graph;
};

export const shortestPath = (
  edges: Array<[string, string]>,
  nodeA: string,
  nodeB: string
) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length) {
    const [current, distance] = queue.shift()!;

    if (current === nodeB) return distance;
    visited.add(current as string);

    for (const neighbour of graph[current]) {
      queue.push([neighbour, +distance + 1]);
    }
  }
};
