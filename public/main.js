// wait for DOM to load before running JS
$(function() {

  // element to display messages
  var $messages = $('#messages');

  // form to send a message
  var $sendMsg = $('#send-msg');

  // form input for message content
  var $newMsg = $('#new-msg');

  // connect to socket
  var socket = io();

  // submit form to send a message
  $sendMsg.on('submit', function (event) {
    event.preventDefault();

    // get new message from form input
    var newMsg = $newMsg.val();

    // send new message to socket (server)
    socket.emit('chat message', newMsg);
    
    // reset form
    $(this)[0].reset();
    $newMsg.focus();
  });

  // receive message from socket (server)
  socket.on('chat message', function (msg) {
    $messages.append($('<li>' + msg + '</li>'));
  });

});