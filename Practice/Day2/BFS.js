function bfs(startNode, graph) {
    const queue = [startNode];
    const visitedNodes = new Set([startNode]);
    const visitOrder = [];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        visitOrder.push(currentNode);

        // 인접 노드를 큐에 추가
        for (const neighbor of graph[currentNode]) {
            if (!visitedNodes.has(neighbor)) {
                visitedNodes.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return visitOrder;
}

const graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 4],
    4: [2, 3],
}

console.log(bfs(1, graph)); // [1, 2, 3, 4]