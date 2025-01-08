let originalText = '';
let timerInterval;
let time = 0;
let isTimerRunning = false;

function submitText() {
  const inputText = document.getElementById('input-text').value;
  const originalTextDiv = document.getElementById('original-text');
  
  originalTextDiv.innerHTML = '';  // Clear previous content
  originalText = inputText;

  // Add text with span tags to allow color change
  for (let i = 0; i < originalText.length; i++) {
    const span = document.createElement('span');
    span.innerText = originalText[i];
    originalTextDiv.appendChild(span);
  }

  document.getElementById('initial-box').style.display = 'none';  // Hide the initial box
  document.getElementById('practice-box').style.display = 'block';  // Show the practice box
  resetTimer();
}

function checkTyping() {
  const typedText = document.getElementById('typing-area').value;
  const originalTextDiv = document.getElementById('original-text').children;

  for (let i = 0; i < originalTextDiv.length; i++) {
    if (typedText[i] === undefined) {
      originalTextDiv[i].classList.remove('correct', 'incorrect');
    } else if (typedText[i] === originalTextDiv[i].innerText) {
      originalTextDiv[i].classList.add('correct');
      originalTextDiv[i].classList.remove('incorrect');
    } else {
      originalTextDiv[i].classList.add('incorrect');
      originalTextDiv[i].classList.remove('correct');
    }
  }

  // Start the timer if not already started
  if (!isTimerRunning && typedText.length > 0) {
    startTimer();
  }
}

function startTimer() {
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    time += 1;
    document.getElementById('timer').innerText = `Time: ${time}s`;
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  time = 0;
  document.getElementById('timer').innerText = 'Time: 0s';
  document.getElementById('typing-area').value = '';
}

function newParagraph() {
  // Reset everything and show the initial box
  document.getElementById('initial-box').style.display = 'block';
  document.getElementById('practice-box').style.display = 'none';
  document.getElementById('input-text').value = '';
  document.getElementById('typing-area').value = '';
  resetTimer();
  document.getElementById('original-text').innerHTML = '';  // Clear original text
}
