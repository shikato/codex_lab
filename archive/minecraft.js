/* Create a video game like the Minecraft. */
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var player = {
  x: 400,
  y: 300,
  width: 20,
  height: 20,
  speed: 5,
  color: '#00FF00',
  draw: function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
var keys = {
  left: false,
  right: false,
  up: false,
  down: false
};
var update = function() {
  if (keys.left) {
    player.x -= player.speed;
  }
  if (keys.right) {
    player.x += player.speed;
  }
  if (keys.up) {
    player.y -= player.speed;
  }
  if (keys.down) {
    player.y += player.speed;
  }
  player.draw();
};
var render = function() {
  requestAnimationFrame(render);
  update();
};
render();
document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 37:
      keys.left = true;
      break;
    case 38:
      keys.up = true;
      break;
    case 39:
      keys.right = true;
      break;
    case 40:
      keys.down = true;
      break;
  }
});
document.addEventListener('keyup', function(e) {
  switch (e.keyCode) {
    case 37:
      keys.left = false;
      break;
    case 38:
      keys.up = false;
      break;
    case 39:
      keys.right = false;
      break;
    case 40:
      keys.down = false;
      break;
  }
});
