require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("Zeng");

var newAnswer = question.ask("What is the meaning of life?");
console.log(newAnswer);

goodbye();
