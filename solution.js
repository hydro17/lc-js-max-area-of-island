
var maxAreaOfIsland = function(grid) {
  let islandPiecesCount = 0;
  let largestIslandPiecesCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) islandPiecesCount = markIslandPieces(i, j, grid, 0);
   
      if (islandPiecesCount > largestIslandPiecesCount) {
        largestIslandPiecesCount = islandPiecesCount;
      }
    }
  }

  return largestIslandPiecesCount;
};

const markIslandPieces = (i, j, grid, islandPiecesCount) => {
  if (grid[i][j] === 0 || grid[i][j] === 2) return islandPiecesCount;

  grid[i][j] = 2;
  islandPiecesCount++;

  if (i - 1 >= 0) islandPiecesCount = markIslandPieces(i - 1, j, grid, islandPiecesCount);
  if (j + 1 < grid[i].length) islandPiecesCount = markIslandPieces(i, j + 1, grid, islandPiecesCount);
  if (i + 1 < grid.length) islandPiecesCount = markIslandPieces(i + 1, j, grid, islandPiecesCount);
  if (j - 1 >= 0) islandPiecesCount = markIslandPieces(i, j - 1, grid, islandPiecesCount);

  return islandPiecesCount;
}

const island = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
];

console.log(maxAreaOfIsland(island));
console.log(maxAreaOfIsland([]));
