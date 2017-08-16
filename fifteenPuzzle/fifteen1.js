/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
$(document).ready(function() {
    var init = function() {
        var puzzleArea = document.getElementById('puzzlearea');
        var divs = puzzleArea.getElementsByTagName("div");

        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];

            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            div.x = x;
            div.y = y; 
        }        
    };
    init();
    
    $("#puzzlearea div").click(function() {
        $("this").css({
            "border":"red",
            "color":"red"
        });
    });
});