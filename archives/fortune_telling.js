/* Make a fortune‐telling service. */
var fortune = document.createElement('div');
fortune.innerHTML = '<button id="fortune">Tell me my fortune!</button>';
document.body.appendChild(fortune);
var fortuneText = document.createElement('div');
fortuneText.innerHTML = '<p id="fortuneText"></p>';
document.body.appendChild(fortuneText);
var fortuneButton = document.getElementById('fortune');
fortuneButton.addEventListener('click', function() {
  var randomNumber = Math.floor(Math.random() * 6);
  var fortunes = ['You will be happy', 'You will be sad', 'You will be rich', 'You will be poor', 'You will be famous', 'You will be forgotten'];
  fortuneText.innerHTML = fortunes[randomNumber];
});


