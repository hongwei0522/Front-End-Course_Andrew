


// Search display none or block function
function searchBlock() {
  let element = app.get(".search-section")
  element.classList.toggle("d-block")
}




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


// Click search Diaplay none or block
app.get("#Search").addEventListener('click', searchBlock)



// 執行輪播圖function 
showSlides(slideIndex);


// 自動輪播每 3 秒
setInterval(function () {
  plusSlides(1);
}, 5000);



// back to top
app.get("#top").addEventListener('click', function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop
})

