/* Write a Reversi program. */
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];
var player = 1;
var opponent = 2;
function isValidMove(row, col) {
  if (board[row][col] != 0) {
    return false;
  }
  var opponentCount = 0;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      var newRow = row + i;
      var newCol = col + j;
      if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) {
        continue;
      }
      if (board[newRow][newCol] == opponent) {
        opponentCount++;
      }
    }
  }
  return opponentCount > 0;
}
function flip(row, col) {
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      var newRow = row + i;
      var newCol = col + j;
      if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) {
        continue;
      }
      if (board[newRow][newCol] == opponent) {
        board[newRow][newCol] = player;
      }
    }
  }
}
function isGameOver() {
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      if (isValidMove(row, col)) {
        return false;
      }
    }
  }
  return true;
}
function getScore() {
  var playerScore = 0;
  var opponentScore = 0;
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      if (board[row][col] == player) {
        playerScore++;
      } else if (board[row][col] == opponent) {
        opponentScore++;
      }
    }
  }
  return [playerScore, opponentScore];
}
function getValidMoves() {
  var validMoves = [];
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      if (isValidMove(row, col)) {
        validMoves.push([row, col]);
      }
    }
  }
  return validMoves;
}
function getNextMove() {
  var validMoves = getValidMoves();
  if (validMoves.length == 0) {
    return null;
  }
  return validMoves[Math.floor(Math.random() * validMoves.length)];
}
function makeMove(row, col) {
  board[row][col] = player;
  flip(row, col);
  player = 3 - player;
  opponent = 3 - opponent;
}
function drawBoard() {
  var html = '';
  for (var row = 0; row < 8; row++) {
    html += '<div class="row">';
    for (var col = 0; col < 8; col++) {
      var cellClass = 'cell';
      if (board[row][col] == player) {
        cellClass += ' player
