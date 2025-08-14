import { checkWinner } from '../utils/winner'
import { XorO } from '../types'

describe('checkWinner - Winning Conditions', () => {
  describe('3x3 Board Tests', () => {
    it('detects horizontal win from last move', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'X', 'X'],
        [null, 'O', null],
        ['O', null, null],
      ]
      // Last move at (0,2) completes the row
      expect(checkWinner(board, 0, 2)).toBe(true)
      // Move at (0,0) doesn't complete a win
      expect(checkWinner(board, 0, 0)).toBe(false)
    })

    it('detects vertical win from last move', () => {
      const board: (XorO | undefined)[][] = [
        ['O', 'X', null],
        ['O', null, 'X'],
        ['O', null, null],
      ]
      // Last move at (2,0) completes the column
      expect(checkWinner(board, 2, 0)).toBe(true)
      // Move at (0,0) doesn't complete a win
      expect(checkWinner(board, 0, 0)).toBe(false)
    })

    it('detects diagonal win (top-left to bottom-right)', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'O', null],
        [null, 'X', 'O'],
        [null, null, 'X'],
      ]
      // Last move at (2,2) completes the diagonal
      expect(checkWinner(board, 2, 2)).toBe(true)
      // Move at (0,0) doesn't complete a win
      expect(checkWinner(board, 0, 0)).toBe(false)
    })

    it('detects diagonal win (top-right to bottom-left)', () => {
      const board: (XorO | undefined)[][] = [
        [null, 'O', 'X'],
        [null, 'X', null],
        ['X', null, null],
      ]
      // Last move at (2,0) completes the diagonal
      expect(checkWinner(board, 2, 0)).toBe(true)
      // Move at (0,2) doesn't complete a win
      expect(checkWinner(board, 0, 2)).toBe(false)
    })

    it('detects no win in a draw scenario', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'X', 'O'],
      ]
      // No move should result in a win
      expect(checkWinner(board, 2, 2)).toBe(false)
      expect(checkWinner(board, 1, 1)).toBe(false)
    })

    it('handles empty cells correctly', () => {
      const board: (XorO | undefined)[][] = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]
      expect(checkWinner(board, 0, 0)).toBe(false)
    })
  })

  describe('Larger Board Tests', () => {
    it('detects win on 5x5 board with default winLength=3', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'X', 'X', null, null],
        [null, 'O', null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ]
      expect(checkWinner(board, 0, 2)).toBe(true)
    })

    it('detects win on 5x5 board with custom winLength=4', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'X', 'X', 'X', null],
        [null, 'O', null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ]
      expect(checkWinner(board, 0, 3, 4)).toBe(true)
      // Should not win with default winLength=3
      expect(checkWinner(board, 0, 3)).toBe(false)
    })

    it('detects win on 5x5 board with winLength=5', () => {
      const board: (XorO | undefined)[][] = [
        ['O', 'O', 'O', 'O', 'O'],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ]
      expect(checkWinner(board, 0, 4, 5)).toBe(true)
    })
  })

  describe('Edge Cases', () => {
    it('handles win at board edges', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'X', 'X'],
        [null, null, null],
        [null, null, null],
      ]
      // Win at top edge
      expect(checkWinner(board, 0, 2)).toBe(true)
    })

    it('handles win in middle of board', () => {
      const board: (XorO | undefined)[][] = [
        [null, null, null],
        ['X', 'X', 'X'],
        [null, null, null],
      ]
      // Win in middle row
      expect(checkWinner(board, 1, 2)).toBe(true)
    })

    it('handles win at bottom edge', () => {
      const board: (XorO | undefined)[][] = [
        [null, null, null],
        [null, null, null],
        ['X', 'X', 'X'],
      ]
      // Win at bottom edge
      expect(checkWinner(board, 2, 2)).toBe(true)
    })

    it('handles win at left edge', () => {
      const board: (XorO | undefined)[][] = [
        ['X', null, null],
        ['X', null, null],
        ['X', null, null],
      ]
      // Win at left edge
      expect(checkWinner(board, 2, 0)).toBe(true)
    })

    it('handles win at right edge', () => {
      const board: (XorO | undefined)[][] = [
        [null, null, 'X'],
        [null, null, 'X'],
        [null, null, 'X'],
      ]
      // Win at right edge
      expect(checkWinner(board, 2, 2)).toBe(true)
    })
  })

  describe('Invalid Inputs', () => {
    it('handles null player at position', () => {
      const board: (XorO | undefined)[][] = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]
      expect(checkWinner(board, 0, 0)).toBe(false)
    })

    it('handles out of bounds coordinates gracefully', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'X', 'X'],
        [null, null, null],
        [null, null, null],
      ]
      // This should not crash, but return false for invalid coordinates
      expect(() => checkWinner(board, 5, 5)).not.toThrow()
    })
  })

  describe('Win Length Variations', () => {
    it('requires exact winLength for victory', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'X', null],
        [null, null, null],
        [null, null, null],
      ]
      // Only 2 in a row, need 3 for default winLength
      expect(checkWinner(board, 0, 1)).toBe(false)
    })

    it('allows shorter winLength for smaller boards', () => {
      const board: (XorO | undefined)[][] = [
        ['X', 'X', null],
        [null, null, null],
        [null, null, null],
      ]
      // 2 in a row with winLength=2 should win
      expect(checkWinner(board, 0, 1, 2)).toBe(true)
    })
  })
})
