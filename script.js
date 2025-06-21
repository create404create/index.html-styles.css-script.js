function startTimer(button) {
  button.disabled = true;
  let timer = 15 * 60; // 15 minutes
  let originalText = button.textContent;

  const interval = setInterval(() => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    button.textContent = `${minutes}m ${seconds}s...`;

    if (--timer < 0) {
      clearInterval(interval);
      button.textContent = "✅ Done";
    }
  }, 1000);
}
