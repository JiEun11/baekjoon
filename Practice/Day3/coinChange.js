function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 0원을 만드는 방법은 0개

    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
        for (const coin of coins) {
            if (coin <= currentAmount) {
                dp[currentAmount] = Math.min(dp[currentAmount],
                    dp[currentAmount-coin] + 1
                );
            }
        }
    }
    return dp[amount] === Infinity ? -1: dp[amount];
}
console.log(coinChange([1, 2, 5], 11)); // 2 (5 + 5 + 1)