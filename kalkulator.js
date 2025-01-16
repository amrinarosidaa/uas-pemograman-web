const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch {
                display.textContent = 'Error';
            }
        } else if (value === '%') {
            if (currentInput) {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.textContent = currentInput;
            }
        } else if (value === '(' || value === ')') {
            currentInput += value;
            display.textContent = currentInput;
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

