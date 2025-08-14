import React from 'react'
import { GameState } from '../types'

interface RestartButtonProps {
  gameStatus: GameState
  onRestart: () => void
}

export const RestartButton: React.FC<RestartButtonProps> = ({ gameStatus, onRestart }) => {
  const getButtonText = () => {
    switch (gameStatus) {
      case 'not-started':
        return 'Start New Game'
      case 'in-progress':
        return 'Restart Game'
      case 'won':
      case 'draw':
        return 'Play Again!'
      default:
        return 'Restart Game'
    }
  }

  if (gameStatus === 'not-started') {
    return null
  }

  return (
    <button 
      onClick={onRestart}
      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
    >
      {getButtonText()}
    </button>
  )
}