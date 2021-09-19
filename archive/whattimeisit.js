/* What time is it? */
var time = document.createElement('div');
time.innerHTML = new Date().toLocaleTimeString();
document.body.appendChild(time);
