function headerSizeUpdate() {
  var header = document.getElementsByClassName('header')[0];
  var menu = document.getElementsByClassName('menu')[0];
  var rect1 = header.getBoundingClientRect();
  var rect2 = menu.getBoundingClientRect();
  if (rect1.bottom - rect2.bottom < 50)
  {
    header.style.height = (String(rect2.bottom+50)).concat("px");
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  var canvas = document.getElementById("acanvas");
  if (document.getElementsByClassName('theme-container')[0]) {
    document.getElementsByClassName('theme-container')[0].style.background="url("+canvas.toDataURL()+") fixed";
    document.getElementsByClassName('theme-info-container')[0].style.background="url("+canvas.toDataURL()+") fixed";
  }
  document.body.onresize=headerSizeUpdate();
});

window.addEventListener('orientationchange', headerSizeUpdate());
