let localTime = document.getElementById('showTime');
let hourMenu = document.getElementById('forHour');
let minuteMenu = document.getElementById('forMinute');
let secondMenu = document.getElementById('forSec');
let ampm = document.getElementById('AmPm');
let sTa = document.getElementById('showAlarmTime');
let sound = new Audio("tone.mp3");
sound.loop = false;
var activeAlarm = false;
var alarmTime;


function showTime() {
    var now = new Date();
    var currentTime = now.toLocaleTimeString();
    localTime.innerHTML = currentTime;
    setInterval(showTime, 1000);

    if (alarmTime === currentTime) {
        sound.play();
    }
}
showTime();

//adding values into minute and second options
function addValues(id) {
    var menuVal = id;
    val = 59;

    for (var i = 0; i <= val; i++) {
        menuVal.options[menuVal.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}
//adding values into hours option
function addValuesToHour(id) {
    var menuHr = id;
    hr = 12;
    for (var i = 0; i <= hr; i++) {
        menuHr.options[menuHr.options.length] = new Option(i);
    }
}
addValuesToHour(hourMenu);
addValues(minuteMenu);
addValues(secondMenu);


function setAlarm() {
    if (activeAlarm === false) {
        hourMenu.disabled = true;
        minuteMenu.disabled = true;
        secondMenu.disabled = true;
        ampm.disabled = true;


        alarmTime = hourMenu.value + ":" + minuteMenu.value + ":" + secondMenu.value + " " + ampm.value;
        sTa.innerHTML = "Alarm has been seted at " + hourMenu.value + ":" + minuteMenu.value + ":" + secondMenu.value + " " + ampm.value;
        activeAlarm = true;


        if (alarmTime == "0:00:00 AM" || alarmTime == "0:00:00 PM" || hourMenu.value == "0") {
            hourMenu.disabled = false;
            minuteMenu.disabled = false;
            secondMenu.disabled = false;
            ampm.disabled = false;
            activeAlarm = false;
            sTa.innerHTML = "";
            // sTa.style.marginTop = "0px";
            popUpBox.classList.toggle('showPopup');
            blurBack.classList.toggle('blurWrapper');
            return false;
        }
    }
}

function removeAlarm() {
    if (activeAlarm === true) {
        hourMenu.disabled = false;
        minuteMenu.disabled = false;
        secondMenu.disabled = false;
        ampm.disabled = false;
        activeAlarm = false;

        sTa.innerHTML = "";

        hourMenu.value = '0';
        minuteMenu.value = '00';
        secondMenu.value = '00';

        sound.pause();
    }
}



var blurBack = document.getElementById('wrapper');
var popUpBox = document.getElementById('popUpBox');
var cross = document.getElementById('cross');
var okBtn = document.getElementById('okBtn');

function removePOPup() {
    popUpBox.classList.remove('showPopup');
    blurBack.classList.remove('blurWrapper');
}