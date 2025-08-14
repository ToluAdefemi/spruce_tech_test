import React from 'react'
import { Board } from './components/Board'
import { GameStatus } from './components/GameStatus'
import { RestartButton } from './components/RestartButton'
import { GameLogic } from './hooks/GameLogic'

export const Main = () => {
  const { 
    board,
     winner, 
     gameStatus, 
     handleMove, 
     restartGame,
      boardSize, 
      changeBoardSize, 
      winLength, 
      setWinLength
     } = GameLogic()

  return (
    <div className='flex flex-col mt-10 items-center gap-6'>
      <div className='font-bold text-2xl'>Tic Tac Toe</div>

      <div className='flex items-center gap-4'>
        <label className='flex items-center gap-2'>
          <span>Board size</span>
          <input
            type='number'
            min={3}
            max={15}
            value={boardSize}
            onChange={(e) => changeBoardSize(Number(e.target.value))}
            className='border px-2 py-1 w-20 disabled:opacity-50 disabled:bg-gray-100'
            disabled={gameStatus === 'in-progress'}
          />
        </label>
        <label className='flex items-center gap-2'>
          <span>Win length</span>
          <input
            type='number'
            min={3}
            max={boardSize}
            value={winLength}
            onChange={(e) => setWinLength(Math.max(3, Math.min(boardSize, Number(e.target.value))))}
            className='border px-2 py-1 w-20 disabled:opacity-50 disabled:bg-gray-100'
            disabled={gameStatus === 'in-progress'}
          />
        </label>
      </div>
      
      <Board board={board} onSquareClick={handleMove} />
      
      <GameStatus winner={winner} gameStatus={gameStatus} />
      
      <RestartButton gameStatus={gameStatus} onRestart={restartGame} />
    </div>
  )
}
