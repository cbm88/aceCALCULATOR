/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calculate(){
    var ace = new Object();
    var KNOTS = 1.151;
    
    ace.windsOne = parseFloat(document.getElementById("valueOne").value);
    ace.windsTwo = parseFloat(document.getElementById("valueTwo").value);
    ace.windsThree = parseFloat(document.getElementById("valueThree").value);
    ace.windsFour = parseFloat(document.getElementById("valueFour").value);
    
    if (document.getElementById("radio").checked){
        ace.knotsOne = ace.windsOne * KNOTS;
        ace.knotsTwo = ace.windsTwo * KNOTS;
        ace.knotsThree = ace.windsThree * KNOTS;
        ace.knotsFour = ace.windsFour * KNOTS;
        
        ace.totalWinds = Math.pow(ace.knotsOne,2) + Math.pow(ace.knotsTwo,2) + Math.pow(ace.knotsThree,2) + Math.pow(ace.knotsFour,2);
        ace.result = (ace.totalWinds/10000).toFixed(2);
        
        if(ace.windsOne < 30 || ace.windsTwo < 30 || ace.windsThree < 30 || ace.windsFour <30){
            alert("Value Cannot Be Less Than 30 knots!");
            
        }
        else{
            document.getElementById("answer").innerHTML = "The ACE is: " + ace.result;
        
        }
        
    }
    
    else{
        ace.totalWinds = Math.pow(ace.windsOne,2) + Math.pow(ace.windsTwo, 2) + Math.pow(ace.windsThree,2) + Math.pow(ace.windsFour,2);
        ace.result = (ace.totalWinds/10000);
        
        if(ace.windsOne < 30 || ace.windsTwo < 30 || ace.windsThree < 30 || ace.windsFour < 30){
            alert("Value Cannot Be Less Than 35 mph!");
            
        }
        else{
            document.getElementById("answer").innerHTML = "The ACE is: " + ace.result;
            
        }
    
    }
}
