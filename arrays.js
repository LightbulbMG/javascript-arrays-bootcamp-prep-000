var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

    console.log(chocolateBars);


var colors = beginArray("blue", "orange", "black", "pink");


var begin = function addElementToBeginningOfArray(colors, color){
  
  console.log(begin, "green");
  };


var cards = cardArray("king", "queen", "jack", "10");

var card = function destructivelyAddElementToBeginningOfArray(deck){
  cards.unshift("ace");
  console.log(card);
  };

var end = function addElementToEndOfArray(){
  learn("learn", "to");
  
  console.log(end + "code");
  };

var ser = function destructivelyAddElementToEndOfArray(){
  rock("software", "engineers");
  
  rock.push("rock");

  console.log(ser);
  };

{
var accessElementInArray = ["women", "who", "code", "rock"];

  console.log(accessElementInArray[0]);
}

{
var destructivelyRemoveElementFromBeginningOfArray = ["2pac", "biggie", "nas", "jay z"];
  
  destructivelyRemoveElementFromBeginningOfArray.shift();
  
  console.log(destructivelyRemoveElementFromBeginningOfArray);
}

{
var removeElementFromBeginningOfArray = ["mac", "dell", "hp", "lenovo"];
  
  removeElementFromBeginningOfArray = removeElementFromBeginningOfArray.slice(1);
  
  console.log(removeElementFromBeginningOfArray);
}

{
var destructivelyRemoveElementFromEndOfArray = ["Earth", "Mars", "Venus"];

  destructivelyRemoveElementFromEndOfArray = destructivelyRemoveElementFromEndOfArray.pop();
  
  console.log(destructivelyRemoveElementFromEndOfArray);
}

{
var removeElementFromEndOfArray = ["lol", "tbt", "lmao", "ikr"];
  
  removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1);
  
  console.log(removeElementFromEndOfArray);
}