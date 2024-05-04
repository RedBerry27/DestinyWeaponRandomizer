var titleElement;
var localStorage = window.localStorage;
var authorizationEndpoint = "https://www.bungie.net/en/oauth/authorize";
var tokenEndpoint = "https://www.bungie.net/platform/app/oauth/token/"

function onLoaded(){
    titleElement = document.getElementById("title");
    // if(localStorage.getItem("auth"))
    // {
    //     localStorage.setItem("auth", JSON.stringify(
    //     {
    //         "token":"dfsdgfljl432403df", 
    //         "id":123299943
    //     }));
    // }
    $("#authButton").click(function (e) { 
        e.preventDefault();
        location.replace(authorizationEndpoint + "client_id=46794&response_type=code");
    });
}

function getElement(name){
    return "<p>" + name + "</p>";
}