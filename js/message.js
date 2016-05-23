exports.Message = function(to, from, messageText){
  this.to = to;
  this.from = from;
  this.messageText = messageText;
}

exports.Message.prototype.read = function() {
  return "Dear " + this.to + ", " + this.messageText + " Yours truly, " + this.from;
}

exports.Message.prototype.encode = function() {
  return this.from + " truly, Yours " + this.messageText + " , " + this.to + " Dear";
}
