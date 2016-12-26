/* This simple Javascript code is created to set automatically "root" as a login
Created by Aleksey Samusenko8*/



(function () {
    
    var buttonHTML = "<input type=\"button\" value=\"Set 'root' login\" >",
        formBlock = document.querySelector("form");

//Creating a button

    formBlock.insertAdjacentHTML('beforeend',buttonHTML);   

//Creating event

    formBlock.addEventListener('click', replaceLogin);

//Replacing function

    function replaceLogin(){
        var tunnelDetails = document.querySelectorAll('td.tunnel_details'),
            login = "root";
       
     
        for(var i = 0, arrLength = tunnelDetails.length ; i < arrLength ; i++ ){
            var currentTunnelDetails = tunnelDetails[i].innerText,
                firstPart = currentTunnelDetails.substr(0, currentTunnelDetails.indexOf("l") + 1),
                lastPart = currentTunnelDetails.substr(currentTunnelDetails.lastIndexOf("-"), currentTunnelDetails.length),
                finalTunnelDetails = firstPart + " " + login + " " + lastPart;
            
            //setting "root" as as login

                tunnelDetails[i].innerText = finalTunnelDetails;
        };
    };
       
} )();

