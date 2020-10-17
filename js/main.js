document.addEventListener("DOMContentLoaded", ()=>{
  var canvas = document.getElementById("acanvas");
  document.getElementsByClassName('theme-container')[0].style.background="url("+canvas.toDataURL()+") fixed";
  document.getElementsByClassName('theme-info-container')[0].style.background="url("+canvas.toDataURL()+") fixed";
  // document.body.onresize=headerSizeUpdate();
});
//
// function headerSizeUpdate() {
//
// }
