//Pre-Loading Screen====================================//

var preload = document.getElementById('preloadTriforce');
var bodyContent = document.getElementById('body');
var navi = document.getElementById('navigation');
var timeLoad = document.getElementById('time');
var greetLoad = document.getElementById('greeting');
var searchLoad = document.getElementById('searching');


var loaded = false;

function displayOff(){
	if(loaded === false){
		navi.style.display="none";
		timeLoad.style.display="none";
		greetLoad.style.display="none";
		searchLoad.style.display="none";
	} 
}

function pageLoaded(){
	setInterval(function(){
		loaded = true;
		if(loaded === true && preload.className === "preloadImg"){
			preload.className = "preloadOff";
			document.body.style.display = ""
			navi.style.display = "";
			timeLoad.style.display="";
			greetLoad.style.display="";
			searchLoad.style.display="";
			console.log('the page is loaded');
		}
	}, 2000)
}


//Clock display=======================================//
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

//Greeting selector==================================//
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

function displayGreeting() {
	var name = 'Kento';
	document.getElementById('greeting').innerHTML = greet + name + '.';
}

var sayGreeting = displayGreeting()

setInterval(displayGreeting, 1000);


//Change background image based on time===============//
function changeBG() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	if (hours >= 16 && hours <= 23 || hours >= 0 && hours <= 4) {
		document.body.style.backgroundImage = "url('BoW-Night.jpg')";
	} else {
		document.body.style.backgroundImage = "url('BoW-Morning.jpg')";
	}
	
}

setInterval(changeBG, 1000);

//Make Sheikah symbol glow when hovered over nav links//

var animation = false;
var background = document.getElementById("nav-backdrop");

function glowOn() {
	animation = true;
	if (background.className === "sheikah") {
		background.className += " active";
	}
}

function glowOff() {
	animation = false;
	setTimeout(function() {
		if (animation == false && background.className === "sheikah active") {
			background.className = "sheikah";
		}
	}, 50)
}

