function getPin() {
    const pin = pinGenerator();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        console.log('3 digit pin', pin);
        return getPin();
    }
}

function pinGenerator() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getValueByInputField(inputId) {
    const pinField = document.getElementById(inputId);
    const pinFieldString = pinField.value;
    return pinFieldString;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const pinInputField = document.getElementById('pin-field');
    pinInputField.value = pin;

})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calField = document.getElementById('calculator-field');
    const previousNumber = calField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            calField.value = '';
        }
        else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            calField.value = remainingDigits;
        }
    }
    else {
        const currentNumber = previousNumber + number;
        calField.value = currentNumber;

    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    const pinGenerateValue = getValueByInputField('pin-field');
    const calculatorValue = getValueByInputField('calculator-field');

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    if (pinGenerateValue === calculatorValue) {

        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else {

        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';

    }

});