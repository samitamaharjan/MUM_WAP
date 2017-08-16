/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Whole-script strict mode syntax
"use strict";

var bankAccount = (function() {
    return function() {
        var name = "";
        var balance="";
        var newAccount = function (val1,val2) {
            name=val1;
            balance=val2; 
        };
        var getName = function(){
          return name;
        };
        var getBalance= function(){
          return balance;
        };
        return {
            newAccount: newAccount,
            getName: getName,
            getBalance: getBalance
        };
    };
}());

var accountInfoList = [];

function newBankAccount(){  
   var name=document.getElementById("name").value;
   var balance=document.getElementById("deposit").value;
   if(name.length === 0 || balance.length === 0){
      return;
   }
       
   var account = bankAccount(); 
   account.newAccount(name,balance);
   accountInfoList.push(account);
   console.log(accountInfoList);
   var str="";
   for (var i = 0; i < accountInfoList.length; i ++ ){
        str = str + "Account Name:  " + accountInfoList[i].getName()+ "  balance :  "+accountInfoList[i].getBalance()+"\n";
   }
   document.getElementById("textSample").value=str;
}