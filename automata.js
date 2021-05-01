// conditions to check

// cell is empty or zero
// 2 adult neighbors ? new cell is 1
// else stays empty

// cell is 1
// >= 5 total neighbors ? new cell is 0
// <= 1 total neighbors ? new cell is 0
// else new cell is 2

// cell is 2
// >= 3 total neighbors ? new cell is 0
// zero neighbors ? new cell is 0
// else new cell is 3

// cell is 3
// new cell is 0

const computeGenerations = (matrix, count) => {
  // create a new empty 2D array so we don't overwrite original 2D array;
  const newMatrix = [];
  const matrixLength = matrix.length;
  for (let x = 0; x < matrixLength; x++) {
    newMatrix[x] = [];
    for (let y = 0; y < matrixLength; y++) {
      newMatrix[x][y] = 0;
    }
  }

  console.log(newMatrix);
}

const testOne = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

computeGenerations(testOne, 1);