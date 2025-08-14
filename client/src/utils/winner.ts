import { XorO } from "../types"; 

export function checkWinner(
  board: (XorO | undefined)[][],
  row: number,
  col: number,
  winLength: number = 3
): boolean {
  const player = board[row]?.[col];
  if (!player) return false;

  const size = board.length;
  const directions = [
    [0, 1],   // horizontal
    [1, 0],   // vertical
    [1, 1],   // diagonal down-right
    [1, -1],  // diagonal down-left
  ];

  const inBounds = (r: number, c: number) => r >= 0 && r < size && c >= 0 && c < size;

  for (const [rowDirection, columnDirection] of directions) {
    let count = 1;

    // forward direction
    for (let i = 1; i < winLength; i++) {
      const r = row + rowDirection * i;
      const c = col + columnDirection * i;
      if (inBounds(r, c) && board[r][c] === player) {
        count++;
      } else {
        break;
      }
    }

    // backward direction
    for (let i = 1; i < winLength; i++) {
      const r = row - rowDirection * i;
      const c = col - columnDirection * i;
      if (inBounds(r, c) && board[r][c] === player) {
        count++;
      } else {
        break;
      }
    }

    if (count >= winLength) return true;
  }

  return false;
}