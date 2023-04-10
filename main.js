document.onload = () => { 
    var queryString = window.location.search;
    var urlParams = URLSearchParams(queryString);
    var code = urlParams.get('code');
    alert(code);
    location.replace("DestinyWeaponRandomizer://" + code);
    window.close();
};