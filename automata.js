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

// this is the final function, that will iterate over count and compute each generation;
const computeGenerations = (matrix, count) => {

}

// this function will compute the next generation;
const nextGeneration = (matrix) => {
  // create a new empty 2D array so we don't overwrite original matrix;
  const newMatrix = [];
  const matrixLength = matrix.length;
  for (let x = 0; x < matrixLength; x++) {
    newMatrix[x] = [];
    for (let y = 0; y < matrixLength; y++) {
      newMatrix[x][y] = 0;
    };
  };

  // iterate over the count, we should run that many generations
  // for each cell, check it's neighbors and get total live count;
  // do conditional checks to see what new cell should equal

  return newMatrix;
}

// helper function to get total live neighbors
const findLiveNeighbors = (matrix, x, y) => {
  // define each potential neighbor, default is zero;
  let topLeft = 0; topMiddle = 0; topRight = 0;
  let middleLeft = 0; middleRight = 0;
  let bottomLeft = 0; bottomMiddle = 0; bottomRight = 0;


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