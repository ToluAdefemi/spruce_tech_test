import { useState } from 'react'
import { XorO, GameState } from '../types'
import { checkWinner } from '../utils/winner'

function createEmptyBoard(size: number): (XorO | undefined)[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => undefined))
}

export const GameLogic = () => {
  const [boardSize, setBoardSize] = useState<number>(3)
  const [winLength, setWinLength] = useState<number>(3)

  const [board, setBoard] = useState<(XorO | undefined)[][]>(createEmptyBoard(boardSize))
  const [currentPlayer, setCurrentPlayer] = useState<XorO>('X')
  const [winner, setWinner] = useState<XorO | 'draw' | null>(null)
  const [gameStatus, setGameStatus] = useState<GameState>('not-started')

  const checkGameEnd = (board: (XorO | undefined)[][], row: number, column: number) => {
    if (checkWinner(board, row, column, winLength)) {
      const playerTurn = board[row]?.[column] as XorO
      return { gameEnded: true, winner: playerTurn }
    }
    const isDraw = board.flat().every(square => square !== undefined && square !== null)
    if (isDraw) {
      return { gameEnded: true, winner: 'draw' as const }
    }
    return { gameEnded: false, winner: null as null }
  }

  const handleMove = (row: number, column: number) => {
    if (board[row][column] || gameStatus === 'won' || gameStatus === 'draw') return

    const updatedBoard = board.map(row => row.map(square => square))
    updatedBoard[row][column] = currentPlayer
    setBoard(updatedBoard)

    //Changing status to a game in progress when first move is made
    if (gameStatus === 'not-started') {
      setGameStatus('in-progress')
    }

    const gameResult = checkGameEnd(updatedBoard, row, column)
    if (gameResult.gameEnded) {
      setWinner(gameResult.winner)
      setGameStatus(gameResult.winner === 'draw' ? 'draw' : 'won')
      return
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  const restartGame = () => {
    setBoard(createEmptyBoard(boardSize))
    setCurrentPlayer('X')
    setWinner(null)
    setGameStatus('not-started')
  }

  const changeBoardSize = (size: number) => {
    const boardSize = Math.max(3, Math.min(15, Math.floor(size)))
    setBoardSize(boardSize)
    setBoard(createEmptyBoard(boardSize))
    setCurrentPlayer('X')
    setWinner(null)
    setGameStatus('not-started')
    setWinLength(prev => Math.max(3, Math.min(prev, boardSize)))
  }

  return {
    board,
    boardSize,
    winLength,
    currentPlayer,
    winner,
    gameStatus,
    handleMove,
    restartGame,
    changeBoardSize,
    setWinLength,
    setBoardSize
  }
} 