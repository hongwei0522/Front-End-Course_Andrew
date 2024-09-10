// 共同檔案的 JS
// general method
let dom = {
  evts: {},
  search: {},
  testGo: {},
  log: {},
  rotate: {},
  article: {},
  skillTree: {},
  collect: {},
};

// core operations
dom.get = function (selector) {
  return document.querySelector(selector);
};

// login & signup
const loginPoint = dom.get("#loginClick");
const loginPage = dom.get(".login-wrapper");
const emailInput = dom.get("#email");
const passwordInput = dom.get("#password");
const signupBtn = dom.get("#signup");
const loginBtn = dom.get("#login");
const gamilBtn = dom.get("#gmail-btn");
const okBtn = dom.get("#alert-btn");
const alertBox = dom.get(".alert-wrapper");
const alertText = dom.get(".alert-word");

// alertBox Open
function alertBoxOpen(msg) {
  alertBox.style.display = "flex";
  alertText.textContent = msg;
}

// alertBox close
function alertBoxClose(loginTrigger = false) {
  let clickOk = false;
  okBtn.addEventListener("click", () => {
    clickOk = true;
    if (clickOk) {
      alertBox.style.display = "none";

      // 如果是登入頁面 => 關閉 login modal
      if (loginTrigger) {
        loginPage.style.display = "none";
        loginTrigger = false;
      }
    }
  });
}

let database = firebase.database();

function storeToFirebase() {
  let memberRef = database.ref("/member");
  let dataExist;
  memberRef
    .orderByChild("mail")
    .equalTo(userState.email)
    .once("value")
    .then((snapshot) => {
      dataExist = snapshot.exists();

      if (!dataExist) {
        const newPostKey = firebase.database().ref().child("member").push().key;

        const userDate = {
          name: userState.displayName,
          mail: userState.email,
          phone: userState.phoneNumber || "",
          photoUrl: userState.photoURL || "",
          creatTime: new Date().getTime(),
          uid: newPostKey,
        };

        firebase
          .database()
          .ref("member/" + newPostKey)
          .set(userDate);
        console.log("已建立新資料");
      }
    });
}

//detect user login in
let userState;
firebase.auth().onAuthStateChanged(function (user) {
  userState = user;
  if (user) {
    // 登入轉換成會員
    loginPoint.textContent = "會員";

    // 宣告 database member 變數 & database該 mail 的值
    storeToFirebase();
  } else {
    userState = null;
    loginPoint.textContent = "登入";
  }
});

// click login point
loginPoint.addEventListener("click", () => {
  if (userState) {
    // 已登入狀態 => 進入會員頁面
    window.location.href = "profile.html";
  } else {
    // 未登入狀態 => 打開登入modal
    loginPage.style.display = "flex";
  }
});

loginPage.addEventListener("click", (e) => {
  const target = e.target;
  if (target === loginPage) {
    loginPage.style.display = "none";
  }
});

// signup
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // 檢查 email & password 是否為空字串
  if (!email || !password) {
    alertBoxOpen("請輸入電子郵件和密碼");
    alertBoxClose();
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log("註冊成功", result);
      alertBoxOpen("註冊成功，請直接登入");
      alertBoxClose();
    })
    .catch((error) => {
      console.log("註冊失敗", error);

      if (error.code === "auth/invalid-email") {
        alertBoxOpen("電子郵件格式不正確，請重新輸入");
        alertBoxClose();

      } else if (error.code === "auth/email-already-in-use") {
        alertBoxOpen("電子郵件格式已註冊過，請重新輸入");
        alertBoxClose();
        
      } else if (error.code === "auth/weak-password") {
        alertBoxOpen("密碼強度不夠，請輸入至少六碼密碼");
        alertBoxClose();
      }
    });
});

// login
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let loginTrigger = true;
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // 檢查 email & password 是否為空字串
  if (!email || !password) {
    alertBoxOpen("請輸入電子郵件和密碼");
    alertBoxClose();
    return;
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log("登入成功", result);
      alertBoxOpen("登入成功，可進入會員頁面");
      alertBoxClose(loginTrigger);

      // 登入轉換成會員
      loginPoint.textContent = "會員";
    })
    .catch((error) => {
      console.log("登入失敗", error);
      alertBoxOpen("電子郵件或密碼輸入錯誤");
      alertBoxClose();
    });
});

// Google login
gamilBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let loginTrigger = true;
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("Google 登入成功", result);
      alertBoxOpen("登入成功，可進入會員頁面");
      alertBoxClose(loginTrigger);
      // const credential = result.credential;
      // const token = credential.accessToken;
      // const user = result.user;
    })
    .catch((error) => {
      console.log("Google 登入失敗", error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
    });
});


// Search
// Search display none or block function
let searchOpen = false;
function searchBlock() {
  // searbar 未開啟狀態
  if (!searchOpen) {
    searchOpen = true;
    searchSection.classList.add("d-block");
    searchInput.placeholder = "依課程機構、教學風格及地區搜尋";
    searchInput.value = "";

  } else {
    // searbar 已開啟狀態
    searchOpen = false;
    searchSection.classList.remove("d-block");
  }
}

// Click search Diaplay none or block
dom.get("#Search").addEventListener("click", () => {
  searchBlock();
});

const searchSection = dom.get(".search-section");
const searchInput = dom.get("#search-input");
const searchClick = dom.get("#searchClcik");

// 點擊 search bar 事件
searchClick.addEventListener("click", () => {
  const searchInputValue = searchInput.value.toLowerCase().trim();

  if (!searchInputValue) {
    // 請輸入文字提示
    alertBoxOpen("請輸入搜尋關鍵字");
    alertBoxClose();
    return;
  }

  // 跳轉頁面
  location.href = "./article.html?id=" + searchInputValue;
});

//search input enter 事件
searchInput.addEventListener("keydown", (e) => {
  // e.preventDefault();
  const searchInputValue = searchInput.value.trim();

  if (e.key === 'Enter') {
    e.preventDefault();

    if (!searchInputValue) {
      // 請輸入文字提示
      alertBoxOpen("請輸入搜尋關鍵字");
      alertBoxClose();
      return;
    }

    // 跳轉頁面
    location.href = "./article.html?id=" + searchInputValue;
  }
});

// back to top
dom.get("#top").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop;
});

// loading
dom.loading = function () {
  dom.get("#loadingAnimation").style.height = "0px";
  dom.get("#loadingAnimation").style.opacity = "0.9";
  dom.get("#loadingDrawing").style.height = "0px";
  dom.get("#loadingDrawing").style.opacity = "0.9";
  dom.get("#loadingImg").style.marginBottom = "-1000px";
  dom.get("#header").animation = "headerGoUp 0.9s ease 0s 1 alternate";
  dom.get("#my-aside").animation = "asiderunning 0.9s ease 0s 1 alternate";
  setTimeout(function () {
    dom.get("#loadingAnimation").style.display = "none";
  }, 600);
};

// loading display none
setTimeout(() => {
  dom.loading();
}, 1000);
