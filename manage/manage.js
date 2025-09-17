const backButton = document.getElementById('backBtn');
const alarmDate = document.getElementById('alarmDate');

backButton.addEventListener('click', () => {
    window.location.href = '/home';
});

//Set Date to today for demo purposes (MM/DD/YYYY)
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = mm + '/' + dd + '/' + yyyy;
alarmDate.textContent = formattedToday;