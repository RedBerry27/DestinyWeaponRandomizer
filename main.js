function onLoaded(){
    setTimeout(start,1000);
}

function start()
{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    var state = urlParams.get('state');
    if(code == null)
    {
        location.replace("https://localhost:7186");
    }
    else
    {
        location.replace("https://localhost:7186/redirect?code=" + code + "&state=" + state);
    }   
}
