const counter = document.querySelector('h1');
const button1 = document.getElementById('btn1'); // Increase
const button2 = document.getElementById('btn2'); // Decrease

let counterValue = 0;

button1.addEventListener('click', function () {
  if (counterValue < 10) {
    counterValue++;
    counter.innerText = counterValue;
    button2.disabled = false; // ensure decrease button re-enabled
  }

  if (counterValue === 10) {
    button1.disabled = true;
    alert('Maximum value reached!');
  }
});

button2.addEventListener('click', function () {
  if (counterValue > 0) {
    counterValue--;
    counter.innerText = counterValue;
    button1.disabled = false; // ensure increase button re-enabled
  }

  if (counterValue === 0) {
    button2.disabled = true;
    alert('Minimum value reached!');
  }
});
