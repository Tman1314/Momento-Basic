// Page content templates
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

const sendAlarmPage = `
<div id="alarmInfoContainer">
    <div class="alarm">
        <div class="alarmInfo">
            <div class="alarmTime">
                <h3>07:00 AM</h3>
            </div>
            <div class="divider"></div>
            <div class="alarmDetails">
                <p id="recipient">For: Mom</p>
                <p id="alarmTitle">Wake Up</p>
            </div>
        </div>
    </div>
</div>
<div id="alarmVideo" class="container">
    <label for="alarmFile" id="alarmUploadLabel">
        <div id="recordIconBackground"><div id="recordIcon"></div></div>
        Tap to start recording or choose a video file
    </label>
    <input id="alarmFile" class="hidden" type="file" accept="video/*" />
</div>
<p id="messageTitle">Add a Message (Optional)</p>
<div id="alarmMessage" class="container">
    <textarea id="alarmMessageInput" placeholder="Share a thought with your friend."></textarea>
</div>
<div id="sendBtnContainer">
    <button class="glassBtn">Send Alarm</button>
</div>
`

const backBtn = document.getElementById("backBtn");
const pageBody = document.getElementById("body");
const headerTitle = document.querySelector("#header h1");
let page = "main";

// Navigation configuration
const pages = {
    main: {
        title: "Choose Friend",
        content: mainPage,
        back: () => window.location.href = "/home",
        init: addFriendEvents
    },
    alarms: {
        title: "Mom's Alarms",
        content: alarmsPage,
        back: "main",
        init: addAlarmEvents
    },
    sendAlarm: {
        title: "Send alarm",
        content: sendAlarmPage,
        back: "alarms",
        init: null
    }
};

// Navigate to a page
const navigateTo = (pageName) => {
    const pageConfig = pages[pageName];
    pageBody.innerHTML = pageConfig.content;
    page = pageName;
    headerTitle.textContent = pageConfig.title;
    if (pageConfig.init) pageConfig.init();
};

// Back button handler
backBtn.addEventListener("click", () => {
    const backTarget = pages[page].back;
    if (typeof backTarget === "function") {
        backTarget();
    } else {
        navigateTo(backTarget);
    }
});

// Attach friend list events
function addFriendEvents() {
    document.querySelectorAll(".friendInfoContainer").forEach(el => {
        el.addEventListener("click", () => navigateTo("alarms"));
    });
}

// Attach alarm list events
function addAlarmEvents() {
    document.querySelectorAll(".alarm").forEach(el => {
        el.addEventListener("click", () => navigateTo("sendAlarm"));
    });
}

// Initialize
addFriendEvents();