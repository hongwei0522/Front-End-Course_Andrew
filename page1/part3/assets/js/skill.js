
// step 1: 文字說明 函式
// 滑過程式語言標題 => 出現文字說明
function showBox(topNum, leftNum, htmlContent) {
  app.get("#showDetail").style.width = "226px";
  app.get("#showDetail").style.height = "auto";
  app.get("#showDetail").style.color = "rgb(128, 128, 128)";
  app.get("#showDetail").style.padding = "15px 10px";
  app.get("#showDetail").style.borderRadius = "5px";
  app.get("#showDetail").style.textAlign = "center";
  app.get("#showDetail").style.backgroundColor = "#ececec";
  app.get("#showDetail").style.position = "absolute";
  app.get("#showDetail").style.top = topNum;
  app.get("#showDetail").style.left = leftNum;
  app.get("#showDetail").style.display = "block";
  app.get("#showDetail").innerHTML = htmlContent;
}

// 滑離程式語言標題 => 文字說明消失
function hideBox() {
  app.get("#showDetail").style.display = "none";
  app.get("#showDetail").innerHTML = "";
}

// emoji 出現
app.get("#emojiP").addEventListener("click", () => {
  app.get(".all-emoji-wrapper").style.display = "flex";
});

// emoji 消失
app.get("#emoji-part").addEventListener("click", () => {
  app.get("#emoji-part").style.display = "none";
});

// 更換emoji 1
app.get(".emoji-one").addEventListener("click", () => {
  app.get("#emoji-part").style.display = "none";
  app.get(".emojiImg").src = "../assets/images/emoji1.svg";
});

// 更換emoji 2
app.get(".emoji-two").addEventListener("click", () => {
  app.get("#emoji-part").style.display = "none";
  app.get(".emojiImg").src = "../assets/images/emoji2.svg";
});

// 更換emoji 3
app.get(".emoji-three").addEventListener("click", () => {
  app.get("#emoji-part").style.display = "none";
  app.get(".emojiImg").src = "../assets/images/emoji3.svg";
});


// 多個game-icon 節點
const gameIconMuti = document.querySelectorAll(".game-icon");



// step1: 文字說明 事件處理
// HTML
app.get("#htmlP").addEventListener("mouseover", () => {
  showBox(
    "16%",
    "106%",
    "HTML <br><br> 超文件標示語言（英語：HyperText Markup Language，簡稱：HTML）是一種用於建立網頁的標準標示語言。 <br><br>"
  );
});

app.get("#htmlP").addEventListener("mouseleave", hideBox);

// CSS
app.get("#cssP").addEventListener("mouseover", () => {
  showBox(
    "27%",
    "-81%",
    "CSS <br><br> 層疊樣式表（英語：Cascading Style Sheets，簡寫CSS），是一種用來為結構化文件（如 HTML 文件或 XML 應用）添加樣式（字型、間距和顏色等）的電腦語言。 <br><br>"
  );
});

app.get("#cssP").addEventListener("mouseleave", hideBox);

// JS
app.get("#jsP").addEventListener("mouseover", () => {
  showBox(
    "27%",
    "106%",
    "JavaScript <br><br> JavaScript 是一門基於原型、函式先行的語言，是一門多範式的語言，它支援物件導向編程，指令式程式設計，以及函數語言程式設計。 <br><br>"
  );
});

app.get("#jsP").addEventListener("mouseleave", hideBox);

// jQuery
app.get("#jqP").addEventListener("mouseover", () => {
  showBox(
    "37%",
    "-81%",
    "jQuery <br><br> jQuery 是一套跨瀏覽器的 JavaScript 函式庫，簡化 HTML 與 JavaScript 之間的操作。 <br><br>"
  );
});

app.get("#jqP").addEventListener("mouseleave", hideBox);

// RWD
app.get("#rwdP").addEventListener("mouseover", () => {
  showBox(
    "37%",
    "106%",
    "RWD <br><br> 響應式網頁設計（英語：Responsive web design，通常縮寫為 RWD），是一種網頁設計的技術做法，該設計可使網站在不同的裝置上瀏覽時，對應不同解析度皆有適合的呈現，減少使用者進行縮放、平移和捲動等操作行為。 <br><br>"
  );
});

app.get("#rwdP").addEventListener("mouseleave", hideBox);

// GitHub
app.get("#githubP").addEventListener("mouseover", () => {
  showBox(
    "48%",
    "106%",
    "GitHub <br><br> GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務，由 GitHub 公司（曾稱 Logical Awesome）開發者使用 Ruby on Rails 編寫而成。 <br><br>"
  );
});

app.get("#githubP").addEventListener("mouseleave", hideBox);

// SCSS
app.get("#scssP").addEventListener("mouseover", () => {
  showBox(
    "58%",
    "-81%",
    "SCSS <br><br> Sass 是一個將指令碼解析成 CSS 的手稿語言，即 SassScript。Sass 包括兩套語法。最開始的語法叫做「縮排語法」，使用縮排來區分程式碼塊，並且用換行將不同規則分隔開。而較新的語法叫做「SCSS」。 <br><br>"
  );
});

app.get("#scssP").addEventListener("mouseleave", hideBox);

//  Webpack
app.get("#webpackP").addEventListener("mouseover", () => {
  showBox(
    "58%",
    "106%",
    "Webpack <br><br> Webpack 是一個開源的前端打包工具。Webpack 提供了前端開發缺乏的模組化開發方式，將各種靜態資源視為模組，並從它生成優化過的程式碼。 <br><br>"
  );
});

app.get("#webpackP").addEventListener("mouseleave", hideBox);

// Bootstarp
app.get("#bootstarpP").addEventListener("mouseover", () => {
  showBox(
    "68%",
    "-81%",
    "bootstrap <br><br> Bootstrap 是一組用於網站和網路應用程式開發的開源前端框架，提供字體排印、表單、按鈕、導航及其他各種元件及 Javascript 擴充套件，旨在使動態網頁和 Web 應用的開發更加容易。 <br><br>"
  );
});

app.get("#bootstarpP").addEventListener("mouseleave", hideBox);

// React
app.get("#reactP").addEventListener("mouseover", () => {
  showBox(
    "68%",
    "106%",
    "React <br><br> React 是一個為資料提供彩現為 HTML 視圖的開源 JavaScript 庫。React 視圖通常採用包含以自訂 HTML 標記規定的其他元件的元件彩現。 <br><br>"
  );
});

app.get("#reactP").addEventListener("mouseleave", hideBox);

// Unit Test
app.get("#unitP").addEventListener("mouseover", () => {
  showBox(
    "68%",
    "106%",
    "Unit Testing <br><br> 在電腦編程中，單元測試（英語：Unit Testing）又稱為模組測試，是針對程式模組（軟體設計的最小單位）來進行正確性檢驗的測試工作。程式單元是應用的最小可測試部件。 <br><br>"
  );
});

app.get("#unitP").addEventListener("mouseleave", hideBox);



// step2: 問答題 函式
// 問答題節點
const gameWrapper = app.get("#game");
const gameWord = app.get(".game-word");
const gameTile = app.get(".game-title");
const AnswerOne = app.get("#game-one");
const AnswerTwo = app.get("#game-two");
const AnswerThree = app.get("#game-three");
const rightArrow = app.get(".right-arrow");
const typeWrapper = app.get(".typing-wrapper");

// 答對題目 - 出現打勾icon
function gameRightAnswer(answer) {

  app.get(".right-arrow").style.backgroundImage =
    "url(https://frankyeah.github.io/Front-Enter/images/next.svg)";
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
    app.get("#emojiP").style.top = top;
    app.get("#emojiP").style.left = left;
}

// d 點擊的程式語言選項變顏色
function colorChange(point) {
   app.get(point).style.backgroundColor = "rgb(26, 216, 211)";
   app.get(point).style.border = "1px solid rgb(26, 216, 211)";
   app.get(point).style.color = "white";
}

// e => 下一個程式語言轉變
function nextOneChange(nextPoint) {
  const nextP = document.querySelector(nextPoint);
  if ((nextP.style.border !== "1px solid rgb(26, 216, 211)")) {
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
const textThree = "恭喜你通過 JavaScript 關卡。JavaScript 也是小編最喜歡的語言，掌握它，就等於邁入前端工程師的行列，它不只能為你帶來一份工作，也擴展你的視野，擁有接軌科技的能力。" 

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

const typingText = document.querySelector("#typing-text");
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
      app.get(".game-wrapper").style.display = "none";
      AnswerTwo.style.animation = "";
      AnswerThree.style.animation = "";
      app.get(".right-arrow").style.backgroundImage = "";
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
  slash,
) {
  // 改變問答題文字
  gameTile.textContent = title;
  AnswerOne.textContent = gameOne;
  AnswerTwo.textContent = gameTwo;
  AnswerThree.textContent = gameThree;

  // 已破關
  if (app.get(point).classList.contains("clicked")) {
    return;

    // 未破關
  } else {
    app.get(".game-wrapper").style.display = "flex";

    document.addEventListener("click", (e) => {
      const target = e.target;
      e.stopPropagation();

      // console.log(target);

      if (target.textContent === gameOne) {
        // console.log("進入問答一");

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
        app.get(point).classList.add("clicked");

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
        app.get(".game-wrapper").style.display = "none";
        AnswerTwo.style.animation = "";
        AnswerThree.style.animation = "";
        app.get(".right-arrow").style.backgroundImage = "";
      }
    });
  }
}


// step2: 問答題 事件處理 + 打字效果
// HTML 
// let htmlClicked = false
app.get("#htmlP").addEventListener("click", () => {

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
  app.get("#cssP").addEventListener("click", () => {
    if (app.get("#cssP").style.cursor === "pointer") {
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
app.get("#jsP").addEventListener("click", () => {
  if (app.get("#jsP").style.cursor === "pointer") {
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
app.get("#rwdP").addEventListener("click", () => {
  if (app.get("#rwdP").style.cursor === "pointer") {
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
app.get("#jqP").addEventListener("click", () => {
  if (app.get("#jqP").style.cursor === "pointer") {
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
app.get("#githubP").addEventListener("click", () => {
  if (app.get("#githubP").style.cursor === "pointer") {
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
app.get("#scssP").addEventListener("click", () => {
  if (app.get("#scssP").style.cursor === "pointer") {
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
app.get("#bootstarpP").addEventListener("click", () => {
  if (app.get("#bootstarpP").style.cursor === "pointer") {
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
app.get("#webpackP").addEventListener("click", () => {
  if (app.get("#webpackP").style.cursor === "pointer") {
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
app.get("#reactP").addEventListener("click", () => {
  if (app.get("#reactP").style.cursor === "pointer") {
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
app.get("#unitP").addEventListener("click", () => {
  if (app.get("#unitP").style.cursor === "pointer") {
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
