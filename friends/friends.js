const backBtn = document.getElementById("backBtn");
const editFriendsBtn = document.getElementById("editFriendsBtn");
const addFriendBtn = document.getElementById("addFriendBtn");
const friendListEditChecks = document.querySelectorAll(".friendSelectContainer");
const editModeCheckboxes = document.querySelectorAll(".switch input[type='checkbox']");
const addFriendDialog = document.getElementById("addFriendDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");
let editMode = false;

backBtn.addEventListener("click", () => {
    window.location.href = "/home";
});

function enterEditMode() {
  friendListEditChecks.forEach(el => el.classList.remove("hidden"));
  editFriendsBtn.textContent = "Cancel";
  addFriendBtn.textContent = "Remove Selected";
  editMode = true;
}

function exitEditMode() {
  friendListEditChecks.forEach(el => el.classList.add("hidden"));
  editFriendsBtn.textContent = "Edit Friends";
  addFriendBtn.textContent = "Add Friends";
  editModeCheckboxes.forEach(el => el.checked = false);
  editMode = false;
}

editFriendsBtn.addEventListener("click", () => {
  if (editMode) {
    exitEditMode();
  } else {
    enterEditMode();
  }
});

addFriendBtn.addEventListener("click", () => {
  if (editMode) {
    exitEditMode();
  } else {
    addFriendDialog.showModal();
  }
});

closeDialogBtn.addEventListener("click", () => {
    addFriendDialog.close();
})