const display = document.getElementById('display');
let countDot = 0;
let countOperator = 0;

function appendToDisplay(input) {
    switch (input){
        case `.`:
            if (countDot === 0) {
                display.value += input;
                countDot++;
            }
            break;
        case `+`:
        case `-`:
        case `*`:
        case `/`:
            if (countOperator === 0){
                display.value += input;
                countOperator++;
                countDot = 0;
            }else {
                let tmp = String(display.value);
                tmp = tmp.substring(0, tmp.length-1);
                display.value = tmp + input;
                console.log(tmp);
            }
            break;
        default:
            display.value += input;
            countOperator = 0;
    }
}

function clearDisplay(){
    display.value = "";
    countDot = 0;
    countOperator = 0;
}

function calculateResult(){
    try{
        display.value = eval(display.value);
    }catch(e){
        display.value = "Error";
    }
}