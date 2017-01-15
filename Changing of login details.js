
    var changeLoginButton = "<input type=\"button\" value=\"Change\" id=\"change\" >",
        returnButton = "<input type=\"button\" value=\"Return\" id=\"return\" >",
        inputField = "<input type=\"text\" value=\"root\" id=\"inputValue\" >",
        formBlock = document.querySelector("form"),
        divBlock = "<div id=\"insertedBlock\"></div>";

//Creating a button

    formBlock.insertAdjacentHTML('afterend', divBlock);

    var divBlocHtml = document.getElementById('insertedBlock');

    divBlocHtml.insertAdjacentHTML('beforeend', changeLoginButton);
    divBlocHtml.insertAdjacentHTML('beforeend', inputField);
    divBlocHtml.insertAdjacentHTML('beforeend', returnButton);

//Changing CSS property
    
    var inputFieldHtml = document.getElementById("inputValue");
    inputFieldHtml.style.font_size = "";

//Creating event
    
    divBlocHtml.addEventListener('click', clicking, false);

//Replacing function

    function clicking (e){
        var target = e && e.target || e.srcElement,
            buttonId = target.id;


        if(buttonId == "change"){
            var inputValue = document.querySelector('#inputValue').value;
            replaceLogin(inputValue);
        }else if(buttonId == "return"){
            replaceLogin("CAMERA_USERNAME");
        }

    };

    function replaceLogin(login){
        var tunnelDetails = document.querySelectorAll('td.tunnel_details'),
            loginDetails = login;

       
        
        for(var i = 0, arrLength = tunnelDetails.length ; i < arrLength ; i++ ){

            var currentTunnelDetails = tunnelDetails[i].innerText;
                // current Tunnel Details in iDashboard
                if(currentTunnelDetails.slice(0, 3) == "ssh"){
                    var firstPart = currentTunnelDetails.substr(0, currentTunnelDetails.indexOf("l") + 1),
                    lastPart = currentTunnelDetails.substr(currentTunnelDetails.lastIndexOf("-"), currentTunnelDetails.length),
                    finalTunnelDetails = firstPart + " " + loginDetails + " " + lastPart;
                    //setting "root" as as login
                    tunnelDetails[i].innerText = finalTunnelDetails;

                };       

        };
    };
