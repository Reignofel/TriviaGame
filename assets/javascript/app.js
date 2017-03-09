// GLOBAL VARIABLES
var gameTimer = 20;
var score = 0;
var questionNumber = 0;

var trivia = [
    {
        question: "Who was Denver's leading rusher in the 1999 season?",
       	answerOption1: "Olandis Gary",
      	answerOption2: "Terrell Davis",
      	answerOption3: "Mike Anderson",
      	answerOption4: "Vaughn Hebron",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Olandis Gary</h4>'+ '<br>' + '<h5>Olandis Gary had 1,159 Rushing yards in his 1999 season.</h5>' + '<img class="img-thumbnail" src="http://i.giphy.com/FSrifHD1XAyw8.gif" />');
        }
      },

    {
        question: "How many sacks did Von Miller have in his 2012 season?",
       	answerOption1: "14",
      	answerOption2: "15.5",
      	answerOption3: "22",
      	answerOption4: "18.5",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Von Miller</h4>'+ '<br>' + '<h5>Von Miller had 18. 5 sacks in his 2012 season with the Broncos.</h5>' + '<img src="http://assets.sbnation.com/assets/1718759/supervon.gif" />');
        }
      },

    {
        question: "What arena do the Broncos play in?",
       	answerOption1: "Mile High Stadium",
      	answerOption2: "Barclays Center",
      	answerOption3: "Prudencial Center",
      	answerOption4: "New York Coliseum",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Sports Authority Field at Mile High</h4>'+ '<br>' + '<h5>Sports Authority Field at Mile High was built in 2001 costing 400.7 million dollars. It has a max capacity of 76,125 people.</h5>' + '<img src="https://s-media-cache-ak0.pinimg.com/736x/8f/e0/74/8fe0749249e6bcee6e504449b5ef6dbb.jpg" />');
        }
      },

    {
        question: "How many Super Bowl championships have the Broncos won?",
       	answerOption1: "2",
      	answerOption2: "3",
      	answerOption3: "0",
      	answerOption4: "5",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answerBlock').html('<h4>3</h4>'+ '<br>' + '<h5>The Broncos won championships in the 1998-99 and 2016 seasons.</h5>' + '<img src="http://i.giphy.com/OYNzNp2OI3IZy.gif" />');
        }
      },

    {
        question: "What Quarterback did the Broncos win back to back superbowls with?",
       	answerOption1: "Payton Manning",
      	answerOption2: "John Elway",
      	answerOption3: "Jake Plummer",
      	answerOption4: "Terry Bradshaw",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answerBlock').html('<h4>John Elway</h4>'+ '<br>' + '<h5>John Elway won back to back Superbowl titles in 1998 and 1999.</h5>' + '<img src="http://i.giphy.com/xUPOqeKrYFREHG4Jry.gif" />');
        }
      },

    {
        question: "How many AFC championship appearances do the Broncos have?",
       	answerOption1: "6",
      	answerOption2: "15",
      	answerOption3: "10",
      	answerOption4: "12",
      	correctAnswer: function(){return this.answerOption3},
        postAnswer: function(){
          $('#answerBlock').html('<h4>10 AFC championship appearances</h4>'+ '<br>' + '<h5>The Broncos have 10 AFC championship appearances making them 4th in all time with the best record at 8-2.</h5>' + '<img src="http://i.giphy.com/rz6z1quvw1J72.gif" />');
        }
      },

    {
        question: "Who was Broncos first franchize win against?",
       	answerOption1: "Raiders",
      	answerOption2: "Patriots",
      	answerOption3: "Dolphins",
      	answerOption4: "Chargers",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Boston Patriots</h4>'+ '<br>' + '<h5>On Friday, September 9, 1960 the Broncos defeated the Boston Patriots, in Boston, 13-10. Broncos have a 30-22 all time record against the Patriots.</h5>' + '<img src="http://i.giphy.com/HeQnV4t35HB2o.gif" />');
        }
      },

    {
        question: "Which QB has the most touchdown passes in a single season?",
       	answerOption1: "Tom Brady",
      	answerOption2: "Eli Manning",
      	answerOption3: "Ben Rothlisberger",
      	answerOption4: "Payton Manning",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Payton Manning</h4>'+ '<br>' + '<h5>Payton Manning threw 55 touchdown passes in his 2013 season with the Broncos.</h5>' + '<img src="http://cdn.fansided.com/wp-content/blogs.dir/229/files/2013/12/peyton.gif" />');
        }
      },

    {
        question: "?",
       	answerOption1: "",
      	answerOption2: "$",
      	answerOption3: "$",
      	answerOption4: "$",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answerBlock').html('<h4>$</h4>'+ '<br>' + '<h5></h5>' + '<img src="" />');
        }
      },

    {
        question: "?",
       	answerOption1: "",
      	answerOption2: "",
      	answerOption3: "",
      	answerOption4: "",
        correctAnswer: function(){return this.answerOption3},
        postAnswer: function(){
          $('#answerBlock').html('<h4></h4>'+ '<br>' + '<h5></h5>' + '<img src="" />');
        }
      }
  ];
    

// END OF GAME FUNCTION---------------------------
function endGame (){
  stop();
    $('#answerBlock').html("<h4>Final Score: " + score + "/100" + "</h4>");

    if (score <= 60) {
      $('#question').html("<h3>You're no fan at all!</h3>");
    }
    else if (score == 70) {
      $('#question').html("<h3>Casual Fan</h3>");
    }
    else if (score == 80 || score == 90) {
      $('#question').html("<h3>Diehard Fan</h3>");
    }
    else if (score == 100) {
      $('#question').html("<h3>Fanatic Fan</h3>");
    };

    $("#answerBlock").append("<div class='row'>"+
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='start'>"+"Try Again"+"</button>"+
        "</div>");
    
}

// PUSHES NEXT QUESTION-------------------
function nextQuestion (){
  clearInterval(showQuestion)
   if (questionNumber==10){
    endGame();
  }  
  else {
  $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  $("#answerBlock").html(
    

        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        );
  run();
  };
}

// ------------------ANSWER CHECKING-----------------
var checkAnswer1 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption1 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}

var checkAnswer2 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption2 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}

var checkAnswer3 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption3 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}

var checkAnswer4 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption4 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}
// ----------------------------------------------------------------
// TIMERS
function run(){
    gameTimer=15;
      counter = setInterval(increment, 1000);
    }
    function increment(){
      gameTimer--
      document.getElementById('timer').innerHTML = ('<h6>' + gameTimer + '</h6>')
      if (gameTimer === 0){
        stop();
        postRun();
        trivia[questionNumber].postAnswer();
      }
    }

function postRun (){
  showQuestion = setInterval(nextQuestion, 6000);
  questionNumber++;
}

function stop(){
  clearInterval(counter);
    }


// START GAME FUNCTION------------------------------------------
var startGame = function(){
      score = 0;
      questionNumber = 0;
      run();

   $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  $("#answerBlock").html(
    

        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        ); 
}


// ANSWER/START GAME BUTTONS-------------------------------------
$(document).on('click','#answer1', function(){
  checkAnswer1();
  })

$(document).on('click','#answer2', function(){
  checkAnswer2();
  })

$(document).on('click','#answer3', function(){
  checkAnswer3();
  })

$(document).on('click','#answer4', function(){
  checkAnswer4();
  })

$(document).on('click', '#start', function(){
  startGame();
  })











// for (var i = 0; i <= triviaQuestions.length; i++) {
//   console.log(triviaQuestions[i]);
// };

// PROCESS


// create array of object questions for random selection

// start button
// 	starts timer
// 	loads random question with answer options

// identify which answer is correct
// 	add to score for correct answer
// 	push score depending on selection
// 	start timer to load next question

// after 10 question, show final score and tier

// try again button to run start game

// (tiers for fandom depending on score: not a fan, casual fan, diehard fan, fanatic)