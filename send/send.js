const backBtn = document.getElementById("backBtn");
const friendListOptions = document.querySelectorAll(".friendInfoContainer");
const pageBody = document.getElementById("body");
const headerTitle = document.querySelector("#header h1");
let page = "main";

backBtn.addEventListener("click", () => {
    if (page === "main") {
        window.location.href = "/home";
    } else if (page === "alarms") {
        pageBody.innerHTML = mainPage;
        page = "main";
        headerTitle.textContent = "Choose Friend";
    } else {
        pageBody.innerHTML = addAlarmPage;
        page = "alarms";
        headerTitle.textContent = "Mom's Alarms";
    }
});

friendListOptions.forEach(el => {
    el.addEventListener("click", () => {
        pageBody.innerHTML = alarmsPage;
        page = "alarms";
        headerTitle.textContent = "Mom's Alarms";
    })
});





const mainPage = `
<div id="searchContainer">
    <input id="searchInput" type="text" placeholder="Search for Friend..." />
    <button id="searchBtn" type="button">?</button>
</div>
<div class="container friendInfoContainer">
    <div class="profilePicContainer"><img class="userProfilePic" src="../media/profile-pics/sarah_mom_profile_pic.jpg" /></div>
    <div class="friendNameContainer">
        <p class="friendNickname">Mom</p>
        <p class="friendName">Charlotte Dupree</p>
    </div>
</div>
<div class="container friendInfoContainer">
    <div class="profilePicContainer">
        <img class="userProfilePic" src="../media/profile-pics/alex_profile_pic.jpg" />
    </div>
    <div class="friendNameContainer">
        <p class="friendNickname">Alex</p>
        <p class="friendName">Alex Thompson</p>
    </div>
</div>
<div class="container friendInfoContainer">
    <div class="profilePicContainer">
        <img class="userProfilePic" src="../media/profile-pics/jaime_profile_pic.jpg" />
    </div>
    <div class="friendNameContainer">
        <p class="friendNickname">Jaime</p>
        <p class="friendName">Jaime Wilson</p>
    </div>
</div>
<div class="container friendInfoContainer">
    <div class="profilePicContainer">
        <img class="userProfilePic" src="../media/profile-pics/sarah_dad_profile_pic.jpg" />
    </div>
    <div class="friendNameContainer">
        <p class="friendNickname">Dad</p>
        <p class="friendName">Harold Dupree</p>
    </div>
</div>
<div class="container friendInfoContainer">
    <div class="profilePicContainer">
        <img class="userProfilePic" src="../media/profile-pics/katie_profile_pic.jpg" />
    </div>
    <div class="friendNameContainer">
        <p class="friendNickname">Roomie</p>
        <p class="friendName">Katie Chen</p>
    </div>
</div>
<div class="container friendInfoContainer">
    <div class="profilePicContainer">
        <img class="userProfilePic" src="../media/profile-pics/ryan_profile_pic.jpg" />
    </div>
    <div class="friendNameContainer">
        <p class="friendNickname">Ryan</p>
        <p class="friendName">Ryan Martinez</p>
    </div>
</div>
`;

const alarmsPage = `
<div id="dateHeader" class="container">
    <div class="headerText">Choose a Date</div>
    <div id="dateSelector">
        <button class="calNavBtn">&lt;</button><span id="dateText">Wednesday, Sept. 17</span><button
            class="calNavBtn">&gt;</button>
    </div>
</div>
<hr />
<div id="alarmsContainer">
    <div class="alarm">
        <div class="alarmInfo">
            <div class="alarmTime">
                <h3>07:00 AM</h3>
            </div>
            <div class="divider"></div>
            <div class="alarmDetails">
                <p>Wake Up</p>
            </div>
        </div>
    </div>
    <div class="alarm">
        <div class="alarmInfo">
            <div class="alarmTime">
                <h3>12:00 PM</h3>
            </div>
            <div class="divider"></div>
            <div class="alarmDetails">
                <p>Lunchtime</p>
            </div>
        </div>
    </div>
    <div class="alarm">
        <div class="alarmInfo">
            <div class="alarmTime">
                <h3>06:00 PM</h3>
            </div>
            <div class="divider"></div>
            <div class="alarmDetails">
                <p>Exercise</p>
            </div>
        </div>
    </div>
</div>
`;

const addAlarmPage = `

`