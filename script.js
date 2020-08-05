// Notification - section hiding.
let notification = document.getElementsByClassName('notify');
for (let i = 0; i < notification.length; i++) {
    const element = notification[i];
    element.style.display = 'none';
}

//  random number with a minimum and maximum value
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

let generateInput = document.getElementById('generate-pin');
let generateButton = document.getElementById('generate-btn');
let generateNumber;

// Generate a random number and hide notification 
generateButton.addEventListener('click', function () {
    generateNumber = getRandomNumber(1000, 9999);
    generateInput.value = generateNumber;
    numberInput = '';
    document.getElementById('number-input').value = numberInput;
    notification[1].style.display = 'none';
    notification[0].style.display = 'none';
})

let numberInput = document.getElementById('number-input').value;

// Handling button 
let button = document.getElementsByClassName('button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        numberInput += button[i].innerText;
        document.getElementById('number-input').value = numberInput;
    })
}

// Handling backspace button action
document.getElementById('backspace').addEventListener('click', function () {
    numberInput = numberInput.substring(0, numberInput.length - 1);
    document.getElementById('number-input').value = numberInput;
})

// Handling clear button action
document.getElementById('clear').addEventListener('click', function () {
    numberInput = '';
    document.getElementById('number-input').value = numberInput;
})

// Calculate how many try left
let tryLeft = 3;

// Handling submit button action
let submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function () {
    numberInput = parseInt(numberInput);
    // checking if the input value is right
    if (numberInput == generateNumber) {
        notification[1].style.display = 'block';
        notification[0].style.display = 'none';

    }
    else {
        notification[1].style.display = 'none';
        notification[0].style.display = 'block';
        if (tryLeft == 0) { // If the value is == 0, the button will be disabled
            document.getElementById('submit-btn').setAttribute('disabled', true);
        }
        else {
            tryLeft; // If the input value is wrong, 1 try will decrease;
        }
    }
    document.getElementById('try-left').innerText = tryLeft;
})
