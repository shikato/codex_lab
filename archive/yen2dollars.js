/* Write a program to convert Yen to Dollars. */
var yen = document.createElement('div');
yen.innerHTML = 'Yen: ';
document.body.appendChild(yen);
var yenInput = document.createElement('input');
yenInput.setAttribute('type', 'number');
document.body.appendChild(yenInput);
var yenToDollars = document.createElement('div');
yenToDollars.innerHTML = 'Dollars: ';
document.body.appendChild(yenToDollars);
var yenToDollarsOutput = document.createElement('div');
document.body.appendChild(yenToDollarsOutput);
yenToDollarsOutput.innerHTML = '$0';
yenInput.addEventListener('input', function() {
  var yen = this.value;
  var dollars = yen * 0.0088;
  yenToDollarsOutput.innerHTML = '$' + dollars.toFixed(2);
});


