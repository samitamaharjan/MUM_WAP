/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var timer;
var frame;
var count = 0;
window.onload = function() {
    document.getElementById("start").onclick = startActivity;
    document.getElementById("stop").onclick = stopActivity;  
    document.getElementById("gameType").onchange = selectActivity;
    document.getElementById("turbo").onchange = clickOnTurbo; 
    document.getElementById("sizeType").onchange = changeFontSize;
};

function selectActivity() {
    var textbox = document.getElementById("textBox");
    var gameType = document.getElementById("gameType");
    if (gameType.value === "blank") {
        frame = ANIMATIONS["Blank"].split("=====\n");
    }
    else if (gameType.value === "exercise") {
        frame = ANIMATIONS["Exercise"].split("=====\n");
    }
    else if (gameType.value === "juggler") {
        frame = ANIMATIONS["Juggler"].split("=====\n");
    }
    else if (gameType.value === "bike") {
        frame = ANIMATIONS["Bike"].split("=====\n");
    }
    else if (gameType.value === "dive") {
        frame = ANIMATIONS["Dive"].split("=====\n");
    }
    
    textbox.value = frame.join("\n");
}
function startActivity() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("gameType").disabled = true;
    
    var gameType = document.getElementById("gameType");
    if (gameType.value === "blank") {
        frame = ANIMATIONS["Blank"].split("=====\n");
    }
    else if (gameType.value === "exercise") {
        frame = ANIMATIONS["Exercise"].split("=====\n");
    }
    else if (gameType.value === "juggler") {
        frame = ANIMATIONS["Juggler"].split("=====\n");
    }
    else if (gameType.value === "bike") {
        frame = ANIMATIONS["Bike"].split("=====\n");
    }
    else if (gameType.value === "dive") {
        frame = ANIMATIONS["Dive"].split("=====\n");
    }
    
    clearInterval(timer);
    if (document.getElementById("turbo").checked) {
            timer = setInterval(changeSpeed, 50);
    } else {
        timer = setInterval(changeSpeed, 250);
    }    
}

function changeSpeed() { 
    var textbox = document.getElementById("textBox");
    textbox.value = frame[count];
    if (count >= frame.length - 1) {
        count = 0;
    } else {
        count++;
    }
}

function clickOnTurbo() {
    clearInterval(timer);
    if (document.getElementById("turbo").checked) {
        if (document.getElementById("start").disabled) {
            timer = setInterval(changeSpeed, 50);
        }
    } else {
        if (document.getElementById("start").disabled) {
            timer = setInterval(changeSpeed, 250);
        }
    }
}

function changeFontSize() {
    var textbox = document.getElementById("textBox");
    var textsize = document.getElementById("sizeType");
    if (textsize.value === "tiny") {
        textbox.style.fontSize = "7pt";
    }
    else if (textsize.value === "small") {
        textbox.style.fontSize = "10pt";
    }
    else if (textsize.value === "medium") {
        textbox.style.fontSize = "12pt";
    }
    else if (textsize.value === "large") {
        textbox.style.fontSize = "16pt";
    }
    else if (textsize.value === "extraLarge") {
        textbox.style.fontSize = "24pt";
    }
    else if (textsize.value === "xxl") {
        textbox.style.fontSize = "32pt";
    }
}

function stopActivity() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("gameType").disabled = false;
    clearInterval(timer);
    timer = null;
}

