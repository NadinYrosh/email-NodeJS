var Message = require('./../js/message.js').Message;

$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var fromField = $('#from').val();
    var messageField = $('#message').val();

    var newMessage = new Message(toField, fromField, messageField);
    $('#message-displayed').text(newMessage.read());
    $('#reverse-message').text(newMessage.encode());

    // var strArr = newMessage.read().split(' ');
    // var reversed = strArr.reverse();
    // $('#reverse-message').text(reversed.join(' '));
  });
});
