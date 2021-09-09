/* Create a video game like Atari Breakout. */
var canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  dx: 2,
  dy: -2
};
var paddle = {
  x: canvas.width / 2,
  y: canvas.height - 20,
  width: 80,
  height: 10
};
var bricks = [];
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 5; j++) {
    bricks.push({
      x: i * 50,
      y: j * 20,
      width: 50,
      height: 10
    });
  }
}
var intervalId = setInterval(draw, 10);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
  for (var i = 0; i < bricks.length; i++) {
    ctx.beginPath();
    ctx.rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  }
  if (ball.x + ball.radius > paddle.x && ball.x - ball.radius < paddle.x + paddle.width && ball.y + ball.radius > paddle.y) {
    ball.dy = -ball.dy;
  }
  for (var i = 0; i < bricks.length; i++) {
    if (ball.x + ball.radius > bricks[i].x && ball.x - ball.radius < bricks[i].x + bricks[i].width && ball.y + ball.radius > bricks[i].y) {
      ball.dy = -ball.dy;
      bricks.splice(i, 1);
      break;
    }
  }
  if (bricks.length === 0) {
    clearInterval(intervalId);
  }
  ball.x += ball.dx;
  ball.y += ball.dy;
}

