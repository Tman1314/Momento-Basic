const backBtn = document.getElementById("backBtn");
const alarmTitleInput = document.getElementById("alarmTitleInput");
const alarmDateTimeInput = document.getElementById("alarmDateTimeInput");

backBtn.addEventListener("click", () => {
    window.location.href = "/home";
});


document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();

    const minutes = now.getMinutes();

    if (minutes < 30) {
      now.setMinutes(30, 0, 0);
    } else {
      now.setHours(now.getHours() + 1, 0, 0, 0);
    }

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");

    alarmDateTimeInput.value = `${year}-${month}-${day}T${hours}:${mins}`;
});