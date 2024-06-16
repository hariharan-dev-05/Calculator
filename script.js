const result = document.getElementById('result');
const clearBtn = document.getElementById('clear-button');

clearBtn.addEventListener('click', () => {
    result.value = "";
});

function display(x) {
    var disValue = result.value;
    result.value = disValue + x;
}

function calculate() {
    try {
        var ans = eval(result.value);
        result.value = ans;
    } catch (error) {
        result.value = "Error";
    }
}

document.addEventListener("keydown", (key) => {
    switch(key.key){
        case 'Backspace':
            var inputVal = result.value;
            var subString = inputVal.substring(0, inputVal.length - 1);
            result.value = subString;
            break;
        case 'c':
        case 'C':
            result.value = "";
            break;
        case 'Enter':
            key.preventDefault();
            calculate();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            display(key.key);
            break;
    }
});