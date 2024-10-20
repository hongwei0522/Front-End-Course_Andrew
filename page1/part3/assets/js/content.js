// import data from "../data/article.json" assert { type: "json" };
import data from "../data/article.json" with { type: "json" };


// 將data物件轉微陣列
let dataArray = Object.values(data.article);

// 設計成專屬的資料結構
let contents = dataArray.map((item) => {
  return {
    banner: item.rectangleUrl,
    bannerName: item.name,
    classId: item.creatTime,
    classTopic: item.topic,
    classCity: item.city,
    classType: item.classType,
    teacWay: item.teachWay,
    totalDay: item.totalDay,
    weekHour: item.weekHour,
    technology: item.technology,
    classEmail: item.mail,
    classPhone: item.phone,
    classContent: item.content,
  };
});


// img index
let imgIndex = 0;

// leftImg放大照片array
const imgArray = [
  "../assets/images/cotent-img-1.jpg",
  "../assets/images/cotent-img-2.jpg",
  "../assets/images/cotent-img-3.jpg",
  "../assets/images/cotent-img-4.jpg",
  "../assets/images/cotent-img-5.jpg",
];

// 抓取leftImg 5 個節點
const leftImgs = document.querySelectorAll(".left-img");

// 渲染content內頁
function contentLayout() {
  // 先取得url
  const urlParams = new URLSearchParams(window.location.search);

  // 先取得url之id參數 & 將字串傳為數字
  const id = Number(urlParams.get("id"));

  contents.forEach((content) => {
    // 參數的id與資料中的id相符合 => 渲染該課程內頁
    if (content.classId === id) {
      document.querySelector("#contentWrapperOne").style.backgroundImage = `url(${content.banner})`;
      document.querySelector("#contentTitleOne").textContent = content.bannerName;
      document.querySelector("#textTopic").textContent = content.classTopic;
      document.querySelector("#textDescription").innerHTML = content.classContent;
      document.querySelector("#rowCity").textContent = content.classCity;
      document.querySelector("#rowSize").textContent = content.classType;
      document.querySelector("#rowTeach").textContent = content.teacWay;
      document.querySelector("#rowDay").textContent = `${content.totalDay}天`;
      document.querySelector("#rowTime").textContent = `${content.weekHour}小時`;
      document.querySelector("#rowTech").textContent = content.technology;
      document.querySelector("#rowMail").textContent = content.classEmail;
      document.querySelector("#rowPhone").textContent = content.classPhone;
    }
  });
}


//點擊片上一張
function preImg() {
  const largeImg = document.querySelector("#largeImg")

  if (imgIndex === 0) {
    imgIndex = 4;
  } else {
    imgIndex -= 1;
  }

  largeImg.src = imgArray[imgIndex];
}

//點擊片下一張
function nextImg() {
  const largeImg = document.querySelector("#largeImg")

  if (imgIndex === 4) {
    imgIndex = 0;
  } else {
    imgIndex += 1;
  }

  largeImg.src = imgArray[imgIndex];
}

// 呼叫content內頁渲染之函式
contentLayout();

let leftImgHtml = "";
const enlargeWrapper = document.querySelector("#enlargeWrapper")

leftImgs.forEach((leftImg) => {
  leftImg.addEventListener("click", (event) => {
    leftImgHtml += `
        <div id="enlargeBackground" class="enlarge-background">
          <div id="enlargeContainer" class="enlarge-container">
            <div id="largeLeft" class="large-left"></div>
            <img id="largeImg"  class="large-img" src="${event.target.src}" alt="" class="enlarge-img">
            <div id="largeRight" class="large-right"></div>
          </div>
        </div>
    `;
    enlargeWrapper.innerHTML = leftImgHtml;
  });
});

document.addEventListener("click", (event) => {
  const pre = document.querySelector("#largeLeft");
  const next = document.querySelector("#largeRight");
  const black = document.querySelector("#enlargeBackground");
  const container = document.querySelector("#enlargeContainer");
  const space = event.target;

  // 點擊上一張
  if (space === pre) {
    preImg();

    // 點擊下一張
  } else if (space === next) {
    nextImg();

    // 點擊空白區域，即消失
  } else if (space === black || space === container) {
    leftImgHtml = "";
    enlargeWrapper.innerHTML = leftImgHtml;
  }
});
