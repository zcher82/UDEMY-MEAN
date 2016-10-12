
//this variable is not exposed on it's own to app.js, but because it is used in the "intro" function, it will be known in app.js
var filename = "index.js";


//the methods/functions below are exposed through module.exports -- they are used through calling file, app.js
var hello = function(name) {
  console.log("hello " + name);
};

var intro = function () {
  console.log("I'm a node file called " + filename);
};

module.exports = {
  hello : hello,
  intro : intro
};

// in this file, we defined some functions then returned those using module.exports function
