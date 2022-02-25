window.onload = function() {
    // store first num when operator clicked
    let displayedResult = 0;
    let equation = "&nbsp";
    let storedNum = "";
    let storedOperator = "";

    const textbox = document.querySelector("#textbox");
    const equationBox = document.querySelector("#equationBox");
    const numBox = document.querySelector("#numBox");
    
    equationBox.innerHTML = equation;
    numBox.innerHTML = displayedResult;

    const container = document.querySelector(".container");

    const numBtns = document.querySelectorAll(".number");
    const operatorBtns = document.querySelectorAll(".operator");
    const clear = document.querySelector("#clear");
    const equal = document.querySelector("#equalBtn");
    const backspace = document.querySelector('#delete');

    const updateDisplay = function () {
        numBox.innerHTML = displayedResult;
        equationBox.innerHTML = equation;
    }
    
    const handleClear = function() {
        displayedResult = 0;
        storedNum = "";
        equation = "&nbsp";
        storedOperator = "";
        updateDisplay();
        // must include parentheses to invoke
    }

    const handleBackspace = function() {
        if (displayedResult.length > 1) {
            displayedResult = displayedResult.toString().slice(0,displayedResult.length-1);
        } else {
            displayedResult = 0;
        }
        numBox.innerHTML = displayedResult;
    }

    const handleNum = function(event) {
        if (displayedResult == 0) {
            // don't add "let". It is only for variable declaration
            displayedResult = event.target.innerHTML;
        } else {
            displayedResult = displayedResult + event.target.innerHTML;
        }
        updateDisplay();
    }

    const calculate = function(event) {
        switch(storedOperator) {
            case "*":
                displayedResult = Number(storedNum) * Number(displayedResult);
                equation = displayedResult + event.target.innerHTML;
                updateDisplay();
                break;
            case "/":
                displayedResult = Number(storedNum) / Number(displayedResult);
                equation = displayedResult + event.target.innerHTML;
                updateDisplay();
                break;
            case "+":
                displayedResult = Number(storedNum) + Number(displayedResult);
                equation = displayedResult + event.target.innerHTML;
                updateDisplay();
                break;
            case "-":
                displayedResult = Number(storedNum) - Number(displayedResult);
                equation = displayedResult + event.target.innerHTML;
                updateDisplay();
                break;
            case "":
                equation = displayedResult + event.target.innerHTML;
                updateDisplay();
        }
    }

    const handleOperator = function(event) {
        calculate(event);
        storedNum = displayedResult;   
        displayedResult = "";
        storedOperator = event.target.innerHTML;
    }

    const handleEqual = function(event) {
        switch(storedOperator) {
            case "+":
                equation = `${storedNum} + ${displayedResult} =`
                displayedResult = Number(storedNum) + Number(displayedResult)
                break;
            case "-":
                equation = `${storedNum} - ${displayedResult} =`
                displayedResult = Number(storedNum) - Number(displayedResult)
                break;
            case "*":
                equation = `${storedNum} * ${displayedResult} =`
                displayedResult = Number(storedNum) * Number(displayedResult)
                break;
            case "/":
                equation = `${storedNum} / ${displayedResult} =`
                displayedResult = Number(storedNum) / Number(displayedResult)
                break; 
            case "":
                equation = `${displayedResult} =`;
        }
        updateDisplay();
        storedNum = displayedResult;
        displayedResult = "";
    }

    
    // don't include parenthese in callback fx else invoking it even before event
    clear.addEventListener("click", handleClear);
    numBtns.forEach(button => button.addEventListener("click", handleNum));
    operatorBtns.forEach(button => button.addEventListener("click", handleOperator));
    equal.addEventListener("click", handleEqual);
    backspace.addEventListener('click', handleBackspace)
}