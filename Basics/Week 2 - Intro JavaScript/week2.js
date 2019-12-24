function ClickMyButton(value) {
    console.log(value)
    // alert(value)
}


function Calc() {

    var firstNum = document.getElementById("first-input").value;
    var secondNum = document.getElementById("second-input").value;
    var result = 0;

    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);

    var decision = prompt("What would you like to do: + - / *");

    if (decision == "+") {
        result = firstNum + secondNum
    }
    else if (decision == "-") {
        result = firstNum - secondNum;
    }
    else if (decision == "/") {
        result = firstNum / secondNum;
    }
    else if (decision == "*") {
        result = firstNum * secondNum;
    }
    else{
        result = "Incorrect Arithmetic operator";
    }


    console.log(result)

}

