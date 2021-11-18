// Rewrite this as a React component
var input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);
var button = document.createElement('button');
button.innerHTML = 'Say Hello';
document.body.appendChild(button);
button.onclick = function() {
  var name = input.value;
  var hello = document.createElement('div');
  hello.innerHTML = 'Hello ' + name;
  document.body.appendChild(hello);
};

// React version:
//
//
//
//
* // Rewrite this as a React component */
var HelloWorld = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});
React.render(<HelloWorld />, document.body);

/* var input = document.createElement('input'); */
var input = document.createElement('input');
input.type = 'text';
input.value = 'Hello World';
document.body.appendChild(input);

/* input.setAttribute('type', 'text'); */
input.setAttribute('type', 'text');

/* document.body.appendChild(input); */
document.body.appendChild(input);

/* var button = document.createElement('button'); */
var button = document.createElement('button');
button.innerHTML = 'Click Me';
document.body.appendChild(button);

/* button.innerHTML = 'Say Hello'; */
button.innerHTML = 'Say Hello';

/* document.body.appendChild(button); */
document.body.appendChild(button);

/* button.onclick = function() { */
button.onclick = function() {
  

/* var name = input.value; */
var name = input.value;

/* var hello = document.createElement('div'); */
var hello = document.createElement('div');

/* hello.innerHTML = 'Hello ' + name; */
hello.innerHTML = 'Hello ' + name;

/* document.body.appendChild(hello); */
document.body.appendChild(hello);

/* }; */
};

/* // React version: */
var HelloWorld = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
React.render(<HelloWorld name="World" />, document.body);

