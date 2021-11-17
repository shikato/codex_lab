/* Write useful electronic calculator. */
var calculator = document.createElement('div');
calculator.innerHTML = '<div class="calculator">' +
  '<div class="calculator-display">0</div>' +
  '<div class="calculator-buttons">' +
  '<button class="calculator-button">1</button>' +
  '<button class="calculator-button">2</button>' +
  '<button class="calculator-button">3</button>' +
  '<button class="calculator-button">4</button>' +
  '<button class="calculator-button">5</button>' +
  '<button class="calculator-button">6</button>' +
  '<button class="calculator-button">7</button>' +
  '<button class="calculator-button">8</button>' +
  '<button class="calculator-button">9</button>' +
  '<button class="calculator-button">0</button>' +
  '<button class="calculator-button">+</button>' +
  '<button class="calculator-button">-</button>' +
  '<button class="calculator-button">*</button>' +
  '<button class="calculator-button">/</button>' +
  '<button class="calculator-button">=</button>' +
  '</div>' +
  '</div>';
document.body.appendChild(calculator);
