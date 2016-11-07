function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function sayHeyThere() {
    console.log("hey there")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function.");
  }
}
