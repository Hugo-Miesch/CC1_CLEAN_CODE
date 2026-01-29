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
})
    
