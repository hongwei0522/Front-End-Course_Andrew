const prfileImg = dom.get("#profile-img");
const prfileName = dom.get("#profile-name");
const prfilePhone = dom.get("#profile-phone");
const prfileEmail = dom.get("#profile-email");
const defaultImg = "/page1/part3/assets/images/user-img.png";
let memberRef = database.ref("/member");
let data;
let profileData;

firebase.auth().onAuthStateChanged(function (user) {
  userState = user;

  if (user) {
    // let data;
    // let profileData;

    memberRef
      .orderByChild("mail")
      .equalTo(userState.email)
      .once("value")
      .then((snapshot) => {
        data = snapshot.val();

        const postKey = Object.keys(data)[0]; // 獲取第一個 key
        profileData = data[postKey];

        if (!data) {
          const loginUser = user.multiFactor.user;
          const displayName = loginUser.displayName || "";
          const email = loginUser.email || "";
          const phoneNumber = loginUser.phoneNumber || "";
          const photoURL = loginUser.photoURL || defaultImg;

          prfileImg.src = photoURL;
          prfileName.value = displayName;
          prfileEmail.value = email;
          prfilePhone.value = phoneNumber;
        } else {
          const name = profileData.name || "";
          const email = profileData.mail || "";
          const phoneNumber = profileData.phone || "";
          const photoURL = profileData.photoUrl || defaultImg;

          prfileImg.src = photoURL;
          prfileName.value = name;
          prfileEmail.value = email;
          prfilePhone.value = phoneNumber;
        }
      });
  } else {
    window.location = "index.html";
  }
});

const loginOutP = document.querySelector("#login-out");

// alertBox close
function loginoutAlertBoxClose() {
  let clickOk = false;
  okBtn.addEventListener("click", () => {
    clickOk = true;
    if (clickOk) {
      alertBox.style.display = "none";

      setTimeout(() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log("登出成功");
            window.location.href = "index.html";
          })
          .catch((error) => {
            console.log("登出失敗", error);
          });
      }, 500);
    }
  });
}

// 觸及登出事件
loginOutP.addEventListener("click", () => {
  alertBoxOpen("確定是否登出");
  loginoutAlertBoxClose();
});

// 觸及修改事件
const deviceBtn = dom.get("#device-btn");
const deviceGroup = dom.get(".device-group");
const confirmBtn = dom.get("#confirm-btn");
const cancelBtn = dom.get("#cancel-btn");

function updateUserData() {
  let data;
  memberRef
    .orderByChild("mail")
    .equalTo(userState.email)
    .once("value")
    .then((snapshot) => {
      data = snapshot.val();

      const postKey = Object.keys(data)[0]; // 獲取第一個 key
      const profileData = data[postKey];

      const newUserDate = {
        name: prfileName.value.trim() || profileData.name || "",
        mail: profileData.mail,
        phone: prfilePhone.value.trim() || profileData.phone || "",
        photoUrl: profileData.photoUrl || "",
        creatTime: profileData.creatTime || new Date().getTime(),
        uid: postKey,
      };

      firebase
        .database()
        .ref("member/" + postKey)
        .set(newUserDate);
      console.log("已更新資料");
    });
}

function getUserData() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const displayName = profileData.name || "";
      const email = profileData.mail || "";
      const phoneNumber = profileData.phone || "";
      const photoURL = profileData.photoUrl || defaultImg;

      prfileImg.src = photoURL;
      prfileName.value = displayName;
      prfileEmail.value = email;
      prfilePhone.value = phoneNumber;
    }
  });
}

// 點擊修改按鈕後
deviceBtn.addEventListener("click", () => {
  console.log("deviceBtn", deviceBtn);
  prfileName.disabled = false;
  prfilePhone.disabled = false;
  prfileName.style.backgroundColor = "white";
  prfilePhone.style.backgroundColor = "white";
  prfileName.style.border = "1px solid rgba(230, 230, 230, 0.7)";
  prfilePhone.style.border = "1px solid rgba(230, 230, 230, 0.7)";
  deviceBtn.style.display = "none";
  deviceGroup.style.display = "flex";
});

// 點擊確認按鈕後
confirmBtn.addEventListener("click", () => {
  console.log("觸發 confirmBtn");
  prfileName.disabled = true;
  prfilePhone.disabled = true;
  prfileName.style.backgroundColor = "rgba(230, 230, 230, 0)";
  prfilePhone.style.backgroundColor = "rgba(230, 230, 230, 0)";
  prfileName.style.border = "0px solid rgba(230, 230, 230, 0.7)";
  prfilePhone.style.border = "0px solid rgba(230, 230, 230, 0.7)";
  deviceBtn.style.display = "block";
  deviceGroup.style.display = "none";

  // 更新用者資料
  updateUserData();
});

// 點擊取消按鈕後
cancelBtn.addEventListener("click", () => {
  console.log("觸發 cancelBtn");
  prfileName.disabled = true;
  prfilePhone.disabled = true;
  prfileName.style.backgroundColor = "rgba(230, 230, 230, 0)";
  prfilePhone.style.backgroundColor = "rgba(230, 230, 230, 0)";
  prfileName.style.border = "0px solid rgba(230, 230, 230, 0.7)";
  prfilePhone.style.border = "0px solid rgba(230, 230, 230, 0.7)";
  deviceBtn.style.display = "block";
  deviceGroup.style.display = "none";

  // 獲得使用者未修改資料
  getUserData();
});
