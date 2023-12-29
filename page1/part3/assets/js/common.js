

// Search display none or block function
function searchBlock() {
  let element = app.get(".search-section")
  element.classList.toggle("d-block")
}


// Click search Diaplay none or block
app.get("#Search").addEventListener('click', searchBlock)


// back to top
app.get("#top").addEventListener('click', function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop
})

