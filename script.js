let div = document.getElementById("buttons");


div.onclick=function test(event) {
	let correct_answer = document.getElementById("correct_answer").innerHTML;
	let target = event.target;
	console.log(target);
	if (target.classList[1] == 'option1') {	
		console.log('Works');
		let option = document.getElementById("option1").innerHTML;
		if (correct_answer == option) {
			alert("Correct!");
		} else {
			alert("Wrong!");
		}
	} 
	else if (target.classList[1] == "option2") {
		let option = document.getElementById("option2").innerHTML;
		if (correct_answer == option) {
			alert("Correct!");
		} else {
			alert("Wrong!");
		}
	}
}