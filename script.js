let div = document.getElementById("buttons");
let correctAnswerAudio = document.getElementById("correct_answer_audio");
let incorrectAnswerAudio = document.getElementById("incorrect_answer_audio");
let green = document.getElementById("green_audio");
function appearWrong1() {
	let object = document.getElementById("wrong1");
	object.classList.toggle("appear");
}

function appearAndDisapearWrong1() {
	let object = document.getElementById("wrong1");
	object.classList.toggle("appear");
	setTimeout(appearWrong1, 2000);
}

function appearCorrect1() {
	let object = document.getElementById("correct1");
	object.classList.toggle("appear");
}

function appearAndDisapearCorrect1() {
	let object = document.getElementById("correct1");
	object.classList.toggle("appear");
	setTimeout(appearCorrect1, 2000);
}

function appearWrong2() {
	let object = document.getElementById("wrong2");
	object.classList.toggle("appear");
}

function appearAndDisapearWrong2() {
	let object = document.getElementById("wrong2");
	object.classList.toggle("appear");
	setTimeout(appearWrong2, 2000);
}

function appearCorrect2() {
	let object = document.getElementById("correct2");
	object.classList.toggle("appear");
}

function appearAndDisapearCorrect2() {
	let object = document.getElementById("correct2");
	object.classList.toggle("appear");
	setTimeout(appearCorrect2, 2000);
}

function changeAnswer() {
	let answer = document.getElementById("correct_answer");
	green.play();
	answer.innerHTML= "green";
}
div.onclick = function test(event) {
	let correct_answer = document.getElementById("correct_answer").innerHTML;
	let target = event.target;
	console.log(target);
	if (target.classList[1] == 'option1') {	
		let option = document.getElementById("option1").innerHTML;
		if (correct_answer == option) {
			correctAnswerAudio.play();
			appearAndDisapearCorrect1();
		} else {
			incorrectAnswerAudio.play();
			appearAndDisapearWrong1();
		}
	} 
	else if (target.classList[1] == "option2") {
		let option = document.getElementById("option2").innerHTML;
		if (correct_answer == option) {
			correctAnswerAudio.play();
			appearAndDisapearCorrect2();
			setTimeout(changeAnswer, 2000);
		} else {
			incorrectAnswerAudio.play();
			appearAndDisapearWrong2();
		}
	}
}
