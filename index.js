var count = 0;
var button = document.getElementById("cabbageCount");
function handleClick(){
    count++;
    button.innerHTML = "Button " + count;
}