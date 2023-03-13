var display = document.getElementById("display");
var memory = 0;
var operator;
function calculate(e) {
    if (e < 10) {
        display.value += e;
    }
    switch (e) {
        case "c": display.value = "";
            break;
        case "bs":
            if (display.value < 10) {
                display.value = "";
            } else {
                display.value = Math.floor(display.value / 10);
            }
            break;
        case "point": display.value += ".";
            break;
        case "+": memory = display.value;
            display.value = "";
            operator = "+";
            break;
        case "-": memory = display.value;
            display.value = "";
            operator = "-";
            break;
        case "X": memory = display.value;
            display.value = "";
            operator = "✖";
            break;
        case "/": memory = display.value;
            display.value = "";
            operator = "÷";
            break;
        case "=":
            if (operator == "+")
                display.value = parseFloat(memory) + parseFloat(display.value);
                // display.value = memory+display.value; --> This will concatenate two numbers intead of doing addition(99 + 9 = 999)
            else if (operator == "-")
                display.value = memory - display.value;
            else if (operator == "✖")
                display.value = memory * display.value;
            else if (operator == "÷")
                display.value = memory / display.value;
            break;
    }
}

