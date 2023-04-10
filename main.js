function onLoaded(){
    console.log("start2");
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    if(code == null)
    {
        location.replace("DestinyWeaponRandomizer:0");
    }
    else
    {
        location.replace("DestinyWeaponRandomizer:" + code);
        window.close();
    }   
}

console.log("start");