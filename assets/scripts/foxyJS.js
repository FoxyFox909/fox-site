
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}


function randomizeStart() {
	const foxImagesArray = [
	
	'assets/images/fox-gb22281a66_1920.jpg',
	'assets/images/49697828656_0aea963a89_k.jpg',
	'assets/images/2530710866_f7d249a162_k.jpg'
	
	
	]
	
	var chosenFox = getRandomInt(foxImagesArray.length);
	
	console.log(chosenFox);
	document.getElementById('starter-bg').src=(foxImagesArray[chosenFox])
	
	//setTimeout(() => {document.getElementById('starter-bg').src=(foxImagesArray[chosenFox])}, 500);
	
}



function printFeedback(str){
		document.getElementById('dummy').innerHTML = str;
	}
	

	


var elementsToNuke = document.getElementsByClassName('nuke');

function nukeImages() {
	
	for(var i = 0; i < elementsToNuke.length; i++){
	elementsToNuke[i].classList.add('fade');
	}		
		
}
	


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
		
		//fade the entire div then  specifically bring out the desired image.			
		switch (true){
			case caseArray[0].test(answer.value): 
				printFeedback('Correct Answer.');
				break;
			case caseArray[1].test(answer.value):
				printFeedback('That a snowy (arctic) fox, built for winter.');
				nukeImages();
				document.getElementById('vulpes-lagopus').classList.remove('fade');
				break;
			case caseArray[2].test(answer.value):
				printFeedback('That is an island fox, smaller than a house cat.');
				nukeImages();
				document.getElementById('otocyon').classList.remove('fade');
				break;
			case caseArray[3].test(answer.value):
				printFeedback('That is a bat-eared fox. The ears are radiators.');
				nukeImages();
				document.getElementById('urocyon').classList.remove('fade');
				break;
			default:
				//document.getElementById('dummy').innerHTML = 'Wrong Answer';
				printFeedback('Wrong answer.') 
		}
		
		//document.getElementById('dummy').innerHTML = answer.value;
	}
	else {
		printFeedback('Enter letters only, please.');
		
	}
}



