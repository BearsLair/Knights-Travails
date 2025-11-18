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
  console.log("current position at calculateAllMoves: ", position);
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

      moves.push(endLocation);
    }
  }

  return moves;
};

const knightMoves = (startPosition, endPosition) => {
  console.log("start: ", startPosition, " ending: ", endPosition);
  let notVisited = [];
  let moveCount = 0;
  // let resultMessage = "";
  let temp = [];
  // For testing
  let currentArray = [];

  let currentPosition = startPosition;

  console.log(currentPosition);

  while (
    currentPosition[0] != endPosition[0] &&
    currentPosition[1] != endPosition[1]
  ) {
    currentArray.push(currentPosition);
    if (moveCount === 0) {
      notVisited.push(calculateAllMoves(currentPosition));
    }

    for (let i = 0; i < notVisited[0].length; i++) {
      currentPosition = notVisited[0][i];

      if (
        currentPosition[0] === endPosition[0] &&
        currentPosition[1] === endPosition[1]
      ) {
        break;
      } else {
        notVisited.push(calculateAllMoves(notVisited[0][i]));
      }
    }

    if (notVisited.length > 0) {
      notVisited.shift();
    }
    moveCount++;
  }

  console.log(
    "currentPosition[0] :",
    currentPosition[0],
    " endPosition[0]: ",
    endPosition[0]
  );
  console.log(
    "currentPosition[1] :",
    currentPosition[0],
    " endPosition[1]: ",
    endPosition[0]
  );
  console.log("currentArray:", currentArray);
  console.log("total moves: ", moveCount);
};

// TESTS
console.log(knightMoves([3, 3], [6, 6]));
