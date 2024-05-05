var titleElement;
var localStorage = window.localStorage;
var tokenEndpoint = "https://www.bungie.net/platform/app/oauth/token";

function onLoaded() {
    titleElement = document.getElementById("title");
    setTimeout(start, 1000);
}

function start() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    var state = urlParams.get('state');
    let tokenUrl = new URL(tokenEndpoint);
    tokenUrl.searchParams.append("grant_type", "authorization_code");
    tokenUrl.searchParams.append("client_id", 46794);
    tokenUrl.searchParams.append("code", code);

    if (code != null) {
        let response = fetch(tokenUrl,{
            method:"POST",
            headers:{
                "Content-Type": 'application/x-www-form-urlencoded'
            }
        })

        if(response.ok){
            let jsonResponse = response.json();
            console.log(jsonResponse);
            localStorage.setItem("authorization", JSON.stringify(jsonResponse));
            location.replace("/index.html");
        }
        else{
            console.log("ERROR");
        }

        // $.ajax({
        //     type: "POST",
        //     url: tokenUrl,
        //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //     dataType: "json",
        //     success: function (response) {
        //         console.log(response);
        //         localStorage.setItem("authorization", JSON.stringify.response);
        //         location.replace("/index.html");
        //     }
        // });
    }
    else {
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
