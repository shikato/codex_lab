/* Write Fizz Buzz program, */
var fizzBuzz = document.createElement('div');
fizzBuzz.innerHTML = 'Fizz Buzz';
document.body.appendChild(fizzBuzz);
for (var i = 1; i <= 100; i++) {
  var output = '';
  if (i % 3 == 0) {
    output += 'Fizz';
  }
  if (i % 5 == 0) {
    output += 'Buzz';
  }
  if (output == '') {
    output = i;
  }
  var outputDiv = document.createElement('div');
  outputDiv.innerHTML = output;
  document.body.appendChild(outputDiv);
}

