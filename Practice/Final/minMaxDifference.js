/**
 * @description 접근 방법:
 * 배열을 한 번 순회하면서 최댓값과 최솟값을 찾아 차이를 반환
 *
 * Time:  O(N)
 * Space: O(1)
 */
function minMaxDifference(nums) {
    // 엣지 케이스
    if (nums.length === 0) return 0;

    let maxValue = nums[0];
    let minValue = nums[0];

    for (const number of nums) {
        if (maxValue < number) maxValue = number;
        if (minValue > number) minValue = number;
    }
    return maxValue - minValue;
}

console.log(minMaxDifference([3, 1, 4, 1, 5, 9])); // 8
console.log(minMaxDifference([1])); // 0
console.log(minMaxDifference([])); // 0
console.log(minMaxDifference([-3, 1, 5])); // 8
console.log(minMaxDifference([5, 5, 5])); // 0
