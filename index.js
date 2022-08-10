
// event listeners
const htmlNum = document.getElementById('result');

const plusButton = document.getElementById("plus__button");
const minusButton = document.getElementById("minus__button");

// remembering the value
let userInput = document.getElementById("user__input");

userInput.addEventListener('input', function () {
    counter = userInput.value;

});

let counter = userInput.value;

plusButton.onclick = function increase() {

    if(counter >= -1) {
        htmlNum.style.color = 'black';
        
    } else if(counter <= -1) {
        htmlNum.style.color = 'red';
    }

    counter++;
    
    // userInput.value = counter;
    htmlNum.innerHTML = counter;
}

minusButton.onclick = function decrease() {


    if (counter <= 0) {
        htmlNum.style.color = 'red';
    } else if (counter >= 0) {
        htmlNum.style.color = 'black';
    }

    counter -= 1;
   
    // userInput.value = counter;
    htmlNum.innerHTML = counter;
}


