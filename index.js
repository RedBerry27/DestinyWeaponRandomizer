var count = 0;
var countElement = document.getElementById("cabbageCount");
var cabbageButton = document.getElementById("cabbageButton");
var func;
var restoreTimeout;
var normalSize = 300;
var minSize = 150;
var stepTap = 10;
var currentSize = 300;
var cooldown = 1000;

function handleClick() {
    
    
    if (currentSize > minSize) {
        count++;
        currentSize -= stepTap;
        cabbageButton.style.setProperty("--custom-size", currentSize + "px");
        if (func != null || func != undefined)
            clearTimeout(func)
    
        func = setTimeout(restoreStepSize, cooldown);
        countElement.innerHTML = "Всего кочанов: " + count;
    }    
}

function toNormalSize() {
    cabbageButton.style.setProperty("--custom-size", normalSize);
}

function restoreStepSize() {
    if (currentSize < normalSize) {
        currentSize += 10;
    }
    cabbageButton.style.setProperty("--custom-size", currentSize + "px");
    if(currentSize == normalSize){

    }
    else{
        func = setTimeout(restoreStepSize, cooldown);
    }
}