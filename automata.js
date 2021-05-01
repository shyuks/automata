// this is the final function, that will iterate over count and compute each generation;
const computeGenerations = (matrix, count) => {
  let finalMatrix = matrix;

  for (let i = 0; i < count; i++) {
    finalMatrix = nextGeneration(finalMatrix);
  }

  console.log('Final Matrix: ', finalMatrix);
  return finalMatrix;
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

  // for each cell, check it's neighbors and get live count and adult neighbors;
  // do conditional checks to see what new cell should equal
  for (let x = 0; x < matrixLength; x++) {
    for (let y = 0; y < matrixLength; y++) {
      const currentCell = matrix[x][y];
      // find neighbor info;
      const neighborInfo = getNeighborInfo(matrix, x, y);
      const totalLiveNeighbors = neighborInfo[0];
      const totalAdultNeighbors = neighborInfo[1];

      // conditional checks for currentCell and neighbor info;
      // cell is empty or zero
      // 2 adult neighbors ? new cell is 1
      // else stays empty
      if (currentCell === 0) {
        if (totalAdultNeighbors === 2) {
          newMatrix[x][y] = 1;
        }
      }

      // cell is 1
      // >= 5 total neighbors ? new cell is 0
      // <= 1 total neighbors ? new cell is 0
      // else new cell is 2
      if (currentCell === 1) {
        if (totalLiveNeighbors >= 5 || totalLiveNeighbors <= 1) {
          newMatrix[x][y] = 0;
        } else {
          newMatrix[x][y] = 2;
        }
      }

      // cell is 2
      // >= 3 total neighbors ? new cell is 0
      // zero neighbors ? new cell is 0
      // else new cell is 3
      if (currentCell === 2) {
        if (totalLiveNeighbors >= 3 || totalLiveNeighbors === 0) {
          newMatrix[x][y] = 0;
        } else {
          newMatrix[x][y] = 3;
        }
      };

      // cell is 3
      // new cell is 0
      if (currentCell === 3) {
        newMatrix[x][y] = 0;
      }
    }
  }

  return newMatrix;
}

// helper function to get total live neighbors and adult neighbors
const getNeighborInfo = (matrix, x, y) => {
  // keep track of all neighbor values;
  const neighborValues = [];

  // check to see if new x coordinate is within our matrix;
  // if [x-1] or [x+1] is valid, default to 0 when new y coordinate is undefined;
  if (matrix[x - 1]) {
    const topLeft = matrix[x - 1][y - 1] || 0;
    const topMiddle = matrix[x - 1][y] || 0;
    const topRight = matrix[x - 1][y + 1] || 0;
    neighborValues.push(topLeft);
    neighborValues.push(topMiddle);
    neighborValues.push(topRight);
  }

  if (matrix[x + 1]) {
    const bottomLeft = matrix[x + 1][y - 1] || 0;
    const bottomMiddle = matrix[x + 1][y] || 0;
    const bottomRight = matrix[x + 1][y + 1] || 0;
    neighborValues.push(bottomLeft);
    neighborValues.push(bottomMiddle);
    neighborValues.push(bottomRight);
  }

  // we know x is a valid coordinate, if [y-1] or [y+1] is undefined, default to zero;
  const topMiddle = matrix[x][y - 1] || 0;
  const bottomMiddle = matrix[x][y + 1] || 0;
  neighborValues.push(topMiddle);
  neighborValues.push(bottomMiddle);

  const neighborCountSplit = getNeighborCountSplit(neighborValues)
  return neighborCountSplit;
}

// take in all the values of the neighbors, decide if we increment total neighbor count and/or adult neighbor count
const getNeighborCountSplit = (neighborValuesArray) => {
  let neighborIncrement = 0;
  let adultIncrement = 0;

  for (let i = 0; i < neighborValuesArray.length; i++) {
    const neighborValue = neighborValuesArray[i];

    if (neighborValue === 0) {
      continue;
    }

    if (neighborValue === 2) {
      neighborIncrement++;
      adultIncrement++;
      continue;
    }

    neighborIncrement++;
  }

  return [neighborIncrement, adultIncrement]
}

const finalProblem = [
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

computeGenerations(finalProblem, 20);

const testCaseOne = [
  [0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 3, 1, 0, 0, 0],
  [0, 0, 0, 2, 0, 3, 0, 0, 1, 3],
  [0, 0, 0, 0, 1, 3, 0, 0, 0, 3],
  [0, 2, 2, 0, 0, 0, 1, 3, 1, 0],
  [0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
  [0, 0, 2, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const testAnswerOne = [
  [0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 2, 0],
  [0, 1, 0, 1, 2, 0, 0, 0, 0, 0],
  [0, 3, 3, 0, 0, 1, 2, 0, 2, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 3, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const testCaseTwo = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 2, 0, 0, 0],
  [0, 0, 3, 3, 2, 0, 0, 0, 2, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 3, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 1, 3, 3, 3, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const testAnswerTwo = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 3, 1, 0, 0, 3, 1],
  [0, 2, 0, 0, 0, 1, 0, 0, 3, 1],
  [0, 0, 0, 0, 0, 2, 3, 1, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const testCaseThree = [
  [0, 0, 0, 0, 1, 3, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 3, 1, 0],
  [0, 0, 2, 0, 2, 3, 0, 0, 3, 0],
  [0, 0, 2, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 2, 1, 3, 1, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const testAnswerThree = [
  [0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 3, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 3, 0, 3, 0, 0, 0, 0, 0],
  [0, 1, 3, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 2, 0],
  [0, 0, 0, 0, 3, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

console.log(`Test Case One Passes: ${JSON.stringify(computeGenerations(testCaseOne, 1)) === JSON.stringify(testAnswerOne)}`);
console.log(`Test Case Two Passes: ${JSON.stringify(computeGenerations(testCaseTwo, 1)) === JSON.stringify(testAnswerTwo)}`);
console.log(`Test Case Three Passes: ${JSON.stringify(computeGenerations(testCaseThree, 1)) === JSON.stringify(testAnswerThree)}`);