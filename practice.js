//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      reference the object that called the function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      implicit: what is left of the dot at call time
      explicit: this references an object specified by .bind, .call, or .apply

  // 3) What is the difference between call and apply?

      call arguments are listed normally, divided by commmas. apply arguments are given in an array

  // 4) What does .bind do?

      returns a new function in which this will always reference the specified object


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: 'lll',
      email: "a@aa",
      getUsername: function(){
        return this.username; 
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();
//Next Problem


// Write the function definitions which will make the following function invocations function properly.

var Car = function(a, b, c) {
  return { 
    make: a,
    model: b,
    year: c,
    move: 0,
    moveCar: function() {
      this.move = this.move + 10;
    },
  }
}

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); 
mustang.moveCar();

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking move on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

getYear.call(prius);
getYear.call(mustang);



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
