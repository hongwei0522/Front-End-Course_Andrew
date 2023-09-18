// general method
let app = {
  evts: {},
  search: {},
  testGo: {},
  log: {},
  rotate: {},
  article: {},
  skillTree: {},
  collect: {}
};

// core operations
app.get = function (selector) {
  return document.querySelector(selector)
}


// loading
app.loading = function() {
  app.get('#loadingAnimation').style.height = '0px';
  app.get('#loadingAnimation').style.opacity = '0.9';
  app.get('#loadingDrawing').style.height = '0px';
  app.get('#loadingDrawing').style.opacity = '0.9';
  app.get('#loadingImg').style.marginBottom = '-1000px';
  app.get('#header').animation = 'headerGoUp 0.9s ease 0s 1 alternate';
  app.get('#my-aside').animation = 'asiderunning 0.9s ease 0s 1 alternate';
  setTimeout(function(){
    app.get('#loadingAnimation').style.display = 'none';
  }, 600)
}