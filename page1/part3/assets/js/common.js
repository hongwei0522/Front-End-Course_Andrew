// 共同JS
// login & signup
const loginPoint = document.querySelector("#loginClick");
const loginPage = document.querySelector(".login-wrapper");

loginPoint.addEventListener("click", () => {
  loginPage.style.display = "flex";
});

document.addEventListener("click", (e) => {
  e.stopPropagation();
  const target = e.target;
  console.log(target);
  if (target === loginPoint) {
     loginPage.style.display = "flex";
  } else if (target === loginPage) {
    loginPage.style.display = "none";
  } 
});

// loginPoint.addEventListener("click", () => {
//   loginPage.style.display = "none";
// });

// Search display none or block function
function searchBlock() {
  let element = app.get(".search-section");
  element.classList.toggle("d-block");
}

// Click search Diaplay none or block
app.get("#Search").addEventListener("click", searchBlock);

// back to top
app.get("#top").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop;
});
