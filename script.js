// Counter functionality
let count = 0;
const counterElement = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;

    // Add a little animation
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 200);
});

counterElement.style.transition = 'transform 0.2s';

// Display current date
const dateElement = document.getElementById('date');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = today.toLocaleDateString('en-US', options);
