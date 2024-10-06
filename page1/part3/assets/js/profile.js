

// 宣告 button 節點
const profileBtn = document.querySelector("#profileBtn");
const favoriteBtn = document.querySelector("#favoriteBtn");
const userWrapper = document.querySelector("#userWrapper");
const userInfo = document.querySelector("#userContainer");
const favoriteInfo = document.querySelector("#favoriteContainer");


const prfileImg = document.querySelector("#profileImg");
const prfileName = document.querySelector("#profileName");
const prfilePhone = document.querySelector("#profilePhone");
const prfileEmail = document.querySelector("#profileEmail");


const defaultImg =
  "https://static.vecteezy.com/system/resources/previews/018/765/138/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg";

let memberRef = firebase.database().ref("/member");
let data;
let profileData;
let userState

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
        let prfileImg = document.querySelector("#profileImg");
        let prfileName = document.querySelector("#profileName");
        let prfilePhone = document.querySelector("#profilePhone");
        let prfileEmail = document.querySelector("#profileEmail");

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

const okBtn = document.querySelector("#alert-btn")
const alertBox = document.querySelector(".alert-wrapper");
const alertText = document.querySelector(".alert-word");

// alertBox Open
function alertBoxOpen(msg) {
  alertBox.style.display = "flex";
  alertText.textContent = msg;
}

const loginOutBtn = document.querySelector("#loginOutBtn");

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
            // console.log("登出成功");
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
loginOutBtn.addEventListener("click", () => {
  alertBoxOpen("確定是否登出");
  loginoutAlertBoxClose();
});

// 觸及修改事件
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
    });
}

function getUserData() {
  firebase.auth().onAuthStateChanged(function (user) {

    if (user) {

      let prfileImg = document.querySelector("#profileImg");
        let prfileName = document.querySelector("#profileName");
        let prfilePhone = document.querySelector("#profilePhone");
        let prfileEmail = document.querySelector("#profileEmail");

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

const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const deviceBtn = document.querySelector("#deviceBtn");
const deviceGroup = document.querySelector("#deviceGroup");


// 點擊修改按鈕後
if (deviceBtn) {
  deviceBtn.addEventListener("click", () => {
    prfileName.disabled = false;
    prfilePhone.disabled = false;
    prfileName.style.backgroundColor = "white";
    prfilePhone.style.backgroundColor = "white";
    prfileName.style.border = "1px solid rgba(230, 230, 230, 0.7)";
    prfilePhone.style.border = "1px solid rgba(230, 230, 230, 0.7)";
    deviceBtn.style.display = "none";
    deviceGroup.style.display = "flex";
  });
}

// 點擊確認按鈕後
if (confirmBtn) {
  confirmBtn.addEventListener("click", () => {
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
}

// 點擊取消按鈕後
if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
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
}

// 點擊個人資料
profileBtn.addEventListener("click", () => {
  favoriteInfo.style.display = "none";
  userInfo.style.display = "flex";

  getUserData();
});


// favorite data 
import datas from "../data/article.json" with { type: "json" };

let dataArrays = Object.values(datas.article);
let favoriteDatas = dataArrays.map((item) => {
  return {
    id: item.creatTime,
    img: item.squareUrl,
    name: item.name,
  };
});

// 點擊收藏
favoriteBtn.addEventListener("click", () => {
  userInfo.style.display = "none";
  favoriteInfo.style.display = "flex"

  displayFavoriteCard()

});

// 渲染收藏列表 
function displayFavoriteCard() {
  favoriteInfo.innerHTML = '';
  const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []

  //  篩選出 favoriteDatas & favoriteList 有共同 id 的值
  const favoriteCards = favoriteDatas.filter( favoriteData => {
    return favoriteList.some( favoriteListId => favoriteData.id === Number(favoriteListId))
  })

  favoriteCards.forEach(card => {
    const favoriteCardDiv = document.createElement("div")
    favoriteCardDiv.setAttribute("class", "favorite-card")
    favoriteCardDiv.innerHTML = `
      <a href="./content.html?id=${card.id}">
        <img class="favorite-img" src="${card.img}" alt="收藏課程">
      </a>
      <p class="favorite-title">${card.name}</p>
      <img class="favorite-delete" data-id=${card.id} src="https://frankyeah.github.io/Front-Enter/images/rubbish-bin.svg" alt="刪除 icon">
    `
    favoriteInfo.appendChild(favoriteCardDiv);
  })
}

// 刪除收藏列表-點擊事件處理
  document.body.addEventListener("click", (event) => {
    const target =event.target
    const id = target.dataset.id

    if(target.classList.contains('favorite-delete')) {

      let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
      const findId = favoriteList.some(favoriteId => favoriteId === id)

      if (findId) {
        console.log("findId", findId)
        favoriteList = favoriteList.filter(favoriteId => favoriteId !== id);
      }

      localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
      displayFavoriteCard()
    }
  })



