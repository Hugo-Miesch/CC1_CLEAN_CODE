function checkThreeOfKind(dice) {
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

function checkFourOfKind(dice) {
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

function checkYahtzee(dice) {
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

function checkFullHouse(dice) {
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

function checkLargeStraight(dice) {
    for (let roll of dice) {
        const sortedRoll = [...new Set(roll)].sort((a, b) => a - b);
        if (sortedRoll.length === 5 && sortedRoll[4] - sortedRoll[0] === 4) {
            return 40;
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
    const checkers = [
        checkYahtzee,
        checkLargeStraight,
        checkFullHouse,
        checkFourOfKind,
        checkThreeOfKind
    ];
    for (let checker of checkers) {
        const score = checker(dice);
        if (score > 0) {
            return score;
        }
    }
    return getHighestSum(dice);
}