
// showDetail word 變數
const showBoxData = {
  html: {
    top: "16%",
    left: "106%",
    word: "HTML <br><br> 超文件標示語言（英語：HyperText Markup Language，簡稱：HTML）是一種用於建立網頁的標準標示語  言。 <br><br>",
  },
  css: {
    top: "27%",
    left: "-81%",
    word: "CSS <br><br> 層疊樣式表（英語：Cascading Style Sheets，簡寫CSS），是一種用來為結構化文件（如 HTML 文件或 XML 應用）添加樣式（字型、間距和顏色等）的電腦語言。 <br><br>",
  },
  js: {
    top: "27%",
    left: "106%",
    word: "JavaScript <br><br> JavaScript 是一門基於原型、函式先行的語言，是一門多範式的語言，它支援物件導向編程，指令式 程式設計，以及函數語言程式設計。 <br><br>",
  },
  jQuery: {
    top: "37%",
    left: "-81%",
    word: "jQuery <br><br> jQuery 是一套跨瀏覽器的 JavaScript 函式庫，簡化 HTML 與 JavaScript 之間的操作。 <br><br>",
  },
  rwd: {
    top: "37%",
    left: "106%",
    word: "RWD <br><br> 響應式網頁設計（英語：Responsive web design，通常縮寫為 RWD），是一種網頁設計的技術做法，該設計可使網站在不同的裝置上瀏覽時，對應不同解析度皆有適合的呈現，減少使用者進行縮放、平移和捲動等操作行為。 <br><br>",
  },
  github: {
    top: "48%",
    left: "106%",
    word: "GitHub <br><br> GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務，由 GitHub 公司（曾稱 Logical Awesome）開發者使用 Ruby on Rails 編寫而成。 <br><br>",
  },
  scss: {
    top: "58%",
    left: "-81%",
    word: "SCSS <br><br> Sass 是一個將指令碼解析成 CSS 的手稿語言，即 SassScript。Sass 包括兩套語法。最開始的語法叫做「縮排語法」，使用縮排來區分程式碼塊，並且用換行將不同規則分隔開。而較新的語法叫做「SCSS」。 <br><br>",
  },
  webpack: {
    top: "58%",
    left: "106%",
    word: "Webpack <br><br> Webpack 是一個開源的前端打包工具。Webpack 提供了前端開發缺乏的模組化開發方式，將各種靜態資源視為模組，並從它生成優化過的程式碼。 <br><br>",
  },
  bootstrap: {
    top: "68%",
    left: "-81%",
    word: "bootstrap <br><br> Bootstrap 是一組用於網站和網路應用程式開發的開源前端框架，提供字體排印、表單、按鈕、導航及其他各種元件及 Javascript 擴充套件，旨在使動態網頁和 Web 應用的開發更加容易。 <br><br>",
  },
  react: {
    top: "68%",
    left: "106%",
    word: "React <br><br> React 是一個為資料提供彩現為 HTML 視圖的開源 JavaScript 庫。React 視圖通常採用包含以自訂 HTML 標記規定的其他元件的元件彩現。 <br><br>",
  },
  unit: {
    top: "68%",
    left: "106%",
    word: "Unit Testing <br><br> 在電腦編程中，單元測試（英語：Unit Testing）又稱為模組測試，是針對程式模組（軟體設計的最小單位）來進行正確性檢驗的測試工作。程式單元是應用的最小可測試部件。 <br><br>",
  },
};

const showDetail = document.querySelector("#showDetail");

// step 1: 文字說明 函式
// 滑過程式語言標題 => 出現文字說明
function showBox(topNum, leftNum, htmlContent) {
  // window width
  const width = window.innerWidth;
  if (width < 768 || width === 768) {
    return;
  }

  showDetail.style.width = "226px";
  showDetail.style.height = "auto";
  showDetail.style.color = "rgb(128, 128, 128)";
  showDetail.style.padding = "15px 10px";
  showDetail.style.borderRadius = "5px";
  showDetail.style.textAlign = "center";
  showDetail.style.backgroundColor = "#ececec";
  showDetail.style.position = "absolute";
  showDetail.style.top = topNum;
  showDetail.style.left = leftNum;
  showDetail.style.display = "block";
  showDetail.innerHTML = htmlContent;
}

// 滑離程式語言標題 => 文字說明消失
function hideBox() {
  showDetail.style.display = "none";
  showDetail.innerHTML = "";
}

// 多個game-icon 節點
const gameIconMuti = document.querySelectorAll(".game-icon");

// step1: 文字說明 事件處理
// HTML
document.querySelector("#htmlP").addEventListener("mouseover", () => {
  showBox(showBoxData.html.top, showBoxData.html.left, showBoxData.html.word);
});

document.querySelector("#htmlP").addEventListener("mouseleave", hideBox);

// CSS
document.querySelector("#cssP").addEventListener("mouseover", () => {
  showBox(showBoxData.css.top, showBoxData.css.left, showBoxData.css.word);
});

document.querySelector("#cssP").addEventListener("mouseleave", hideBox);

// JS
document.querySelector("#jsP").addEventListener("mouseover", () => {
  showBox(showBoxData.js.top, showBoxData.js.left, showBoxData.js.word);
});

document.querySelector("#jsP").addEventListener("mouseleave", hideBox);

// jQuery
document.querySelector("#jqP").addEventListener("mouseover", () => {
  showBox( showBoxData.jQuery.top, showBoxData.jQuery.left, showBoxData.jQuery.word);
});

document.querySelector("#jqP").addEventListener("mouseleave", hideBox);

// RWD
document.querySelector("#rwdP").addEventListener("mouseover", () => {
  showBox(showBoxData.rwd.top, showBoxData.rwd.left, showBoxData.rwd.word);
});

document.querySelector("#rwdP").addEventListener("mouseleave", hideBox);

// GitHub
document.querySelector("#githubP").addEventListener("mouseover", () => {
  showBox(showBoxData.github.top, showBoxData.github.left, showBoxData.github.word);
});

document.querySelector("#githubP").addEventListener("mouseleave", hideBox);

// SCSS
document.querySelector("#scssP").addEventListener("mouseover", () => {
  showBox(showBoxData.scss.top, showBoxData.scss.left, showBoxData.scss.word);
});

document.querySelector("#scssP").addEventListener("mouseleave", hideBox);

//  Webpack
document.querySelector("#webpackP").addEventListener("mouseover", () => {
  showBox(showBoxData.webpack.top, showBoxData.webpack.left, showBoxData.webpack.word);
});

document.querySelector("#webpackP").addEventListener("mouseleave", hideBox);

// Bootstarp
document.querySelector("#bootstarpP").addEventListener("mouseover", () => {
  showBox(showBoxData.bootstrap.top, showBoxData.bootstrap.left, showBoxData.bootstrap.word);
});

document.querySelector("#bootstarpP").addEventListener("mouseleave", hideBox);

// React
document.querySelector("#reactP").addEventListener("mouseover", () => {
  showBox(showBoxData.react.top, showBoxData.react.left, showBoxData.react.word);
});

document.querySelector("#reactP").addEventListener("mouseleave", hideBox);

// Unit Test
document.querySelector("#unitP").addEventListener("mouseover", () => {
  showBox(showBoxData.unit.top, showBoxData.unit.left, showBoxData.unit.word);
});

document.querySelector("#unitP").addEventListener("mouseleave", hideBox);

const emojiPart = document.querySelector("#emojiPart");
const emojiImg = document.querySelector("#emojiImg");
const emojiBox = document.querySelector("#emojiBox");

// emoji 出現
emojiBox.addEventListener("click", () => {
  emojiPart.style.display = "flex";
});

// emoji 消失
emojiPart.addEventListener("click", () => {
  emojiPart.style.display = "none";
});

// 更換emoji 1
document.querySelector("#emojiOne").addEventListener("click", () => {
  emojiPart.style.display = "none";
  emojiImg.src = "../assets/images/emoji1.svg";
});

// 更換emoji 2
document.querySelector("#emojiTwo").addEventListener("click", () => {
  emojiPart.style.display = "none";
  emojiImg.src = "../assets/images/emoji2.svg";
});

// 更換emoji 3
document.querySelector("#emojiThree").addEventListener("click", () => {
  emojiPart.style.display = "none";
  emojiImg.src = "../assets/images/emoji3.svg";
});

// step2: 問答題 函式
// 問答題節點
const gameWrapper = document.querySelector("#game");
const gameWord = document.querySelector("#gameWord");
const gameTile = document.querySelector("#gameTitle");
const AnswerOne = document.querySelector("#gameOne");
const AnswerTwo = document.querySelector("#gameTwo");
const AnswerThree = document.querySelector("#gameThree");
const rightArrow = document.querySelector("#rightArrow");
const typeWrapper = document.querySelector("#typingWrapper");

// 答對題目 - 出現打勾icon
function gameRightAnswer(answer) {
 rightArrow.style.backgroundImage = "url(https://frankyeah.github.io/Front-Enter/images/next.svg)";
  const imgIcon = document.createElement("img");
  imgIcon.setAttribute("id", "iconOne");
  imgIcon.setAttribute("class", "game-icon");
  imgIcon.src = "../assets/images/checked.svg";
  answer.appendChild(imgIcon);
}

// 點擊錯誤答案
function gameWrongAnswer(answer, iconId) {
  answer.style.animation = "RightLeftChange 0.6s ease 0s  alternate";
  const imgIcon = document.createElement("img");
  imgIcon.setAttribute("id", iconId);
  imgIcon.setAttribute("class", "game-icon");
  imgIcon.src = "../assets/images/cancel.svg";
  answer.appendChild(imgIcon);
}

//c => emoji 位置移動
function emojiMove(top, left) {
  emojiBox.style.top = top;
  emojiBox.style.left = left;
}

// d 點擊的程式語言選項變顏色
function colorChange(point) {
  document.querySelector(point).style.backgroundColor = "rgb(26, 216, 211)";
  document.querySelector(point).style.border = "1px solid rgb(26, 216, 211)";
  document.querySelector(point).style.color = "white";
}

// e => 下一個程式語言轉變
function nextOneChange(nextPoint) {
  const nextP = document.querySelector(nextPoint);
  if (nextP.style.border !== "1px solid rgb(26, 216, 211)") {
    nextP.style.border = "1px solid rgb(26, 216, 211)";
    nextP.style.color = "rgb(26, 216, 211)";
    nextP.style.cursor = "pointer";
  }
}

// 打字效果 函式
// 顯示打字內容
// HTML
const textOne =
  "你通過第一關，HTML  是成為前端工程師的橋頭堡，也是網站給人的第一印象，一定要學好才行。";
// CSS
const textTwo =
  "哇，你竟然連 CSS 也略懂略懂。如果階層樣式學得好，就具備基礎網頁設計師的能力了，這時候，對於細節的掌握就更加重要囉。";

// JS
const textThree =
  "恭喜你通過 JavaScript 關卡。JavaScript 也是小編最喜歡的語言，掌握它，就等於邁入前端工程師的行列，它不只能為你帶來一份工作，也擴展你的視野，擁有接軌科技的能力。";

// RWD
const textFour =
  "RWD 很神奇吧，它讓你在手機、平板上，都能方便觀看網頁，而不用放大縮小視窗，是讓使用者體驗升級的良方。";

const textFive =
  "jQuery 是相當方便的 JavaScript 函式庫，它幫你把程式封裝好，只要加上經典的 $ 字號作為前綴，就能使用眾多功能。";

const textSix =
  "在學習程式語言之前，很難想像有 GitHub 的存在吧，竟然有個倉庫專門在管理程式語言，還能讓人複製、共同編輯，並記錄每一次的 commit ，是一款優秀的協作工具。";

const textSeven =
  "css 屬於程式設計入門款，而預處理器能以更有效率的方式，撰寫階層樣式，如果你擁有 JavaScript 的基本概念，學起來會特別快唷。";

const textEight =
  "看來你學蠻快的，Bootstrap 能做到的，css 也能做到，如果有時間，不仿試試手刻 Bootstrap 的特效，精進樣式調校的能力。";

const textNine =
  "你已經越來越厲害，掌握了近期火紅的打包工具，Webpack 和 React 是絕配，是幫助瀏覽器進行「翻譯」的良方。";

const textTen =
  "你太強了，React 是不容易掌握的框架，能讓使用者的體驗更好，你所使用的 facebook 就是運用這套框架呢。";

const textElev =
  "你太強了，React 是不容易掌握的框架，能讓使用者的體驗更好，你所使用的 facebook 就是運用這套框架呢。";

const textTwelv =
  "終於抵達最後一關了，單元測試是為了確保函式的正確性，而進行的作業。雖然單元測試是最後一關，但工程的世界無止盡，身為一位 geek 就是要不斷學習精進唷。";

const typingText = document.querySelector("#typingText");
let charIndex = 0;

// 使用定時器每150毫秒顯示下一個字元
function type(text) {
  typingText.textContent = text.slice(0, charIndex);
  charIndex++;
}

// gameWord消失
function gameDisplayNone(e) {
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target === gameWrapper ||
      target === gameWord ||
      target === rightArrow
    ) {
      document.querySelector(".game-wrapper").style.display = "none";
      AnswerTwo.style.animation = "";
      AnswerThree.style.animation = "";
      rightArrow.style.backgroundImage = "";
    }
  });
}

function gameWordChange(
  title,
  gameOne,
  gameTwo,
  gameThree,
  text,
  noneTime,
  top,
  left,
  point,
  nextPoint,
  slash
) {
  // 改變問答題文字
  gameTile.textContent = title;
  AnswerOne.textContent = gameOne;
  AnswerTwo.textContent = gameTwo;
  AnswerThree.textContent = gameThree;

  // 已破關
  if (document.querySelector(point).classList.contains("clicked")) {
    return;

    // 未破關
  } else {
    document.querySelector(".game-wrapper").style.display = "flex";

    document.addEventListener("click", (e) => {
      const target = e.target;
      e.stopPropagation();

      if (target.textContent === gameOne) {
        // 步驟 a 打勾icon
        gameRightAnswer(AnswerOne);

        //步驟 b 打字機
        // 打字機稍後消失
        setTimeout(() => {
          typeWrapper.style.display = "none";
        }, noneTime);

        setTimeout(() => {
          // console.log("時間停止");
          window.clearInterval(timeoutID);
        }, noneTime);

        // 清除 原本上一個text
        setTimeout(() => {
          typingText.textContent = "";
          console.log("text:", typingText);
        }, noneTime);

        // console.log("打字機");

        // 打字機出現
        typeWrapper.style.display = "flex";
        let timeoutID = window.setInterval(function () {
          // console.log("打字機1");
          type(text);
        }, 200);

        charIndex = 0;

        // 步驟 c emoji位置移動
        emojiMove(top, left);

        // 步驟 d 點擊的程式語言選項變顏色
        colorChange(point);

        // 步驟 e 下一個程式語言轉變
        nextOneChange(nextPoint);

        //步驟 e 線消失
        document.querySelector(slash).style.backgroundImage = "none";

        //步驟 f 已點擊選項加 clicked
        document.querySelector(point).classList.add("clicked");

        // Wrong AnswerTwo
      } else if (target === AnswerTwo) {
        gameWrongAnswer(AnswerTwo, "iconTwo");

        // Wrong AnswerThree
      } else if (target === AnswerThree) {
        gameWrongAnswer(AnswerThree, "iconThree");

        //  gameword 消失
      } else if (
        target === gameWrapper ||
        target === gameWord ||
        target === rightArrow
      ) {
        document.querySelector(".game-wrapper").style.display = "none";
        AnswerTwo.style.animation = "";
        AnswerThree.style.animation = "";
        rightArrow.style.backgroundImage = "";
      }
    });
  }
}

// step2: 問答題 事件處理 + 打字效果
// HTML
// let htmlClicked = false
document.querySelector("#htmlP").addEventListener("click", () => {
  gameWordChange(
    "請問HTML是什麼?",
    "標籤語言",
    "資料庫工具",
    "瀏覽器規範",
    textOne,
    13000,
    "205px",
    "-7px",
    "#htmlP",
    "#cssP",
    "#firstLine"
  );
});

// CSS
document.querySelector("#cssP").addEventListener("click", () => {
  if (document.querySelector("#cssP").style.cursor === "pointer") {
    gameWordChange(
      "SCSS 跟 CSS 差別？",
      "SCSS 用變數控制",
      "SCSS 非縮排語法",
      "不同程式語言",
      textTwo,
      15000,
      "205px",
      "171px",
      "#cssP",
      "#jsP",
      "#secLine"
    );
  }
});

// JS
document.querySelector("#jsP").addEventListener("click", () => {
  if (document.querySelector("#jsP").style.cursor === "pointer") {
    gameWordChange(
      "何者非 JS 定義變數的方式？",
      "function",
      "var",
      "let",
      textThree,
      20000,
      "298px",
      "171px",
      "#jsP",
      "#rwdP",
      "#thirdLine"
    );
  }
});

// RWD
document.querySelector("#rwdP").addEventListener("click", () => {
  if (document.querySelector("#rwdP").style.cursor === "pointer") {
    gameWordChange(
      "如何在不同螢幕寬度下改變樣式？",
      "透過 media 操作",
      "使用事件物件",
      "變數控制",
      textFour,
      13000,
      "298px",
      "-7px",
      "#rwdP",
      "#jqP",
      "#fourthLine"
    );
  }
});

// jQuery
document.querySelector("#jqP").addEventListener("click", () => {
  if (document.querySelector("#jqP").style.cursor === "pointer") {
    gameWordChange(
      "jQuery 與 JS 之比較何者正確？",
      "JS 是一種框架",
      "使用事件物件",
      "jQuery 並未開源",
      textFive,
      15000,
      "397px",
      "85px",
      "#jqP",
      "#githubP",
      "#fiveLine"
    );
  }
});

// Github
document.querySelector("#githubP").addEventListener("click", () => {
  if (document.querySelector("#githubP").style.cursor === "pointer") {
    gameWordChange(
      "GitHub 不能做什麼？",
      "測試程式正確性",
      "程式碼倉庫",
      "共同軟體開發",
      textSix,
      18000,
      "495px",
      "-7px",
      "#githubP",
      "#scssP",
      "#sixLine"
    );
  }
});

// SCSS
document.querySelector("#scssP").addEventListener("click", () => {
  if (document.querySelector("#scssP").style.cursor === "pointer") {
    gameWordChange(
      "何者不屬於 CSS 預處理器？",
      "Gulp",
      "SCSS",
      "PostCSS",
      textSeven,
      16000,
      "590px",
      "-7px",
      "#scssP",
      "#bootstarpP",
      "#sevenLine"
    );
  }
});

// bootstrap
document.querySelector("#bootstarpP").addEventListener("click", () => {
  if (document.querySelector("#bootstarpP").style.cursor === "pointer") {
    gameWordChange(
      "Bootstrap 是一種？",
      "樣式擴充元件",
      "打包工具",
      "套件管理工具",
      textEight,
      16000,
      "495px",
      "171px",
      "#bootstarpP",
      "#webpackP",
      "#eightLine"
    );
  }
});

// Webpack
document.querySelector("#webpackP").addEventListener("click", () => {
  if (document.querySelector("#webpackP").style.cursor === "pointer") {
    gameWordChange(
      "使用 Webpack 需要安裝？",
      "Node.js",
      "Babel",
      "styled-components",
      textNine,
      15000,
      "590px",
      "171px",
      "#webpackP",
      "#reactP",
      "#nineLine"
    );
  }
});

// React
document.querySelector("#reactP").addEventListener("click", () => {
  if (document.querySelector("#reactP").style.cursor === "pointer") {
    gameWordChange(
      "React 有何特性？",
      "建置單頁式網站",
      "不存在異步問題",
      "不需要 Babel 編譯",
      textElev,
      15000,
      "685px",
      "85px",
      "#reactP",
      "#unitP",
      "#tenLine"
    );
  }
});

// Unit test
document.querySelector("#unitP").addEventListener("click", () => {
  if (document.querySelector("#unitP").style.cursor === "pointer") {
    gameWordChange(
      "為什麼要做單元測試？",
      "確保程式邏輯正確",
      "讓 scrum 運作順利",
      "資料安全性",
      textTwelv,
      17000,
      "685px",
      "85px",
      "#unitP",
      "#unitP",
      "#tenLine"
    );
  }
});
