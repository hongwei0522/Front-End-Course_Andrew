// 共同檔案的 JS
import data from "../data/article.json" with { type: "json" };


let dataArray = Object.values(data.article);
let articles = dataArray.map((item) => {
  return {
    classId: item.creatTime,
    classType: item.classType,
    teachWay: item.teachWay,
    classCity: item.city,
    classImg: item.squareUrl,
    className: item.name,
    classDescription: item.preface,
    fee: item.fee,
    weekHour: item.weekHour,
  };
});



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
const forgetPasswordBtn = dom.get("#forgetPassword");
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

// 忘記密碼
function forgetPassword() {
  const email = emailInput.value.trim();
  const auth = firebase.auth();

  if(!email) {
    alertBoxOpen("請輸入電子郵件後，再次點選「忘記密碼");
    alertBoxClose();

  } else {
    auth.sendPasswordResetEmail(email)
     .then(() => {
      alertBoxOpen("請至信箱收件重置密碼");
      alertBoxClose();
     })
     .catch((error) => {
       alertBoxOpen("請輸入正確信箱");
       alertBoxClose();
       console.log("忘記密碼 error", error.message);
     })
  }
}

forgetPasswordBtn.addEventListener("click", forgetPassword);


// Search
// Search display none or block function
let searchOpen = false;
const searchBar = dom.get("#Search");
const searchBlackGround = dom.get(".black-ground");

function toggleSearchBlock() {

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
searchBar.addEventListener("click", () => {
  toggleSearchBlock();
});

searchBlackGround.addEventListener("click", () =>{
  toggleSearchBlock();
})

const searchSection = dom.get("#searchSection");
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

// Test Go
// let testGoOpen = false
const aside = document.querySelector("#my-aside")
const testGoWrapper = document.querySelector(".testgo-wrapper")
const testGoContainer = document.querySelector(".testgo-container")
const testGoWords = document.querySelector(".testgo-word")

function stopPropagationEvent(newElement) {
  newElement.addEventListener("click", (e) =>{
    e.stopPropagation()
  })
}


function createStopPropagationElement(label, domClassName, domText, domParent) {
  const parent = document.querySelector(domParent)
  const newElement = document.createElement(label)
  newElement.className = domClassName
  newElement.textContent = domText
  parent.appendChild(newElement)
  stopPropagationEvent(newElement)
}

function testGoImgBackGround(label, domClassName) {
  const testGoContainer = document.querySelector(".testgo-container")
  const newElement = document.createElement(label)
  newElement.className = domClassName
  newElement.src = '../assets/images/game-bg.jpg'
  newElement.alt = '測驗背景'
  testGoContainer.appendChild(newElement)
  stopPropagationEvent(newElement)
}

function createTestGoElement(label, domClassName, domText, domParent, func) {
  const parent = document.querySelector(domParent)
  const newElement = document.createElement(label)
  newElement.className = domClassName
  newElement.textContent = domText
  parent.appendChild(newElement)
  newElement.addEventListener("click", (e) => {
    e.stopPropagation()

    if(func) {
      func(e)
    }
  })
}

function testGoTitle(domClassName, domText) {
  createTestGoElement('p', domClassName, domText, '.testgo-word', '')
}

function textGotext(domClassName, domText) {
   createTestGoElement('p', domClassName, domText, '.testgo-word', '')
}

function testGoBtn( domText, func) {
  createTestGoElement('p', 'testgo-go-btn', domText, '.testgo-word', func)
}


function testGoLevelOneTrigger(e) {
  const testGoWords = document.querySelector(".testgo-word")
  testGoWords.innerHTML = ''
  testGoTitle('testgo-title-two', '選擇在哪座城市學習?')
  textGotext('testgo-level-number', '1/5')
  testGoBtn('台北', testGoLevelTwoTrigger)
  testGoBtn('台中', testGoLevelTwoTrigger)
  testGoBtn('高雄', testGoLevelTwoTrigger)
  testGoBtn('各地', testGoLevelTwoTrigger)
  testGoBtn('無限制', testGoLevelTwoTrigger)
  
}

let collectAllSelect = []
function testGoLevelTwoTrigger(e) {
  const testGoWords = document.querySelector(".testgo-word")
  const eText = e.target.textContent
  testGoWords.innerHTML = ''
  testGoTitle('testgo-title-two', '每月能撥出多少費用學習?')
  textGotext('testgo-level-number', '2/5')
  testGoBtn('3000元以下', testGoLevelThreeTrigger)
  testGoBtn('6000元以下', testGoLevelThreeTrigger)
  testGoBtn('10000元以下', testGoLevelThreeTrigger)
  testGoBtn('10001元以上', testGoLevelThreeTrigger)
  testGoBtn('無限制', testGoLevelThreeTrigger)
  collectAllSelect.push(eText)
  
}

function testGoLevelThreeTrigger(e) {
  const testGoWords = document.querySelector(".testgo-word")
  const eText = e.target.textContent
  testGoWords.innerHTML = ''
  testGoTitle('testgo-title-two', '每週能撥出多少時間學習?')
  textGotext('testgo-level-number', '3/5')
  testGoBtn('16小時以下', testGoLevelFourTrigger)
  testGoBtn('30小時以下', testGoLevelFourTrigger)
  testGoBtn('45小時以下', testGoLevelFourTrigger)
  testGoBtn('46小時以上', testGoLevelFourTrigger)
  testGoBtn('無限制', testGoLevelFourTrigger)
  collectAllSelect.push(eText)
  console.log("collectAllSelect 2", collectAllSelect)
  console.log("Number collectAllSelect 2", parseInt(collectAllSelect[1]))

}

function testGoLevelFourTrigger(e) {
  const testGoWords = document.querySelector(".testgo-word")
  const eText = e.target.textContent
  testGoWords.innerHTML = ''
  testGoTitle('testgo-title-two', '對班制的需求是?')
  textGotext('testgo-level-number', '4/5')
  testGoBtn('大班制', testGoLevelFiveTrigger)
  testGoBtn('小班制', testGoLevelFiveTrigger)
  testGoBtn('一對一', testGoLevelFiveTrigger)
  testGoBtn('無限制', testGoLevelFiveTrigger)
  collectAllSelect.push(eText)
}

function testGoLevelFiveTrigger(e) {
  const testGoWords = document.querySelector(".testgo-word")
  const eText = e.target.textContent
  testGoWords.innerHTML = ''
  testGoTitle('testgo-title-two', '喜歡什麼樣的教學方式?')
  textGotext('testgo-level-number', '5/5')
  testGoBtn('放養制', testGoLevelSixTrigger)
  testGoBtn('手把手教制', testGoLevelSixTrigger)
  testGoBtn('無限制', testGoLevelSixTrigger)
  collectAllSelect.push(eText)
}

function testGoLevelSixTrigger(e) {
  const eText = e.target.textContent

  testGoLevelSevenContent()
  collectAllSelect.push(eText)
  filterAllSelect() 
}

function testGoLevelSevenContent() {
  const testGoWords = document.querySelector(".testgo-word")
  const testGoContainer = document.querySelector(".testgo-container")

  testGoContainer.removeChild(testGoWords)
  testGoContainer.innerHTML = `
    <img
      class="container-bg"
      src="../assets/images/game-bg.jpg"
      alt="Testgo背景"
    />
    <div class="progress-container">
      <p class="testgo-title-two">你有多適合下列學校呢？</p>
      <div class="progress-circle-group">
        <svg class="circle-svg">
          <circle cx="120" cy="120" r="100" id="progress-circle-one"></circle>
          <circle cx="120" cy="120" r="100" id="progress-circle-two"></circle>
        </svg>
      </div>
      <div class="progress-number" id="progress-number">0%</div>
      <a id="testResult" class="test-result" href="#">六角學院</a>
    </div>
  `
}

let selectTotal = []
function filterAllSelect() {
  // 篩選 city 
  if(collectAllSelect[0] !== '無限制') {
    articles.forEach(article => {
      if ( article.classCity === collectAllSelect[0] ) {
        selectTotal.push(article.className)
      }
    })
  }

  // 篩選 fee
  // 3000元以下
    if(parseInt(collectAllSelect[1])<= 3000){
      articles.forEach(article => {
        if(article.fee === '1800' ||  article.fee === '3000') {
          selectTotal.push(article.className)
        }
      })
    
  // 6000元或 10000元以下  
    } else if (parseInt(collectAllSelect[1])<= 6000 ||parseInt(collectAllSelect[1])<= 10000 ) {
      articles.forEach(article => {
        if(article.fee === '1800' ||  article.fee === '3000' || article.fee === '5000') {
          selectTotal.push(article.className)
        }
      })
    }

  //篩選 week hour
    // 16小時以下
    if(parseInt(collectAllSelect[2]) <= 16) {
      articles.forEach(article => {
        if(article.weekHour === '16') {
          selectTotal.push(article.className)
        }
      })
    // 30小時以下
    } else if(parseInt(collectAllSelect[2]) <= 30) {
      articles.forEach(article => {
        if(article.weekHour === '16' || article.weekHour === '18' || article.weekHour === '20') {
          selectTotal.push(article.className)
        }
      })
    
    // 45小時以下
    } else if(parseInt(collectAllSelect[2]) <= 45) {
      articles.forEach(article => {
        if(article.weekHour === '16' || 
           article.weekHour === '18' || 
           article.weekHour === '20' || 
           article.weekHour === '32'
          ) {
          selectTotal.push(article.className)
        }
      })
    }

  //篩選 class type
    if(collectAllSelect[3] !== '無限制') {
      articles.forEach(article => {
        if(article.classType === collectAllSelect[3]) {
          selectTotal.push(article.className)
        }
      })
    }

  //篩選 teacWay
    if(collectAllSelect[4] !== '無限制') {
      articles.forEach(article => {
        if(article.teachWay === collectAllSelect[4]) {
          selectTotal.push(article.className)
        }
      })
    }

  startRandomChange()
}


// let finalValue = 85;
// let finalResult = 'AppWorks School'
let currentProgress = 0;
const circumference = 628; // 更新圓周長 (2πr, r=100)
let resultTexts = articles.map(article => {
  return article.className
})


function startRandomChange() {
    let modeMap = {};
    let finalValue = '0'
    let finalResult = selectTotal[0];
    let maxCount = 1;

    for(let i = 0; i < selectTotal.length; i++){
        let el = selectTotal[i];

        if(modeMap[el] == null){
            modeMap[el] = 1;
        }else{
            modeMap[el]++;  
        }
        if(modeMap[el] > maxCount){
            finalResult = el;
            maxCount = modeMap[el];
        }
    }

     if(maxCount == 5){
        finalValue = '100';

    }else if(maxCount == 4){
        finalValue = '80';

    }else if(maxCount == 3){
        finalValue = '60';

    }else if(maxCount == 2){
        finalValue = '40'

    }else if(maxCount == 1){
        finalValue = '20';

    }else if(maxCount == 0){
        finalValue = '5';
    }



  const result = document.querySelector('.test-result')

  let randomChangeInterval = setInterval(() => {
    let randomIncrement = Math.floor(Math.random() * 5 + 1);
    let randomText = Math.floor(Math.random() * resultTexts.length )

    currentProgress += randomIncrement;

    if (currentProgress > finalValue) currentProgress = finalValue;

    updateProgress(currentProgress);
    result.textContent = resultTexts[randomText]

    if (currentProgress === finalValue) {
      clearInterval(randomChangeInterval);
      result.textContent = finalResult
      currentProgress = 0
      testResultToLink(finalResult)
    }
  }, 100);

  // clear
  collectAllSelect = []
  selectTotal = []

}

// testResult a 連結
function testResultToLink(finalResult) {
  const testResult = document.querySelector("#testResult")

  articles.forEach(article => {
    if(article.className === finalResult) {
      testResult.setAttribute("href", `./content.html?id=${article.classId}`)
    }
  })
}

function updateProgress(percentage) {
  const progressNumberElement = document.getElementById("progress-number");
  const progressCircleElement = document.getElementById("progress-circle-two");

  progressNumberElement.textContent = `${percentage}%`;

  const offset = circumference - (percentage / 100) * circumference;
  progressCircleElement.style.strokeDashoffset = offset;
}

function testGoContentStart() {
  testGoWrapper.style.display = 'flex'
  createStopPropagationElement('div', 'testgo-container', '', '.testgo-wrapper')
  testGoImgBackGround('img', 'container-bg')
  createStopPropagationElement('div', 'testgo-word', '', '.testgo-container')
  testGoTitle('testgo-title-one', '測驗說明')
  textGotext('testgo-text', '點選「開始測驗」後，系統將根據你的回答，找出最適合你的學習環境，並顯示有多少百分比的合適度。')
  createTestGoElement('p', 'testgo-start-btn', '開始測驗', '.testgo-word', testGoLevelOneTrigger)
}

const HomeTestGo = document.querySelector("#home-testgo")
if(HomeTestGo) {
  HomeTestGo.addEventListener("click", testGoContentStart)
}

aside.addEventListener("click", testGoContentStart)

testGoWrapper.addEventListener("click", () =>{
  testGoWrapper.style.display = 'none'
  testGoWrapper.innerHTML = ''
  collectAllSelect = []
  selectTotal = []
})


// back to top
const Top = document.querySelector("#top")
Top.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop;
});

// loading
dom.loading = function () {
  const loadingAnimation = document.querySelector("#loadingAnimation")
  const loadingDrawing = document.querySelector("#loadingDrawing")
  const loadingImg = document.querySelector("#loadingImg")
  const header = document.querySelector("#header")
  const myAside = document.querySelector("#my-aside")

  loadingAnimation.style.height = "0px";
  loadingAnimation.style.opacity = "0.9";
  loadingDrawing.style.height = "0px";
  loadingDrawing.style.opacity = "0.9";
  loadingImg.style.marginBottom = "-1000px";
  header.animation = "headerGoUp 0.9s ease 0s 1 alternate";
  myAside.animation = "asiderunning 0.9s ease 0s 1 alternate";
  setTimeout(function () {
    loadingAnimation.style.display = "none";
  }, 600);
};

// loading display none
setTimeout(() => {
  dom.loading();
}, 1000);
