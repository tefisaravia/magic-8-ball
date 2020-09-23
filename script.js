$(document).ready(function(){


     var magic8Ball = {};

     magic8Ball.listOfAnswers = ["Absolutely", "Try Again", "Probably", "Great things in your future", "Do you think?"];


     $("#answer").hide();

     //define the method
     magic8Ball.askQuestion = function(question) {
          $("#answer").fadeIn(4000);
          //create a random number
          var randomNumber = Math.random();
     
          // make the random number between 0 and the number of items in your array
          var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
     
          // round down the number to be a whole number
          var randomIndex = Math.floor(randomNumberForListOfAnswers);
     
          // use that number to index a random number from the answers array
          var answer = this.listOfAnswers[randomIndex];
          
          $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
          $("#answer").text(answer);
          //delay before showing the 8 ball side again
          setTimeout (
               function(){
                    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
                    $("#answer").hide();
               }, 7000);
     };

     var onClick = function() {
          $("#answer").hide();
          $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
          //wait half a second before showing prompt
          setTimeout( 
               function (){
                    var question = prompt("Ask a YES/NO question", "Will I have a good day?");
                    $("#8ball").effect("shake"); 
                    //wait 2 seconds before showing answer
                    setTimeout(
                         function(){
                              magic8Ball.askQuestion(question);          
                         }, 2000);
               },500);
          
     };

     $("#questionButton").click(onClick);
     
    
});


