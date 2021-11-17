/* Write an editor like Vim. */
var editor = document.createElement('div');
editor.innerHTML = '<input type="text" id="input" />';
document.body.appendChild(editor);
var input = document.getElementById('input');
function keypress(e) {
  if (e.keyCode == 13) {
    var newNode = document.createElement('div');
    newNode.innerHTML = input.value;
    document.body.appendChild(newNode);
    input.value = '';
  }
}
input.addEventListener('keypress', keypress);
