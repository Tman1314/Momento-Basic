const magicLinkBtn = document.getElementById('magicLinkBtn');
const email = document.getElementById('email');
const thirdPartyBtns = document.querySelectorAll('.thirdPartyBtn');
const loginForm = document.getElementById('loginForm');
const dialogCloseBtn = document.getElementById("closeDialogBtn");
const warningDialog = document.getElementById("warningDialog");


thirdPartyBtns.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '/home';
    });
});

dialogCloseBtn.addEventListener("click", () => {
    warningDialog.close();
})

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
