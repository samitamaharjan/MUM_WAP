/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function delayMsg() {
    setTimeout(booyah, 1000);
    document.getElementById("output").innerHTML = "wait for it 2nd...";
}

function booyah() {
    document.getElementById("output").innerHTML = "BOOYAH!";
}

//setTimeout(booyah1, 2000); 
function booyah1() {
    alert("BOOYAH!");
}
