/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

$(document).ready(function() {
    
    var baseURL = window.location;
    $("#keyword").keypress(function(e) {
        if (e.keyCode=== 13) {
            $("#btnLookup").click();
        } 
    });
    
    var ajaxSearch = (function() {
        var searchUrl = baseURL + "dictServlet";
        
        var displayResult = function(data){
            var arr = data.output; //??
            $("#result").text("");
            $("#result").append("<tr><th colspan='4'>" + arr.length + "reslt(s)</th></tr>");
            
            for (var i = 0; i < arr.length; i++) {
                $("#result").append("<tr><td>" + (parseInt(i)+1)
                    + "</td><td>" + arr[i].word
                    + "</td><td> (" + arr[i].wordType
                    + ") </td><td>:: " + arr[i].definition
                    + "</td></tr>");
            }
            
            /*for(var key in list){
                $("#result").append("<tr><td>"+(parseInt(key)+1)
                    +"</td><td>"+list[key].word
                    +"</td><td> ("+list[key].wordType
                    +") </td><td>:: "+list[key].definition
                    +"</td></tr>");
            }*/
            
        };
        return {
                search : function(words) {
                    $.ajax({
                        "url" : searchUrl,
                        "type" : "POST",
                        "data" : {
                            term : words
                        },
                        "success" : function(responseData) {
                            displayResult(responseData);
                        },
                        "error" : function() {
                            $("result").text("Error!!");
                        }
                    });
                }
            };
    })();
    
    $("#btnLookup").click(function() {
        var word = $("#keyword").val();
        if (word !== "") {
            ajaxSearch.search(word);
        } else {
            $("#result").text("");
            $("#result").append("<tr><th colspan='4'>Empty keyword</th></tr>");
        }
    });
});