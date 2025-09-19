const dateText = document.getElementById("dateText");
const recentAlarmsDates = document.querySelectorAll(".recentAlarmDate");
const currentAlarmInfoArray = document.querySelectorAll(".currentAlarm .alarmInfo");
const recentAlarmInfoArray = document.querySelectorAll(".recentAlarm .alarmInfo");
const fabOptions = document.querySelectorAll(".fabOption");

const date = new Date();
const options = { weekday: 'long', month: 'short', day: 'numeric' };
dateText.textContent = date.toLocaleDateString('en-US', options);

recentAlarmsDates.forEach(element => {
    const recentDate = new Date();
    recentDate.setDate(date.getDate() - Array.from(recentAlarmsDates).indexOf(element) - 1);
    const month = String(recentDate.getMonth() + 1).padStart(2, '0');
    const day = String(recentDate.getDate()).padStart(2, '0');
    const year = recentDate.getFullYear();
    element.textContent = `${month}/${day}/${year}`;
});

currentAlarmInfoArray.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '/manage';
    });
});

recentAlarmInfoArray.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '/view';
    });
});

fabOptions.forEach(option => {
    let optionName = option.textContent.trim().toLowerCase();
    let firstWord = optionName.split(' ')[0];
        option.addEventListener('click', () => {
            window.location.href = `/${firstWord}`;
    });
});