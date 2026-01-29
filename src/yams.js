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

function checkSquare(dice) {
    for (let roll of dice) {
        const counts = {};
        for (let die of roll) {
            counts[die] = (counts[die] || 0) + 1;
            if (counts[die] >= 4) {
                return 35;
            }
        }
    }
    return 0;
}

function checkYams(dice) {
    for (let roll of dice) {
        const counts = {};
        for (let die of roll) {
            counts[die] = (counts[die] || 0) + 1;
            if (counts[die] >= 5) {
                return 50;
            }
        }
    }
    return 0;
}

function checkFull(dice) {
    for (let roll of dice) {
        const counts = {};
        for (let die of roll) {
            counts[die] = (counts[die] || 0) + 1;
        }
        const hasThree = Object.values(counts).some(count => count === 3);
        const hasTwo = Object.values(counts).some(count => count === 2);
        if (hasThree && hasTwo) {
            return 30;
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
    const squareScore = checkSquare(dice);
    const yamsScore = checkYams(dice);
    const fullScore = checkFull(dice);

    if (yamsScore > 0) {
        return yamsScore;
    }
    if (squareScore > 0) {
        return squareScore;
    }
    if (fullScore > 0) {
        return fullScore;
    }
    if (brelanScore > 0) {
        return brelanScore;
    }
    return getHighestSum(dice);
}