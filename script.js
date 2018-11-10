$(document).ready(function(){

var magicBall = {};

magicBall.listOfAnswers = [ "It is certain", "It is decidedly so", "Without a doubt", "Yes /– definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good, yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good,Very doubtful" ];

magicBall.askQuestion = function (question){

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  var randomNumber = Math.random();
  var randomNumberArray = randomNumber * this.listOfAnswers.length;
  var randomIndex = Math.floor(randomNumberArray);
  var randomanswer = this.listOfAnswers[randomIndex];

  $("#answer").text( randomanswer );

  console.log(question);
  console.log(randomanswer);
};

var onClick = function()
{
  $("#8ball").effect( "shake" );

  $("#answer").hide();

  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

	  setTimeout(
       function() {
          //$("#answer").fadeIn(4000);
         var question = prompt("Type in your question for the Magic 8 Ball")
           magicBall.askQuestion(question)
           $("#answer").fadeIn(4000);
       }, 500);

};
	$("#questionButton").click( onClick );
});
