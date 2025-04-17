function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        alert("Invalid input");
        clearDisplay();
    }
}

// ✅ Keyboard support
document.addEventListener("keydown", function (event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                         '+', '-', '*', '/', '.', '(', ')'];

    if (allowedKeys.includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        const display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    } else if (event.key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
