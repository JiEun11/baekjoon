function climbStairs(n) {
    // 초기값 설정
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;

    for (let stair = 3; stair <= n; stair++) {
        dp[stair] = dp[stair -1] + dp[stair-2];
    }

    return dp[n];
}

console.log(climbStairs(5));