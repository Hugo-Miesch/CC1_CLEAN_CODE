import { describe, it, expect } from 'vitest'
import { scoreYams } from './yams.js'

describe('Return the highest Yams score from the given dice', () => {
    it('returns the highest sum of dice from all rolls', () => {
        expect(scoreYams([[1, 1, 1, 1, 1], [2, 2, 2, 2, 2]])).toBe(10);
    })
})
    
