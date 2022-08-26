var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name?");
console.log("Welcome "+userName+" to the game 'Do You Know Me??'");
var score = 0;

function quiz(question,answer){
  var quizAnswer = readlineSync.question(question);
  if(quizAnswer===answer){
    console.log("Hurray!! You are RIGHT");
    score = score + 1;
  }else{
    console.log("You are WRONG")
  }
  console.log("Your Current Score : "+score);
  console.log("----------------------------");
}

var game = [
  {question : "Where do I live?",
   answer : "bihar" 
  },
   {question : "Who is my favorite SUPERHERO?",
   answer : "deadpool" 
  },
  {question : "What is my favorite Sport?",
   answer : "cricket" 
  },
  {question : "Name a favorite movie",
   answer : "the terminal" 
  },
  {question : "Who is my favorite Indian SUPERHERO?",
   answer : "doga" 
  },
]
for(var i = 0; i < game.length; i++){
  var currentQuiz = game[i];
  quiz(currentQuiz.question,currentQuiz.answer);
}
console.log("Final Score!!!")
console.log("Prateek : 5");
console.log(userName+" : "+score);