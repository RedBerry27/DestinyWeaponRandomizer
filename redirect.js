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
    console.log(tokenUrl);
    console.log(tokenUrl.toString());

    if (code != null) {
        let formData = new FormData();
        formData.append("grant_type","authorization_code");
        formData.append("client_id","46814");
        formData.append("client_secret","a4CdT2MmsbqzVZOl1BzwGWXXUdIxSx6L1NNMrgHxhAc");
        formData.append("code",code);

        let response = fetch(tokenUrl,{
            method:"POST",
            mode:"no-cors",
            headers:{
                "Content-Type": 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin":"*"
            },
            body: formData
        })

        console.log(response);

        if(response.ok){
            let jsonResponse = response.json();
            console.log(jsonResponse);
            localStorage.setItem("authorization", JSON.stringify(jsonResponse));
            //location.replace("/index.html");
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
        alert("cocodede isis nunullll");
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
