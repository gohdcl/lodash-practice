var _ = require("./node_modules/lodash/lodash");

// TODO: Erase this if statment before you start
if(_){
 console.log("lodash is defined!");
}

var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
nextAnimal;

nextAnimal = _.sample(favoriteAnimals);
assert(nextAnimal, "Assign something to nextAnimal");

// ************* HELPER **************
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}
