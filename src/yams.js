function checkBrelan(dice) {
    for (let roll of dice) {
        const counts = {};
        for (let die of roll) {
            counts[die] = (counts[die] || 0) + 1;
            if (counts[die] >= 3) {
                return 28;
            }
        }
    }
    return 0;
}

function getHighestSum(dice) {
    let maxSum = 0;
    for (let roll of dice) {
        const sum = roll.reduce((a, b) => a + b, 0);
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

export function scoreYams(dice) {
    const brelanScore = checkBrelan(dice);
    if (brelanScore > 0) {
        return brelanScore;
    }
    return getHighestSum(dice);
}