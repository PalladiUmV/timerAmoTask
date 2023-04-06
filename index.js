const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId;
  return (seconds) => {
    clearInterval(intervalId);
    let remainingSeconds = seconds;
    const updateTimer = () => {
      if (remainingSeconds >= 0) {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerEl.textContent = formattedTime;
        remainingSeconds--;
      } else {
        clearInterval(intervalId);
      }
    };
    updateTimer();
    intervalId = setInterval(updateTimer, 1000);
  };
};




const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
