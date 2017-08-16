/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
$(document).ready(function() {
    $("#start").click(function() {
        $("#maze").mouseleave(function(){
            $(".boundary").addClass("youlose");
            $("#status").text("Sorry, you lost. :[");
        });
        
        $(".boundary").mouseover(function(){
            $(".boundary").addClass("youlose");
        });
                       
        $("#end").click(function() {
            if ($(".boundary").hasClass("youlose")) {
                $("#status").text("Sorry, you lost. :[");
                $("#maze").mouseleave(function(){
                    $("#status").text("Sorry, you lost. :[");
                });
            } else {
                $("#status").text("You win! :]");
                $(".boundary").mouseover(function(){
                    $(".boundary").removeClass("youlose");
                });
                $("#maze").mouseleave(function(){
                    $(".boundary").removeClass("youlose");
                    $("#status").text("You win! :]");
                });
            }
        });
               
        $("#start").click(function() {
            $(".boundary").removeClass("youlose");
            $("#status").text("Click the \"S\" to begin.");
        });
    });
});
