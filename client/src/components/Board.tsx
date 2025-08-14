import React from 'react'
import { XorO } from '../types'

interface BoardProps {
  board: (XorO | undefined)[][]
  onSquareClick: (row: number, col: number) => void
}

export const Board: React.FC<BoardProps> = ({ board, onSquareClick }) => {
  return (
    <div className='flex flex-col gap-1'>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className='flex gap-1'>
          {row.map((square, columnIndex) => (
            <div
              key={columnIndex}
              className='border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex'
              onClick={() => onSquareClick(rowIndex, columnIndex)}
            >
              {square}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
} 