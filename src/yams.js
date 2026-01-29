function checkKind(dice, needed, score) {
  for (const roll of dice) {
    const counts = Array(7).fill(0);
    for (const die of roll) {
      if (++counts[die] >= needed) return score;
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

function validateDice(dice) {
    if (!Array.isArray(dice)) return false;

    for (let roll of dice) {
        if (!Array.isArray(roll) || roll.length !== 5) {
            return false;
        }

        for (let die of roll) {
            if (!Number.isInteger(die) || die < 1 || die > 6) {
                return false;
            }
        }
    }
    return true;
}

export function scoreYams(dice) {
    if (!validateDice(dice)) {
        return 0;
    }
    const checkThreeOfKind = (dice) => checkKind(dice, 3, 28);
    const checkFourOfKind = (dice) => checkKind(dice, 4, 35);
    const checkYahtzee = (dice) => checkKind(dice, 5, 50);

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