/* Make a todo app. */
var todoList = document.createElement('ul');
document.body.appendChild(todoList);
var todoInput = document.createElement('input');
todoInput.setAttribute('type', 'text');
document.body.appendChild(todoInput);
var todoButton = document.createElement('button');
todoButton.innerHTML = 'Add';
document.body.appendChild(todoButton);
var todoItems = [];
todoButton.onclick = function() {
  var todoItem = todoInput.value;
  todoItems.push(todoItem);
  var todoItemElement = document.createElement('li');
  todoItemElement.innerHTML = todoItem;
  todoList.appendChild(todoItemElement);
  todoInput.value = '';
};

