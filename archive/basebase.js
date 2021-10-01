/* Create a baseball game. */
var game = document.createElement('div');
game.innerHTML = '<h1>Baseball Game</h1>';
game.innerHTML += '<div id="inning">1</div>';
game.innerHTML += '<div id="outs">0</div>';
game.innerHTML += '<div id="bases">000</div>';
game.innerHTML += '<div id="score">000</div>';
document.body.appendChild(game);

