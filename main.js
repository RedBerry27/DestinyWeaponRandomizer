function onLoaded(){
    setTimeout(start,1000);
}

function start()
{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    if(code == null)
    {
        location.replace("https://localhost:7186");
    }
    else
    {
        location.replace("https://localhost:7186/token?code=" + code);
    }   
}
