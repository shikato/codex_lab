/* Write a chat program like WhatsApp. */
var chat = document.createElement('div');
chat.innerHTML = '<div class="chat-header">Chat</div>';
document.body.appendChild(chat);
var chatInput = document.createElement('input');
chatInput.setAttribute('type', 'text');
chatInput.setAttribute('placeholder', 'Type a message...');
chat.appendChild(chatInput);
var chatMessages = document.createElement('div');
chatMessages.setAttribute('class', 'chat-messages');
chat.appendChild(chatMessages);
var chatMessage = document.createElement('div');
chatMessage.setAttribute('class', 'chat-message');
chatMessage.innerHTML = '<div class="chat-message-content">Hello World</div>';
chatMessages.appendChild(chatMessage);
chatInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    var chatMessage = document.createElement('div');
    chatMessage.setAttribute('class', 'chat-message');
    chatMessage.innerHTML = '<div class="chat-message-content">' + chatInput.value + '</div>';
    chatMessages.appendChild(chatMessage);
    chatInput.value = '';
  }
});
