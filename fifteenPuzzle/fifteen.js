/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
$(document).ready(function(){
    //keep track of empty,
    var xSpace = 300;
    var ySpace = 300;

    $("#puzzlearea > div").each(function(idx, e){
        //console.debug(e.innerHTML);
        var i = parseInt(e.innerHTML-1);

        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        //console.log(i + " (x,y) is (" + x + ", " + y + ")");

        // set basic style and background
        e.className = "puzzlepiece";

        //console.debug(left);
        $(e).css("left", x + "px");
        $(e).css("top", y + "px");

        $(e).css("background-image","url('background.jpg')");
        $(e).css("background-position",-x + "px " + (-y) + "px");

        e.x = x;
        e.y = y;
        //console.debug(e);

        //hover event
        $(e).hover(function () {
            //console.log("hover " + e.innerHTML);
            if(isMoveable(e)){
                $(this).addClass("movablepiece");
            }else{
                $(this).removeClass("movablepiece");
            }
        });

        //click event for the div
        $(e).click(function () {
            if(isMoveable(e)){
                moveToEmptySpace(e);
            }
        });
    });

    $("#shufflebutton").click(function(){
        for(var i = 0; i < 300 ; i++){
            randomMove();
        }
    });

    //check if element is movable
    var isMoveable = function(e){
        var xThis = parseInt($(e).css("left"));
        var yThis = parseInt($(e).css("top"));

        var xGap = Math.abs(xThis - xSpace);
        var yGap = Math.abs(yThis - ySpace);

        if((xGap + yGap) === 100){
            return true;
        }else{
            return false;
        }
    };

    //move to empty space
    var moveToEmptySpace = function(e){
        //before move there, current coordinate is the new empty space
        var xTemp = parseInt($(e).css("left"));
        var yTemp = parseInt($(e).css("top"));

        $(e).css("left", xSpace);
        $(e).css("top", ySpace);

        xSpace = xTemp;
        ySpace = yTemp;
    };

    //randomly move to 1 out of many possible moves
    var randomMove = function(){
        var elementBucket = [];
        $("#puzzlearea > div").each(function(idx, e){
            if(isMoveable(e)){
                elementBucket.push(e);
            }
        });
        //console.debug(elementBucket);

        var randomIndex = parseInt(Math.random() * elementBucket.length);
        //console.debug(randomIndex);
        moveToEmptySpace(elementBucket[randomIndex]);
    };
});

