var count = 0;
var button = document.getElementById("cabbageCount");
function handleClick(){
    count++;
    button.innerHTML = "Всего кочанов: " + count;
}