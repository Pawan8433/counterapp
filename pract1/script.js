let counter = 9999;

const DISPLAY = document.getElementById('display');

//console.log(DISPLAY);
// 
function updateDisplay(){
    const spanElements = DISPLAY.children;
    let numberToString = counter.toString().padStart(4,0);
    for(let i = 0; i < numberToString.length; i++) {
        spanElements.item(i).innerText = numberToString[i];
    }
}

function increment(){
    if(counter >= 9999) {

    };
    counter++;
    updateDisplay();
}


function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}

function decrement(){
    if(counter === 0) return;
    counter--;
    updateDisplay();
}

function reset(){
    counter =0;
    updateDisplay();
}

function addZeroPaddingToStart() {

}

updateDisplay();