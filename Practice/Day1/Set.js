// 중복 제거
const numbersWithDuplicates = [1, 2, 3, 2, 2, 2, 3, 4];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];

// 이미 본 값인가? 체크 - O(1) 조회
const visitedNodes = new Set();

visitedNodes.add(5);
visitedNodes.add(10);

/**
 * @description Set이 이런 경우 효율적인 이유
 * Array의 .includes()는 O(N)
 * Set에서 .has()는 O(1)
 */
console.log(visitedNodes.has(5));
console.log(visitedNodes.has(7));
