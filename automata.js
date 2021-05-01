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