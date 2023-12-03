
let isAddClicked = false
let isAlarmSet = false


function openAdderWindow() {
    isAddClicked = !isAddClicked
    var adder = document.getElementById("alarm-adder");
    if(isAddClicked) {
        adder.style.display = "flex"
        adder.style.zIndex = 2
    }else{
        adder.style.display = "none"
    }
}

function doneButton() {
    isAddClicked = !isAddClicked
    var adder = document.getElementById("alarm-adder");
    if(isAddClicked) {
        adder.style.display = "flex"
        adder.style.zIndex = 2
    }else{
        adder.style.display = "none"
    }
    alarmSet();
}




var sound = new Audio('./audio/alarm-audio.mp3');
		sound.loop = true;

// let time = document.getElementById("clock");
// display current time by the second
var currentTime = setInterval(function(){
	var date = new Date();
	// console.log(date);
	var hours = (12 - (date.getHours()));
	// var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


	//convert military time to standard time

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 0) {
		hours = 12;
	} else {
		hours = hours;
	}

	// console.log(addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm);
    document.getElementById("clock").textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
	
},1000);


/*functions to get hour, min, secs, 
  am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {
		return (time < 10) ? "0" + time : time;
}

function hoursMenu(){

	var select = document.getElementById('alarmhrs');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		document.getElementById('alarmhrs').options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();

function minMenu(){

	var select = document.getElementById('alarmmins');
	var min = 59;

	for (i=0; i <= min; i++) {
		document.getElementById('alarmmins').options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

function secMenu(){

	var select = document.getElementById('alarmsecs');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		document.getElementById('alarmsecs').options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();




function displayAlarm() {
    if(isAlarmSet){


    document.getElementById('upcoming-alarm').style.display = "flex";
    var hr = document.getElementById('alarmhrs');
	
	var min = document.getElementById('alarmmins');
	
	var sec = document.getElementById('alarmsecs');
	
	var ap = document.getElementById('ampm');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;
        document.getElementById("alarm-display").textContent = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    }else{
        document.getElementById('upcoming-alarm').style.display = "none";
    }
}


function alarmSet() {

	var hr = document.getElementById('alarmhrs');
	
	var min = document.getElementById('alarmmins');
	
	var sec = document.getElementById('alarmsecs');
	
	var ap = document.getElementById('ampm');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    // console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;


//when alarmtime is equal to currenttime then play a sound
	var h2 = document.getElementById('clock');
    isAlarmSet = true;
    displayAlarm();
/*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){

	var date = new Date();
	
	var hours = (12 - (date.getHours()));
	// var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


	//convert military time to standard time

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 0) {
		hours = 12;
	} else {
		hours = hours;
	}
	
	var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
	

	if (alarmTime == currentTime) {
		sound.play();
		}

},1000);


	// console.log('currentTime:' + currentTime);	

}


function alarmClear() {

	document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
	document.getElementById('alarmsecs').disabled = false;
	document.getElementById('ampm').disabled = false;
	sound.pause();
    isAlarmSet = false;
    // console.log(isAlarmSet);
    displayAlarm();
}


