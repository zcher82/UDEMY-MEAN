var answer = "Now that's a good question";

//defined a method called "ask" and exposed it via exports.
module.exports.ask = function(question) {
  console.log(question);
  return answer;
};


// in this file, we exposed a method called "ask" by chaining it to the module.exports
