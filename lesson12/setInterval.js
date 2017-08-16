/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var timer = null; 
var rudyTimer = (function() {      
    var rudyPrint=function() {  
        document.getElementById("output").innerHTML += " Rudy!";
    };
    return function () {
            if (timer === null) {
                timer = setInterval(rudyPrint, 1000);
            } else {
                clearInterval(timer);
                timer = null;
            }
    };   
})();
