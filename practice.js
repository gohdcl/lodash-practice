var _ = require("./node_modules/lodash/lodash");

var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
nextAnimal;

nextAnimal = _.sample(favoriteAnimals);
assert(nextAnimal, "Assign something to nextAnimal");

_.contains([ "beep", "boop", "bop" ], "bop");
_.contains([ "beep", "boop", "bop" ], "elephant");

var wheresWaldo = function(arguments) {
  _.forEach(arguments, function(object) {
    console.log(object);
    var objectStringArray = object.toString().split("");
    console.log(objectStringArray);
    for(var i = 0; i < objectStringArray.length; i++) {
      if(objectStringArray[i] === "w") {
        console.log("Found w");
        if(objectStringArray[i + 1] === "a") {
          console.log("Found a");
          if(objectStringArray[i + 2] === "l") {
            console.log("Found l");
            if(objectStringArray[i + 3] === "d") {
              console.log("Found d");
              if (objectStringArray[i + 4] === "o") {
                console.log("Found o");
                return object.toString();
              }
            }
          }
        }
      }
    } // end for
  });
};

assert(wheresWaldo(["walls", "dr. seuss", "waldorf salad", "shel silverstein", "waldo"]) === "waldorf salad", "Waldo not found");
assert(_.contains(favoriteAnimals, nextAnimal) === true, "nextAnimal isn't in favoriteAnimals");
// ************* HELPER **************
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}
