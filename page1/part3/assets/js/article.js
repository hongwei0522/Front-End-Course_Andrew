import data from '../data/article.json' assert { type: 'json' };


// 從fetch article.json獲取資料
// fetch('../data/article.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });



let dataArray = Object.values(data.article)
// console.log(dataArray);

let articles = dataArray.map(item => {
  return {
    classId: item.creatTime,
    classType: item.classType,
    teacWay: item.teachWay,
    classCity: item.city,
    classImg: item.squareUrl,
    className: item.name,
    classDescription: item.preface,
  }
})

console.log(articles);

const allItem = document.querySelector('#allClass')
const smallItem = document.querySelector('#smallClass')
const freeItem = document.querySelector('#freeRange')
const oneItem = document.querySelector('#oneOnOne')


// 點進discover頁面後，渲染九張課程卡片
function allClassItem() {
  const cardContainer = document.querySelector('.card-container')

  let allhtml = ''
  articles.forEach(article => {
    allhtml += `
      <li class="card">
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
    `
  })

  cardContainer.innerHTML += allhtml
}


// 改變點擊按鍵的文字顏色
function changeClickColor(allColor, smallColor, freeColor, oneColor) {
  allItem.style.color = `${allColor}`
  smallItem.style.color = `${smallColor}`
  freeItem.style.color = `${freeColor}`
  oneItem.style.color = `${oneColor}`
}



// all.addEventListener('click', function() {


  // 點擊全部之函式
  function allClass() {
    const cardContainer = document.querySelector('.card-container')

    // 點擊『全部』選項後，改變文字顏色
    changeClickColor(
      "rgb(26, 216, 211)", 
      "rgb(128, 128, 128)", 
      "rgb(128, 128, 128)", 
      "rgb(128, 128, 128)" 
      )

    let htmlContent = ''

    articles.forEach(article => {
      htmlContent += `
      <li class="card">
          <a href="./content.html?id=${article.classId}"class="class-item">
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
    `
    })

    // return allhtml
    // console.log(allhtml)
    cardContainer.innerHTML = htmlContent
  }

  // cardContainer.innerHTML = allClass()
  // const cardContainer = document.querySelector('.card-container')
  // const all = document.querySelector('#allClass')
// })


// 點擊小班制之函式
function smallClass() {
  const cardContainer = document.querySelector('.card-container')

  // 點擊『小班制』選項後，改變文字顏色
  changeClickColor(
    "rgb(128, 128, 128)",
    "rgb(26, 216, 211)",
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)"
    )

  let htmlContent = ''

  articles.forEach(article => {
    if (article.classType === "小班制" ) {
      htmlContent += `
      <li class="card">
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
    `
    }
  })

  cardContainer.innerHTML = htmlContent
}

// 點擊放養制之函式
function freeRangeClass() {

  const cardContainer = document.querySelector('.card-container')

  // 點擊『小班制』選項後，改變文字顏色
  changeClickColor(
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)",
    "rgb(26, 216, 211)",
    "rgb(128, 128, 128)"
  )

  let htmlContent = ''

  articles.forEach(article => {
    if (article.teacWay === "放養制") {
      htmlContent += `
      <li class="card">
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
    `
    }
  })

  cardContainer.innerHTML = htmlContent
}


// 點擊一對一之函式
function oneClass() {
  const cardContainer = document.querySelector('.card-container')

  // 點擊『小班制』選項後，改變文字顏色
  changeClickColor(
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)",
    "rgb(128, 128, 128)",
    "rgb(26, 216, 211)"
  )

  let htmlContent = ''

  articles.forEach(article => {
    if (article.classType === "一對一") {
      htmlContent += `
      <li class="card">
          <a href="./content.html?id=${article.classId}"class="class-item">
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
    `
    }
  })

  cardContainer.innerHTML = htmlContent
}



// 呼叫點擊全部按鍵的函式
allClassItem()
allItem.addEventListener('click', allClass)
smallItem.addEventListener('click', smallClass)
freeItem.addEventListener('click', freeRangeClass)
oneItem.addEventListener('click', oneClass)