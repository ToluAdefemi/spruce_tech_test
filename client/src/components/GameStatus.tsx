import React from 'react'
import { XorO, GameState } from '../types'

interface GameStatusProps {
  winner: XorO | 'draw' | null
  gameStatus: GameState
}

export const GameStatus: React.FC<GameStatusProps> = ({ winner, gameStatus }) => {
  if (!winner && gameStatus === 'not-started') {
    return <div className="text-lg">Click to start playing!</div>
  }

  if (gameStatus === 'in-progress') {
    return <div className="text-lg">Game in progress...</div>
  }

  if (winner) {
    return (
      <div className="text-lg font-bold">
        {winner === 'draw' ? 'Draw!' : `Winner: ${winner}`}
      </div>
    )
  }

  return null
} 