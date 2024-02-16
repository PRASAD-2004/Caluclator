const calculator = document.querySelector('.calculator');
const input = calculator.querySelector('input');

calculator.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const buttonValue = event.target.textContent;
    const action = event.target.getAttribute('data-action');

    if (!action) {
      input.value += buttonValue;
    } else if (action === 'clear') {
      input.value = '';
    } else if (action === 'backspace') {
      input.value = input.value.slice(0, -1);
    } else if (action === 'calculate') {
      input.value = eval(input.value);
    } else {
      input.value += buttonValue;
    }
  }
});
