const backBtn = document.getElementById("backBtn");
const friendListOptions = document.querySelectorAll(".friendInfoContainer");

backBtn.addEventListener("click", () => {
    window.location.href = "/home";
});

friendListOptions.forEach(el => {
    el.addEventListener("click", () => {
        
    })
});