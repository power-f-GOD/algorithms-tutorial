export const largestComponent = (graph: Record<string, string[]>) => {
  const visiteds = new Set<string>();
  let size = 0;

  for (const node in graph) {
    size = Math.max(size, explore(graph, node, visiteds));
  }

  return size;
};

const explore = (
  graph: Record<string, string[]>,
  node: string,
  visiteds: Set<string>
) => {
  if (visiteds.has(node)) return 0;
  visiteds.add(node);

  let size = 1;

  for (const key of graph[node]) {
    size += explore(graph, key, visiteds);
  }

  return size;
};
