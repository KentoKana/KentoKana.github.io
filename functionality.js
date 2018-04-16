
//Clock display//
function displayTime() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	var to_str
	if (minutes < 10) {
		to_str = hours + ':' + '0' + minutes + ' ';
	} else {
		to_str = hours + ':' + minutes + ' '; 
	}
	
	document.getElementById('time').innerHTML = to_str;

	return to_str;
}

setInterval(displayTime, 1000);

//Greeting selector//
function selectGreetings() {

	var currentTime = new Date();
	var hours = currentTime.getHours();
	var setGreeting; 

	if(hours >= 5 && hours <= 11) {
		setGreeting = "Good Morning, ";
	} else if (hours >= 12 && hours <= 16) {
		setGreeting = "Good Afternoon, "
	} else if (hours >= 16 && hours <= 23) {
		setGreeting = "Good Evening, "
	} else if (hours >= 00 && hours <= 4){
		setGreeting = "It's getting late, "
	}

	return setGreeting;
}

var greet = selectGreetings();

console.log(greet)

function displayGreeting() {
	var name = 'Kento';
	return document.getElementById('greeting').innerHTML = greet + name + '.';
}

var sayGreeting = displayGreeting()

setInterval(displayGreeting, 1000);


//Change background image based on greeting//
function changeBG() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	if (hours >= 16 && hours <= 23 || hours >= 0 && hours <= 4) {
		return  document.body.style.backgroundImage = "url('BoW-Night.jpg')";
	} else {
		return document.body.style.backgroundImage = "url('BoW-Morning.jpg')";
	}
	
}

setInterval(changeBG, 1000);
