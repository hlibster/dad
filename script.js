let div = document.getElementById("buttons");
let correctAnswerAudio = document.getElementById("correct_answer_audio");
let incorrectAnswerAudio = document.getElementById("incorrect_answer_audio");


div.onclick=function test(event) {
	let correct_answer = document.getElementById("correct_answer").innerHTML;
	let target = event.target;
	console.log(target);
	if (target.classList[1] == 'option1') {	
		console.log('Works');
		let option = document.getElementById("option1").innerHTML;
		if (correct_answer == option) {
			alert("Correct!");
			correctAnswerAudio.play();
		} else {
			alert("Wrong!");
			incorrectAnswerAudio.play();
		}
	} 
	else if (target.classList[1] == "option2") {
		let option = document.getElementById("option2").innerHTML;
		if (correct_answer == option) {
			alert("Correct!");
			correctAnswerAudio.play();
		} else {
			alert("Wrong!");
			incorrectAnswerAudio.play();
		}
	}
}