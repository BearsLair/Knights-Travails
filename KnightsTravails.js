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

      moves.push(endLocation);
    }
  }

  return moves;
};

// Calculate all possible moves that would lead to end position in one move.
// The knight must eventually reach one of these positions, if it's not on one
// already.

const calculateEndMoves = (endPosition) => {
  return calculateAllMoves(endPosition);
};

const knightMoves = (startPosition, endPosition) => {
  const lastMoves = calculateEndMoves(endPosition);
  let movesList = [];
  let resultMessage = "";

  // Checks if startPosition is in the array of lastMoves
  const containsStartPosition = lastMoves.some(
    (innerArray) =>
      innerArray.length === startPosition.length &&
      innerArray.every((value, index) => value === startPosition[index])
  );

  if (containsStartPosition) {
    movesList = [startPosition, endPosition];

    console.log("movesList", movesList);

    resultMessage = `You made it in 1 move! Here's your path:\n${movesList[0]}\n${movesList[1]}`;

    return resultMessage;
  }

  console.log("lastMoves: ", lastMoves);

  // const startMoves = calculateAllMoves(startPosition);

  console.log("startPosition: ", startPosition);

  console.log(
    "Is starting positions in last move array?: ",
    containsTargetArray(startPosition, lastMoves)
  );

  return "huh?";
};

// TESTS
console.log(knightMoves([3, 3], [1, 2]));
