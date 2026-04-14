/**
 * @description
 * 슬라이딩 윈도우?
 * 배열에서 "창문"을 밀면서 이동하는 것
 * 매번 처음부터 다시 계산하지 않고, 창문이 한 칸 이동할 때 빠진 것 빼고, 새로 들어온 것 더하기
 */

function maxSlidingWindow(nums, k) {
    // 처음 k개 합 구하기
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // 창문 이동
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSlidingWindow([1, 4, 2, 9, 7, 3], 3));
