/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Roy McElmurry
// Alarm clock of awesomeness

"use strict";

var timer = null;

window.onload = function() {
	document.getElementById('go').onclick = countdown;
};

function countdown() {
	if (timer === null) {
		timer = setInterval(decrement, 1000);
	}
}

function decrement() {
	var min = document.getElementById('min').value;
	var sec = document.getElementById('sec').value;
	if (sec > 0) {
		sec--;
	} else if (min > 0) {
		min--;
		sec = 59;
	} else {
		clearInterval(timer);
		timer = null;
		document.body.style.backgroundColor = "red";
	}

	document.getElementById('min').value = min;
	document.getElementById('sec').value = sec;
}