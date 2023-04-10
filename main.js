function onLoaded(){
    setTimeout(start,1000);
}

function start()
{
    console.log("start2");
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    alert(code);
    if(code == null)
    {
        location.replace("DestinyWeaponRandomizer:0");
    }
    else
    {
        location.replace("DestinyWeaponRandomizer:" + code);
    }   
}

console.log("start");