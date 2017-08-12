var triviaQuestions = [{
	question: "What is Neo's real name?",
	answerList: ["John P Black", "Timothy J Washington", "James L Burns", "Thomas A Anderson"],
	answer: 3
},{
	question: " What is the name of Morpheus's ship?",
	answerList: ["Voyager", "Hammer", "Nebuchadnezzar", "Phoenix"],
	answer: 2
},{
	question: "By what name are the sentinels more commonly referred to?",
	answerList: ["Scanners", "Sweepers", "Reapers", "Squiddies"],
	answer: 3
},{
	question: "The predominant wardrobe color in the Matrix is black. Which character defies this trend?",
	answerList: ["Switch", "Mouse", "Trinity", "Cypher"],
	answer: 0
},{
	question: "What is the phrase written above the door in the Oracle's kitchen?",
	answerList: ["Caveat Emptor", "Temet Nosce", "Mihi Mater Piscis Est", "Et Tu Brute"],
	answer: 1
},{
	question: "What is Cypher's real last name?",
	answerList: ["Reagan", "Nixon", "Ford", "Clinton"],
	answer: 0
},{
	question: "We know Agent Smith, what are the names of the other two agents that are featured in the first Matrix movie. ",
	answerList: ["Agent Brown and Agent Jones", "Agent Thompson and Agent Davidson", "Agent Johnson and Agent Jackson", "They are never named."],
	answer: 0
},{
	question: "What is the first martial art form Neo learns?",
	answerList: ["Tae Kwon Do", "Karate", "Kung Fu", "Ju Juitsu/Ju-Jitsu"],
	answer: 3
},{
	question: "Neo surprises Cypher while he's 'Monitoring the Matrix'. What is he supposedly watching/looking at?",
	answerList: ["Baseball", "Agents", "Police Activity", "Girls"],
	answer: 3
},{
	question: "From what telephone number does Trinity contact Cypher during the opening credits?",
	answerList: ["555-1234", "555-0001", "555-0690", "555-5309"],
	answer: 2
},{
	question: "What profession does Cypher wish to have when he re-enters the Matrix?",
	answerList: ["Politician", "Agent", "Actor", "Baseball Player"],
	answer: 2
},{
	question: "What animals are shown on the TV in the Oracle's apartment?",
	answerList: ["Dogs", "Birds", "Tigers", "Rabbits"],
	answer: 3
},{
	question: "When taken, which of the pills Morpheus offers allows the recipient to remain inside the Matrix?",
	answerList: ["Red", "Blue", "Yellow", "Green"],
	answer: 1
},{
	question: "What popular children's book is referenced by Morpheus when trying to explain the Matrix to Neo?",
	answerList: ["The Wizard of Oz", "Alice in Wonderland", "The Cat in the Hat", "The Phantom Tollbooth"],
	answer: 1
},{
	question: "What television show personality's name does Neo call Tank over the cell phone?",
	answerList: ["MacGuyver", "Superman", "Bill Nye", "Mr. Wizard"],
	answer: 3
}];

var wins = correctAnswer;
var losses = incorrectAnswer;
var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Yes, that's right!",
	incorrect: "No, that's not it.",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you did."
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#next').on('click', function(){
	$(this).hide();
	clearInterval(newQuestion);
	newQuestion();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

// function nextQuestion(prototype){
// 	clearInterval(newQuestion);
// 	$('#message').empty();
// 	$('#correctedAnswer').empty();
// 	$('#gif').empty();
// 	answered = true;
	
// 	//sets up new questions & answerList
// 	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
// 	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
// 	for(var i = 0; i < 4; i++){
// 		var choices = $('<div>');
// 		choices.text(triviaQuestions[currentQuestion].answerList[i]);
// 		choices.attr({'data-index': i });
// 		choices.addClass('thisChoice');
// 		$('.answerList').append(choices);
// 		clearInterval(time);
// 		clearInterval(newQuestion);
// 	}
// 	countdown();
// 	//clicking an answer will pause the time and setup answerPage
// 	$('.thisChoice').on('click',function(){
// 		userSelect = $(this).data('index');
// 		clearInterval(time);
// 		var answered = userSelect;
// 		answerPage();
// 	});
// }

function newQuestion(){
	clearInterval(newQuestion);
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
		clearInterval(newQuestion);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		var answered = userSelect;
		answerPage();
	});
}


function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 3000);
	console.log(time);
	console.log("Hint: " + triviaQuestions[currentQuestion].answer)
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();
	$('#next').show();
	$('#next').html('Next');

	//

	// var userAnswerText = userSelect;
	console.log(this.userSelect);
	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswer = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswer) && (answered == true)){
		var userAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
		console.log("The user picked: " + userSelect);
		console.log("The correct choice was: " + rightAnswer);
		console.log("Did the user answer? " + answered);
		console.log("The user answered: " + userAnswerText);
		correctAnswer++;
		console.log('The correct answer was: ' + rightAnswerText);
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswer) && (answered == true)){
		console.log("The user picked: " + userSelect);
		console.log("Did the user answer? " + answered);
		incorrectAnswer++;
		console.log('The correct answer was: ' + rightAnswerText);
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		console.log(messages.endTime);
		console.log("Did the user answer? " + answered);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
				console.log('The correct answer was: ' + rightAnswerText);
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 10  * 1000)
		console.log(setTimeout);
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 10  * 1000);
		console.log();
	}	
}



function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();


	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}


// Source for questions/Answers: http://www.braingle.com/trivia/quiz.php?id=4773