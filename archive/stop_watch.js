/* Create a stop watch. */
var stopWatch = document.createElement('div');
stopWatch.innerHTML = '00:00:00';
document.body.appendChild(stopWatch);
var startButton = document.createElement('button');
startButton.innerHTML = 'Start';
document.body.appendChild(startButton);
var stopButton = document.createElement('button');
stopButton.innerHTML = 'Stop';
document.body.appendChild(stopButton);
var resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
document.body.appendChild(resetButton);
var seconds = 0;
var minutes = 0;
var hours = 0;
var interval = null;
function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  var time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  stopWatch.innerHTML = time;
}
function start() {
  interval = setInterval(updateTime, 1000);
}
function stop() {
  clearInterval(interval);
}
function reset() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopWatch.innerHTML = '00:00:00';
}
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
