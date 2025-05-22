const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('digit')) {
      if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
      }
      currentInput += value;
      display.textContent = currentInput;
    }

    else if (button.classList.contains('operator')) {
      if (currentInput && !isNaN(currentInput.slice(-1))) {
        currentInput += value;
        display.textContent = currentInput;
      }
    }

    else if (button.classList.contains('equal')) {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
      }
    }

    else if (button.classList.contains('clear')) {
      currentInput = '';
      display.textContent = '0';
    }
  });
});
