export function scoreYams(dice) {
    let maxScore = 0;
    for (const roll of dice) {
        const rollScore = roll.reduce((a, b) => a + b, 0);
        if (rollScore > maxScore) {
            maxScore = rollScore;
        }
    }
    return maxScore;
}