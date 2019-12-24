
var subTotal = 0;
var storedAction = '';

function NumberPress(num) {
    var inputVal = document.getElementById('myInput').value;
    inputVal = inputVal + num;
    document.getElementById('myInput').value = inputVal;
    inputVal = parseInt(document.getElementById('myInput').value);
}

function ClearButton(action) {
    if (action == 'c') {
        document.getElementById('myInput').value = ''
        document.getElementById('sumInput').value = ''
        storedTotal = 0
        storedAction = ''
    }
    else if (action == 'ce') {
        document.getElementById('myInput').value = ''
    }
}

function PiButton() {
    let newTotal = parseFloat(document.getElementById('myInput').value);
    subTotal = 3.14159265358979323846 * newTotal;
    storedAction = '';
    document.getElementById('myInput').value = subTotal;
}

function NegationButton() {
    let newTotal = parseFloat(document.getElementById('myInput').value);
    subTotal = newTotal - newTotal - newTotal;
    storedAction = '';
    document.getElementById('myInput').value = subTotal;
}

function ActionPress(action) {
    if (storedAction == '') {
        let viewSum = document.getElementById('myInput').value;
        storedAction = action;
        subTotal = parseFloat(document.getElementById('myInput').value);
        document.getElementById('myInput').value = '';
        document.getElementById('sumInput').value = viewSum + ' ' + storedAction;
    }
    else if (storedAction == '+') {
        let viewSum = document.getElementById('sumInput').value;
        let newTotal = parseFloat(document.getElementById('myInput').value);
        subTotal = subTotal + newTotal;
        storedAction = action;
        document.getElementById('myInput').value = '';
        document.getElementById('sumInput').value = viewSum + ' ' + newTotal + ' ' + storedAction;
    }
    else if (storedAction == '-') {
        let viewSum = document.getElementById('sumInput').value;
        let newTotal = parseFloat(document.getElementById('myInput').value);
        subTotal = subTotal - newTotal;
        storedAction = action;
        document.getElementById('myInput').value = '';
        document.getElementById('sumInput').value = viewSum + ' ' + newTotal + ' ' + storedAction;
    }
    else if (storedAction == '*') {
        let viewSum = document.getElementById('sumInput').value;
        let newTotal = parseFloat(document.getElementById('myInput').value);
        subTotal = subTotal * newTotal;
        storedAction = action;
        document.getElementById('myInput').value = '';
        document.getElementById('sumInput').value = viewSum + ' ' + newTotal + ' ' + storedAction;
    }
    else if (storedAction == '/') {
        let viewSum = document.getElementById('sumInput').value;
        let newTotal = parseFloat(document.getElementById('myInput').value);
        subTotal = subTotal / newTotal;
        storedAction = action;
        document.getElementById('myInput').value = '';
        document.getElementById('sumInput').value = viewSum + ' ' + newTotal + ' ' + storedAction;
    }

    if (storedAction == '=') {
        document.getElementById('myInput').value = subTotal;
        storedAction = '';
    }
}
