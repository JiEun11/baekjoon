/**
 * @description 문제: 배열에서 가장 많이 등장한 요소를 구하라
 */
function findMostFrequent(items) {
    const frequencyMap = {};

    // 빈도수 세기
    items.forEach((item) => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    // 빈도수가 가장 높은 항목 찾기
    let mostFrequentItem = null;
    let maxFrequency = 0;

    Object.entries(frequencyMap).forEach(([item, frequency]) => {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequentItem = item;
        }
    });

    return mostFrequentItem;
}
// Time Complexity: O(N) / Space Complexity: O(N)
console.log(findMostFrequent(["a", "b", "a", "c", "a", "b"]));
