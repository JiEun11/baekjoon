function mostFrequent(s) {
    const frequencyMap = {}; // { "a": 1, "b" : 1, "c" : 0 }

    // Q1. 빈도수 채우기
    for (const character of s) {
        frequencyMap[character] = (frequencyMap[character] || 0) + 1;
    }

    // Q2 + Q3 : 정렬해서 첫 번째 반환
    const sorted = Object.entries(frequencyMap).sort((a, b) => {
        // 빈도수가 다르면
        if (a[1] !== b[1]) {
            // 빈도수 내림차순
            return b[1] - a[1];
        }
        // 알파벳 오름차순
        return a[0].localeCompare(b[0]);
    });
    return sorted[0][0];
}

console.log(mostFrequent("aabbcc"));
console.log(mostFrequent("bbba"));
