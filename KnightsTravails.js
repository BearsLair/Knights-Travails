// All the possible movements, using a cartesian coordinate system, for the knight from its current position.
// Important: Assumes all moves stay on the chessboard.

const possibleMovements = [
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
];

// Calculates all moves (x, y coordinates) that stay on chessboard from knight's current position,
// and returns array with the valid moves

const calculateAllMoves = (position) => {
  let x = 0;
  let y = 0;
  let endLocation = [];
  let moves = [];

  for (let i = 0; i < 8; i++) {
    x = possibleMovements[i][0] + position[0];
    if (x < 0 || x > 7) {
      x = null;
    }
    y = possibleMovements[i][1] + position[1];
    if (y < 0 || y > 7) {
      y = null;
    }

    if (x !== null && y !== null) {
      endLocation = [x, y];

      moves.push([position, endLocation]);
    }
  }

  return moves;
};

// Calculates all movements from the knight's starting location
// until it arrives at the designated ending position.
// It then works backwards from the ending position to the start
// to record the shortest path-by chaining the shortest path
// vertices together and ignoring irrelevant edges of the graph.
const knightMoves = (startPosition, endPosition) => {
  let moves = calculateAllMoves(startPosition);

  // Save for later
  const originalLength = moves.length;

  currentIndex = 0;
  let currentLength = moves.length;
  let nextMoves = [];
  let finalPositionFound = false;
  let lastIndex = 0;
  let iterator = 0;

  while (finalPositionFound === false) {
    for (let i = currentIndex; i < currentLength; i++) {
      iterator = i;
      nextMoves = calculateAllMoves(moves[i][1]);

      while (nextMoves.length !== 0) {
        moves.push(nextMoves[0]);
        lastIndex = moves.length - 1;
        if (
          moves[lastIndex][1][0] === endPosition[0] &&
          moves[lastIndex][1][1] === endPosition[1]
        ) {
          finalPositionFound = true;
          break;
        }
        if (finalPositionFound === false) {
          nextMoves.shift();
        }
      }

      if (
        moves[lastIndex][1][0] === endPosition[0] &&
        moves[lastIndex][1][1] === endPosition[1]
      ) {
        finalPositionFound = true;
        break;
      }
    }

    currentIndex = iterator + 1;
    currentLength = moves.length;
  }

  console.log(moves);
};

// TESTS
console.log(knightMoves([3, 3], [6, 6]));
