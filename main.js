let currentInput = '';
let firstOperand = null;
let operator = null;
let resetDisplay = false;
let resultDisplayed = false

function appendDigit(digit){
    if(resetDisplay || resultDisplayed) {
        currentInput = '';
        resetDisplay= false;
        resultDisplayed=false
    }
    currentInput+=digit;
    document.getElementById('currentinput').value = currentInput;
}

function setOperator(op){
    if(currentInput === '' && firstOperand===null )return;
        if(firstOperand===null){
            firstOperand=parseFloat(currentInput);
        }else{
            calculateResult();
            firstOperand=parseFloat(currentInput);
        }
        operator=op;
        resetDisplay=true;
}

function calculateResult(){
    if (firstOperand === null || operator === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    switch (operator){
        case '+':
        result = firstOperand+secondOperand;
        break;
        case "-":
            result = firstOperand-secondOperand;
            break;
        case'/':
        result=firstOperand/secondOperand;
        break;
        case'*':
        result = firstOperand*secondOperand;
        break;
        default:
        return;
    }
    document.getElementById('currentinput').value=result;
    currentInput = result.toString();
    firstOperand=null
    operator=null
    resetDisplay=true
    resultDisplayed= true
}

function clearAll() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    resetDisplay = false;
    resultDisplayed=false
    document.getElementById('currentinput').value = '';
}

function deleteDigit(){
    if(currentInput === '') return;
    currentInput = currentInput.slice(0,-1);
    document.getElementById('currentinput').value=currentInput;
}


    