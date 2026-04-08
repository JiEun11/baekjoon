function bfs(startNode) {
    const queue = [startNode];
    const visitedNodes = new Set();
    visitedNodes.add(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode); // 현재 노드 처리

        // 인접 노드를 큐에 추가
        for (const neighbor of graph[currentNode]) {
            if (!visitedNodes.has(neighbor)) {
                visitedNodes.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
