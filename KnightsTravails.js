const chessBoard = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
];

// All the possible moves for the knight from a point
// Important: Assumes all moves stay on the chessboard.

const possibleMoves = [
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
];

// Calculates and stores all moves that stay on chessboard
const calculateAllMoves = (position) => {
  let x = 0;
  let y = 0;
  let endLocation = [];
  let moves = [];

  for (let i = 0; i < 8; i++) {
    x = possibleMoves[i][0] + position[0];
    if (x < 0 || x > 7) {
      x = null;
    }
    y = possibleMoves[i][1] + position[1];
    if (y < 0 || y > 7) {
      y = null;
    }

    if (x !== null && y !== null) {
      endLocation = [x, y];

      moves.push(endLocation);
    }
  }

  return moves;
};

// TESTS
console.log(calculateAllMoves([3, 7]));
