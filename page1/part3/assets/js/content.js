import data from "../data/article.json" assert { type: "json" };

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

// 確認 contents 資料結構
console.log(contents);

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
  // console.log(id)

  contents.forEach((content) => {
    // 參數的id與資料中的id相符合 => 渲染該課程內頁
    if (content.classId === id) {
      dom.get(
        ".content-one-wrapper"
      ).style.backgroundImage = `url(${content.banner})`;
      dom.get(".content-one-title").textContent = content.bannerName;
      dom.get(".text-topic").textContent = content.classTopic;
      dom.get(".text-description").innerHTML = content.classContent;
      dom.get("#row-city").textContent = content.classCity;
      dom.get("#row-size").textContent = content.classType;
      dom.get("#row-teach").textContent = content.teacWay;
      dom.get("#row-day").textContent = `${content.totalDay}天`;
      dom.get("#row-time").textContent = `${content.weekHour}小時`;
      dom.get("#row-tech").textContent = content.technology;
      dom.get("#row-mail").textContent = content.classEmail;
      dom.get("#row-phone").textContent = content.classPhone;
    }
  });
}

//點擊片上一張
function preImg() {
  if (imgIndex === 0) {
    imgIndex = 4;
  } else {
    imgIndex -= 1;
  }

  dom.get(".largr-img").src = imgArray[imgIndex];
}

//點擊片下一張
function nextImg() {
  if (imgIndex === 4) {
    imgIndex = 0;
  } else {
    imgIndex += 1;
  }

  dom.get(".largr-img").src = imgArray[imgIndex];
}

// 轉換 enlarge-wrapper diplay none or block
function changeEnlargeDisplay() {
  if (dom.get(".enlarge-wrapper").style.display === "none") {
    dom.get(".enlarge-wrapper").style.display === "block";
  } else {
    dom.get(".enlarge-wrapper").style.display === "none";
  }
}

// 呼叫content內頁渲染之函式
contentLayout();

let leftImgHtml = "";

leftImgs.forEach((leftImg) => {
  leftImg.addEventListener("click", (event) => {
    leftImgHtml += `
        <div class="enlargeBackground">
          <div class="enlarge-container">
            <div class="large-left"></div>
            <img class="largr-img" src="${event.target.src}" alt="" class="enlarge-img">
            <div class="large-right"></div>
          </div>
        </div>
    `;
    dom.get(".enlarge-wrapper").innerHTML = leftImgHtml;
  });
});

document.addEventListener("click", (event) => {
  const pre = document.querySelector(".large-left");
  const next = document.querySelector(".large-right");
  const black = document.querySelector(".enlargeBackground");
  const container = document.querySelector(".enlarge-container");
  const space = event.target;

  // 點擊上一張
  if (space === pre) {
    console.log("pre");
    preImg();

    // 點擊下一張
  } else if (space === next) {
    console.log("next");
    nextImg();

    // 點擊空白區域，即消失
  } else if (space === black || space === container) {
    // console.log(" black")

    leftImgHtml = "";
    dom.get(".enlarge-wrapper").innerHTML = leftImgHtml;
  }
});
