var titleElement;
var localStorage = window.localStorage;
var tokenEndpoint = "https://www.bungie.net/platform/app/oauth/token/";

function onLoaded(){
    titleElement = document.getElementById("title");
    setTimeout(start, 1000);
}

function start()
{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    var state = urlParams.get('state');

    if(code != null){
        $.ajax({
            type: "POST",
            url: tokenEndpoint + "?grant_type=authorization_code&code=" + code,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            dataType: "json",
            success: function (response) {
                console.log(response);
                localStorage.setItem("authorization", JSON.stringify.response);
                location.replace("/index.html");
            }
        });
    }
    else{
        alert("code is null");
    }

    
    //if(code == null)
    //{
        //location.replace("https://localhost:7186");
    //}
    //else
    //{
        //location.replace("https://localhost:7186/redirect?code=" + code + "&state=" + state);
    //}   
}
