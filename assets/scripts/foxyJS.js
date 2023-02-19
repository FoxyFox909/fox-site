function printFeedback(str){
		document.getElementById('dummy').innerHTML = str
	}
	
	


var elementsToNuke = document.getElementsByClassName('nuke');

function nukeImages() {
	
	for(var i = 0; i < elementsToNuke.length; i++){
	elementsToNuke[i].classList.add('fade');
	}
	
	//document.getElementById('otocyon').classList.remove('fade');
	
	/*document.getElementById('nuke').classList.toggle('fade');
	document.getElementById('otocyon').classList.toggle('fadein');*/
	//setTimeout(function() {
	//	document.getElementById('urocyon').classList.toggle('fadein');
	//}, delayInMilliseconds);
	
	
	
}
	
//fade teh entire div then have one command to specifically bring out the desired image.

function myFunction(){
	let answer = document.getElementById("answer");
	//alert(answer + ' '  + answer.value)
	
	var re = /^[a-z ]+$/i;
	
	if (re.test(answer.value)){
		
		
		var caseArray = [
			/Vulpes vulpes/i,
			/Vulpes lagopus/i,
			/Urocyon/i,
			/Otocyon/i
		];
		
				
		switch (true){
			case caseArray[0].test(answer.value): 
				printFeedback('Correct Answer.');
				break;
			case caseArray[1].test(answer.value):
				printFeedback('That is the fox in the background, but not a red fox.');
				nukeImages();
				break;
			case caseArray[2].test(answer.value):
				printFeedback('That is an island fox, but not a red fox.');
				nukeImages();
				document.getElementById('otocyon').classList.remove('fade');
				break;
			case caseArray[3].test(answer.value):
				printFeedback('That is a bat-eared fox, but not a red fox.');
				break;
			default:
				//document.getElementById('dummy').innerHTML = 'Wrong Answer';
				printFeedback('Wrong answer.') 
		}
		
		//document.getElementById('dummy').innerHTML = answer.value;
	}
	else {
		printFeedback('Only letters, please.');
		
	}
}



