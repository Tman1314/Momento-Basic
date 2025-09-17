const magicLinkBtn = document.getElementById('magicLinkBtn');
const email = document.getElementById('email');
const thirdPartyBtns = document.querySelectorAll('.thirdPartyBtn');
const loginForm = document.getElementById('loginForm');

thirdPartyBtns.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '/home';
    });
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    if (emailValue) {
        // Simulate a successful login
        window.location.href = '/home';
    } else {
        alert('Please enter your email address.');
    }
});
