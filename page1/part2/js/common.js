
// back to top
app.get("#top").addEventListener('click', function(){
  document.body.scrollTop = 0
  document.documentElement.scrollTop
})

// Search Diaplay none
function searchBlock() {
   let element = app.get(".search-section")
  element.classList.toggle("d-block")
}

app.get("#Search").addEventListener('click', searchBlock)