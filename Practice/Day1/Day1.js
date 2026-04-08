/**
 * @description Lv1. 직접 구현해보기
 * 1. 배열 [1, 2, 3, 4, 5]에서 짝수만 골라 2배로 만들기 (filter + map)
 * 2. 문자열 배열에서 중복 제거하기 (Set)
 */
const array = [1, 2, 3, 4, 5, 6, 6];
const filteredArray = array
    .filter((item) => {
        return item % 2 === 0;
    })
    .map((item) => {
        return item * 2;
    });

const removeDuplicated = [...new Set(filteredArray)];
console.log(filteredArray);
console.log(removeDuplicated);

/**
 * @description Lv2. 첫 번째 코딩테스트 문제 (https://leetcode.com/problems/two-sum/description/)
 * Two Sum (LeetCode #1) : 배열에서 합이 target이 되는 두 수의 인덱스 반환
 * -> 풀기 전에 Hash Map을 쓸 수 있는지 생각해볼 것.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const visitedNumbers = new Map(); // key: 숫자값, value: 인덱스

    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        const complement = target - currentNumber; // 1)target에서 뭘 빼야 할까요?

        /* 2) complement가 Map에 있는지 확인 */
        if (visitedNumbers.has(complement)) {
            /* 3) complement의 인덱스 */
            return [visitedNumbers.get(complement), index];
        }

        // 4) 없으면 현재 숫자를 Map에 저장 (무엇을 key, value로?)
        visitedNumbers.set(currentNumber, index);
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
