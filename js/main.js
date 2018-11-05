// questions
var questions = [
	{
		question : "What HTML tags are needed for a basic HTML file structure?",
		answers  : [" html, head, body", " html, toe, body", " html, head, hand", " What is a HTML file?"],
		correct  : "html, head, body"
	},
	{
		question : "What is the paragraph tag used for?",
		answers  : [" to create paragraph text on a CSS page", " to create heading text on a HTML page", " to create heading text on a CSS page", " to create paragraph text on a HTML page"],
		correct  : " to create paragraph text on a HTML page"
	},
	{
		question : "What are 3 ways to write CSS?",
		answers  : [" External Style Sheet, External Style Tag & Inline Style", " External Style Sheet, Internal Style Tag & Inline Style", " Inline Style Sheet, Internal Style Tag & Inline Style", " External Style Sheet, Internal Style Tag & Inline Style Sheet"],
		correct  : " External Style Sheet, Internal Style Tag & Inline Style"
	},
	{
		question : "How to declare an HTML file type?",
		answers  : [" <!CSS doctype>", " <!HTML doctype>", " <!DOCTYPE CSS>", " <!DOCTYPE html>"],
		correct  : " <!DOCTYPE html>"
	},
	{
		question : "Where in your HTML file do you link to your CSS file?",
		answers  : [" What is CSS?", " In between the opening and closing head tags", " In between the opening and closing body tags", " In between the opening and closing heading tags"],
		correct  : " In between the opening and closing head tags"
	},
	{
		question : "How many different heading tags are there?",
		answers  : [" 6", " 5", " 7", " 2"],
		correct  : " 6"
	},
	{
		question : "What does CSS stand for?",
		answers  : [" Cascading Smile Sheets", " Cascading Style Stuff", " Cascading Style Sheets", " Hypertext Markup Language"],
		correct  : " Cascading Style Sheets"
	}
];

// create HTML
function populate() {

	// declare variables
	var div = document.createElement('div');
	var row = document.createElement('div');
	var col = document.createElement('div');
	var h1 = document.createElement('h1');
	var button = document.createElement('button');

	// variable attributes
	document.body.className = "text-center"
	div.className = 'container pt-5';
	row.className = 'row';
	col.className = 'col-sm-12 mx-auto';
	col.id = 'col1';
	h1.textContent = 'Mulriple Choice Quiz';
	button.className = 'btn btn-primary btn-lg';
	button.textContent = 'Start Quiz';
	button.onclick = startQuiz;

	// append elements
	col.appendChild(h1);
	col.appendChild(button);
	row.appendChild(col);
	div.appendChild(row);
	document.body.appendChild(div);

};
// populates
populate();


// start the quiz
function startQuiz() {
	document.getElementById('col1').innerHTML = '';
	createQuestion();
};

// creates question
function createQuestion() {
	for (var i = 0; i < 1; i++) {
		document.getElementById('col1').innerHTML = '';

		// make variables
		var questDiv = document.createElement('div');
		var questEl = document.createElement('h3');
		var questText = document.createTextNode(questions[i].question);

		// append
		questDiv.id = 'questDiv';
		questEl.appendChild(questText);
		questDiv.appendChild(questEl);
		document.getElementById('col1').appendChild(questDiv);

		// create answers with for loop
		for (var x = 0; x < questions[i].answers.length; x++) {
			// create elements
			var ansDiv = document.createElement('div');
			var asEl = document.createElement('input');

			var ansText = document.createTextNode(questions[i].answers[x]);
			// append elements
			ansDiv.appendChild(asEl);
			ansDiv.appendChild(ansText);

			// element attributes
			ansDiv.className = 'questionWrap';
			asEl.type = "radio";
			asEl.name = 'radio'+[i];
			asEl.value = questions[i].answers[x];

			// append to div
			questDiv.appendChild(ansDiv);

		};
	};

	// create submit button
	var submitBtn = document.createElement('button');

	submitBtn.className = 'btn btn-lg btn-primary mt-3';
	submitBtn.textContent = 'Submit Answer';
	submitBtn.type = 'button';
	submitBtn.onclick = submitAnswer;

	questDiv.appendChild(submitBtn);
};




function submitAnswer() {
	// get all input tags with possible answers
	var els = document.getElementsByTagName("input");

	// loop through those inputs
	for (var i = 0; i < els.length; i++) {
		// check which radio is checked and if the user answer is correct
		if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()) {
			// confirm for develpoer that the user got the question correct
			console.log("Correct Answer", els[i]);

			// remove the current question from the questions array
			questions.shift();

			// find parent and add class of right
			els[i].parentElement.className = "questionWrap right";

			// check to see if there are any more questions, if 0 then Game Over
			if(questions.length == 0) {
				// clear any previous html
				var questDiv = document.getElementById('questDiv');
				questDiv.innerHTML = "";

				// update styles of questionForm
				questDiv.style.textAlign = "center";
				questDiv.style.margin  = "0 auto";

				// Display GAME OVER to user
				questDiv.innerHTML = "<h1>Good Job, You Completed the Quiz!</h1>" + "<br>" +  "<img src='img/success.jpg'>";

				// stop the function when the user wins
				return;
			};

			// if the user is correct and more questions exist, move to the next question
			setTimeout(function(){
				createQuestion();
			}, 500);

			// stop the function, user got it correect
			return;
		};
	};

	// confirm for develpoer that the user got the question incorrect
	console.log("Incorrect Answer");

	// find the parent of the input element and add a class of wrong to it
	for (var i = 0; i < els.length; i++) {
		// find current radio checked
		if (els[i].checked) {
			// find parent and add class of wrong
			els[i].parentElement.className = "questionWrap wrong";
		};
	};
};















