import { describe, it, expect } from 'vitest'
import { scoreYams } from './yams.js'

describe('Return the highest Yams score from the given dice', () => {
    it('returns the highest sum of dice from all rolls', () => {
        expect(scoreYams([[1, 2, 3, 4, 6], [2, 3, 4, 6, 6]])).toBe(21);
    })
    it('returns 28 if any roll contains at least three of a kind', () => {
        expect(scoreYams([[1, 2, 3, 4, 6], [2, 2, 2, 4, 6]])).toBe(28);
    })
    it('returns 35 if any roll contains at least four of a kind', () => {
        expect(scoreYams([[1, 2, 3, 4, 6], [5, 5, 5, 5, 2]])).toBe(35);
    })
    it('returns 50 if any roll contains five of a kind', () => {
        expect(scoreYams([[1, 2, 3, 4, 6], [4, 4, 4, 4, 4]])).toBe(50);
    })
    it('returns 30 if any roll contains a full', () => {
        expect(scoreYams([[1, 2, 3, 4, 6], [3, 3, 3, 5, 5]])).toBe(30);
    })
    it('returns 40 if any roll contains a Yahtzee', () => {
        expect(scoreYams([[1, 2, 3, 4, 5], [1, 4, 3, 2, 1]])).toBe(40);
    })
    it('returns the best possible score from multiple rolls', () => {
        expect(scoreYams([[2, 2, 2, 2, 5], [3, 3, 3, 5, 5], [6, 6, 6, 6, 6], [1, 2, 3, 4, 5]])).toBe(50);
    })
    it ('return 0 for no dice', () => {
        expect(scoreYams([])).toBe(0);
    })
    it ('return 0 if no 5 dice rolls', () => {
        expect(scoreYams([[1, 2, 3, 4, 5, 6], [4, 5]])).toBe(0);
    })
    it ('return 0 if a roll contains invalid die values', () => {
        expect(scoreYams([[1, 2, 3, 4, 7], [4, 5, 6, 0, -1]])).toBe(0);
    })
})