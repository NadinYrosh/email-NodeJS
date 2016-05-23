exports.Message = function(to, from, messegeText){
  this.to = to;
  this.from = from;
  this.messegeText = messegeText;
}

exports.Messege.prototype.read = function() {
  return "Dear " + this.to + ", " + this.messegeText + " Yours truly, " + this.from;
}
