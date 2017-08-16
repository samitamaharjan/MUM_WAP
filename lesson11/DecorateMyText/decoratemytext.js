/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var timer = null;
function goAlert() {
    if (timer === null) {
        timer = setInterval(changeFontSize, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }
}
function changeFontSize() {
    var textsample = document.getElementById("textsample");
    // textsample.style.fontSize = "24pt";
    var originalFontSize = parseInt(getComputedStyle(textsample).getPropertyValue("font-size"));
    originalFontSize += 2;
    textsample.style.fontSize = originalFontSize + "pt";
}

function methodOnChange(){
    var textArea= document.getElementById("textsample");
    var checkbox= document.getElementById("checkBling");
    if(checkbox.checked){
        textArea.style.fontWeight="bold";
        textArea.style.color="green";
        textArea.style.textDecoration="underline";
        document.body.style.backgroundImage="url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    }else{
        textArea.style.fontWeight="normal";
        textArea.style.color="black";
        textArea.style.textDecoration="none";
        document.body.style.backgroundImage="none";
    }  
}

function malkovitch() {
    var text = document.getElementById("textsample");
    var words = text.value.split(" ");
       
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].replace(words[i], "Malkovitch");
        } 
    }
    text.value = words.join(" ");
}

function igpayAtinlay() {
    var text = document.getElementById("textsample");
    var words = text.value.split(" ");
    var arr=[];
    var arr1 = [];
    var arr2 = [];
    
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        if (word.charAt(0) === 'a' || word.charAt(0) === 'e' || word.charAt(0) === 'i' 
                || word.charAt(0) === 'o' || word.charAt(0) === 'u') {
            arr1[i] = words[i] + "ay";
             // arr1.push(word.concat("ay"));
        } else {
            arr2[i] = words[i] + "ay";
            // arr2.push(word.concat("ay"));
        }
        console.log(arr1);
        console.log(arr2);
        arr = arr1.concat(arr2);
        console.log(arr);
        text.value = arr.join(" ");
    }
}



