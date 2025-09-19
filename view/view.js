const backBtn = document.getElementById('backBtn');
const videoDateEl = document.getElementById('videoDate');

backBtn.addEventListener('click', () => {
    window.location.href = '/home';
});

// Set alarm date to yesterday's date for demo purposes (Format: Long day Short Month DD, YYYY)
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
videoDateEl.textContent = yesterday.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});