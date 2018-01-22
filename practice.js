/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var name = 'Tyler';
// Do not edit the code above.

/*
  Create a function called isTyler that accepts name as it's only parameter.
  If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
*/

 function isTyler(name){
  if(name === "Tyler")
  {
    return true;
  }
  else if (name != "Tyler")
  {
    return false;
  }
}



////////// PROBLEM 2 //////////

/*
  Create a function called getName that uses prompt() to prompt the user for their name and then returns the given name.
*/

function getName(){
let yourName = prompt("What is your name?");
return yourName;
}



////////// PROBLEM 3 //////////

/*
  Create a function called welcome that uses your getName function you created in the previous problem to get the user's name.
  Then alert "Welcome, " plus the given user's name.

  Example: "Welcome, Bob Joe"
*/

function welcome(){
  return alert("Welcome, " + getName());
}



////////// PROBLEM 4 //////////

/*
  What is the difference between arguments and parameters?
*/

//arguments are values that will be passed in and prameters are place holders for a value



////////// PROBLEM 5 //////////

/*
  What are all the falsy values in JavaScript and how do you check if something is falsy?
*/

// null ,undefind ,false ,0 
// check to see if it is false would be 3 != 4  that would equal true


////////// PROBLEM 6 //////////

/*
  Create a function called myName that returns your name
*/
function myName(){
  return "Garrett";
}


  


/*
  Now save the function definition of myName into a new variable called newMyName
*/

function newMyName (){
  return myName();
}


/*
  Now alert the result of invoking newMyName
*/


alert(newMyName);


////////// PROBLEM 7 //////////

/*
  Create a function called outerFn which returns an anonymous function which returns your name.
*/

var outerFn = function (){
  return function(){
    return "Garrett";
  };
}


/*
  Now save the result of invoking outerFn into a variable called innerFn.
*/

let innerFn = outerFn();



/* 
  Now invoke innerFn.
*/

innerFn();