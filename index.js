var count = 0;
var button = document.getElementById("mainButton");
function handleClick(){
    count++;
    button.innerHTML = "Button " + count;
}