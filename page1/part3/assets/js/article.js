import data from "../data/article.json" with { type: "json" };


// 輪播圖 function
// 宣告當前播放照片位置
let slideIndex = 1;

// 下一張/上一張圖片
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// 秀出該出現的輪播圖
function showSlides(n) {
  const slides = document.querySelectorAll(".mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}

// 執行輪播圖function
showSlides(slideIndex);

// 自動輪播每 3 秒
setInterval(function () {
  plusSlides(1);
}, 5000);


let dataArray = Object.values(data.article);
let articles = dataArray.map((item) => {
  return {
    classId: item.creatTime,
    classType: item.classType,
    teacWay: item.teachWay,
    classCity: item.city,
    classImg: item.squareUrl,
    className: item.name,
    classDescription: item.preface,
  };
});

// 點擊篩選按鈕-宣告變數
const allItem = document.querySelector("#allClass");
const smallItem = document.querySelector("#smallClass");
const freeItem = document.querySelector("#freeRange");
const oneItem = document.querySelector("#oneOnOne");

// 渲染模板
function generateHtmlContent(filterFn) {
  const cardContainer = document.querySelector(".card-container");
  let htmlContent = "";

  articles.forEach((article) => {
    if (filterFn(article)) {
      htmlContent += `
      <li class="card">
          <div class="favorite-icon" data-id="${article.classId}"></div>
          <a href="./content.html?id=${article.classId}" class="class-item">
            <div class="city-part m-auto m-1">
              <div class="location-box">
                <img src="../assets/images/location_icon.png" alt="" class="loction-icon">
              </div>
              <p class="loction-title">
                ${article.classCity}
              </p>
            </div>
            <div class="card-img m-auto m-1">
              <img src=${article.classImg} alt="培訓機構" class="class-img">
            </div>
            <h2 class="class-title m-auto text-center m-1">
              ${article.className}
            </h2>
            <p class="class-decription text-center m-1">
              ${article.classDescription}
            </p>
            <div class="read-more">
              <div class="more-word">read more</div>
              <div class="more-box">
                <img src="../assets/images/arrow-right.png" alt="readmore" class="more-icon">
              </div>
            </div>
          </a>
        </li>
      `;
    }
  });

  cardContainer.innerHTML = htmlContent;

  //detect user login in
  firebase.auth().onAuthStateChanged(function (user) {
   if (user) {
     displayFavoriteStar()
   }
  });
}

// 渲染篩選資料 ~
// 抓取網址做判斷 
// 依『網址』做判斷，如果是包含有 id  /Front-Enter/article.html? id 
//                      再依『課程機構』篩選
//                      或是依 『地區』篩選
//                      或是依 『教學風格』篩選
//                      或是沒有與 id 符合的，會顯示搜尋不到資料，請重新搜尋

// 如果是 沒有 id  => /Front-Enter/article.html => 渲染全部課程

//  取得 URL 查詢參數 -id 

// keyword 渲染模板
function generateKeywordContent (filterArticles) {
  const cardContainer = document.querySelector(".card-container");
  let htmlContent = "";

  if(filterArticles.length > 0) {
    filterArticles.forEach((article) => {
    htmlContent += `
        <li class="card">
          <div class="favorite-icon" data-id="${article.classId}"></div>
          <a href="./content.html?id=${article.classId}" class="class-item">
            <div class="city-part m-auto m-1">
              <div class="location-box">
                <img src="../assets/images/location_icon.png" alt="" class="loction-icon">
              </div>
              <p class="loction-title">
                ${article.classCity}
              </p>
            </div>
            <div class="card-img m-auto m-1">
              <img src=${article.classImg} alt="培訓機構" class="class-img">
            </div>
            <h2 class="class-title m-auto text-center m-1">
              ${article.className}
            </h2>
            <p class="class-decription text-center m-1">
              ${article.classDescription}
            </p>
            <div class="read-more">
              <div class="more-word">read more</div>
              <div class="more-box">
                <img src="../assets/images/arrow-right.png" alt="readmore" class="more-icon">
              </div>
            </div>
          </a>
        </li>
      `;
    })

  } else {
    htmlContent = `
      <p class="search-error">搜尋不到您要的資料</p>
    `
  }

  cardContainer.innerHTML = htmlContent;

  //detect user login in
  firebase.auth().onAuthStateChanged(function (user) {
   if (user) {
     displayFavoriteStar()
   }
  });

}

function filterKeywordReander(keyword) {
  const filterArticles = articles.filter((article) => {
    return article.className.toLowerCase().includes(keyword) ||
           article.classType.includes(keyword) ||
           article.teacWay.includes(keyword)
  })

  generateKeywordContent (filterArticles)
}

function getUrlId(id) {
  const urlId = new URLSearchParams(window.location.search)
  return urlId.get(id)
}


// 改變點擊按鍵的文字顏色
function changeClickColor(allColor, smallColor, freeColor, oneColor) {
  allItem.style.color = `${allColor}`;
  smallItem.style.color = `${smallColor}`;
  freeItem.style.color = `${freeColor}`;
  oneItem.style.color = `${oneColor}`;
}

// // 點擊全部之函式
function allClass() {
  changeClickColor(
    "rgb(26, 216, 211)",
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)"
  );

  generateHtmlContent(() => true);
}

// 點擊『 小班制 』之函式
function smallClass() {
  changeClickColor(
    "rgb(128, 128, 128)",
    "rgb(26, 216, 211)",
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)"
  );

  generateHtmlContent((article) => article.classType === "小班制");
}

// 點擊『 放養制 』之函式
function freeRangeClass() {
  changeClickColor(
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)",
    "rgb(26, 216, 211)",
    "rgb(128, 128, 128)"
  );

  generateHtmlContent((article) => article.teacWay === "放養制");
}

// 點擊『 一對一制 』之函式
function oneClass() {
  changeClickColor(
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)",
    "rgb(26, 216, 211)"
  );

  generateHtmlContent((article) => article.classType === "一對一");
}

// 呼叫點擊全部按鍵的函式
// allClassItem()
allClass();
allItem.addEventListener("click", allClass);
smallItem.addEventListener("click", smallClass);
freeItem.addEventListener("click", freeRangeClass);
oneItem.addEventListener("click", oneClass);


// 收藏功能拆分

// 顯示收藏狀態(顯示星星)
// 1. 確認有登入會員
// 2. 從localStorage 取得已收藏的資料
// 3. 有加入的顯示實心星星
// 4. 沒加入的顯示空心星星

// 渲染收藏星星的狀態
function displayFavoriteStar() {
  const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
    const AllFavoriteIcons = document.querySelectorAll(".favorite-icon")
    
    AllFavoriteIcons.forEach((icon)=> {
      if (favoriteList.includes(icon.dataset.id)) {
        icon.innerHTML = `<i class="fa-solid fa-star star-icon" data-id=${icon.dataset.id}></i>`
      } else {
        icon.innerHTML =  `<i class="fa-regular fa-star star-icon" data-id=${icon.dataset.id}></i>`
      }
    })
}


window.addEventListener("load", () => {
  const keyword = getUrlId('id')
  if(keyword) {
    filterKeywordReander(keyword)
  }
})


// 收藏功能點擊事件處理
  document.body.addEventListener("click", (event) => {
    const target =event.target
    const id = target.dataset.id

    if(target.classList.contains('star-icon')) {
      toggleFavorite(id)
    }
  })

// 切換收藏狀態
function toggleFavorite(id) {
  let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
  const findId = favoriteList.some(favoriteId => favoriteId === id)

  if (findId) {
    favoriteList = favoriteList.filter(favoriteId => favoriteId !== id);

  } else {
    favoriteList.push(id)
  }

  localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
  displayFavoriteStar()
}

