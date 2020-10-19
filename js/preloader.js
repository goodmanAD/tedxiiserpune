document.addEventListener("DOMContentLoaded", ()=>{
  var canvas = document.getElementById("acanvas");

  var w = canvas.width = 300;
  var h = canvas.height = 300;

  var context = canvas.getContext("2d");

  for(i=0;i<w/10;i++) {
      for(j=0;j<h/10;j++) {

          var t=150;
          var num = Math.floor(Math.sqrt(Math.random())*((t)+0.07));
          // num+=60;
          var radius = Math.random()*40;
          var rotation=2*Math.random()*Math.PI
          context.fillStyle = ("rgba(" + (num+20)*0.8 + "," + (num+20)*0.9 + "," + (num+20) + ", 0.4)");
          // context.beginPath();
          // context.arc((i*123 + j)%w, (j*123)%h, radius, 0, 2*Math.PI);
          context.translate((i*123 + j)%w, (j*123)%h);
          context.rotate(rotation);
          context.fillRect(0, 0, radius, radius);
          context.rotate(-rotation);
          context.translate(-((i*123 + j)%w), -((j*123)%h));

          // context.fill();
          if ((i*123 + j)%w < radius*(2)) {
            // context.beginPath();
            // context.arc(w+(i*123 + j)%w, (j*123)%h, radius, 0, 2*Math.PI);
            // context.fillStyle = ("rgba(255,0,0, 0.4)");
            context.translate(w+(i*123 + j)%w, (j*123)%h);
            context.rotate(rotation);
            context.fillRect(0, 0, radius, radius);
            context.rotate(-rotation);
            context.translate(-w-((i*123 + j)%w), -((j*123)%h));
            // context.fill();
          }
          if (w-((i*123 + j)%w) < radius*(2)) {
            // context.beginPath();
            // context.arc(w-(i*123 + j)%w, (j*123)%h, radius, 0, 2*Math.PI);
            // context.fillStyle = ("rgba(0,255,0, 0.4)");
            context.translate(-w+((i*123 + j)%w), (j*123)%h);
            context.rotate(rotation);
            context.fillRect(0, 0, radius, radius);
            context.rotate(-rotation);
            context.translate(w-((i*123 + j)%w), -((j*123)%h));
            // context.fill();
          }
          if ((j*123)%h < radius*(2)) {
            // context.beginPath();
            // context.arc((i*123 + j)%w, h+(j*123)%h, radius, 0, 2*Math.PI);
            // context.fillStyle = ("rgba(0,0,255, 0.4)");
            context.translate((i*123 + j)%w, h+(j*123)%h);
            context.rotate(rotation);
            context.fillRect(0, 0, radius, radius);
            context.rotate(-rotation);
            context.translate(-((i*123 + j)%w), -h-((j*123)%h));
            // context.fill();
          }
          if (h-((j*123)%h) < radius*(2)) {
            // context.beginPath();
            // context.arc((i*123 + j)%w, h-(j*123)%h, radius, 0, 2*Math.PI);
            // context.fillStyle = ("rgba(255,0,255, 0.4)");
            context.translate((i*123 + j)%w, -h+(j*123)%h);
            context.rotate(rotation);
            context.fillRect(0, 0, radius, radius);
            context.rotate(-rotation);
            context.translate(-((i*123 + j)%w), h-((j*123)%h));
            // context.fill();
          }
      }
  }

  document.getElementsByClassName('preloader')[0].style.background="url("+canvas.toDataURL()+") fixed";
  document.getElementsByClassName('translucent')[0].style.background="url("+canvas.toDataURL()+") fixed";
});

window.onload=()=>{
  setTimeout(function () {
    window.scrollTo(0,0);
    document.getElementsByClassName('preloader-wrapper')[0].style.animationPlayState="running";
    document.body.style.overflowY="scroll";
    document.getElementsByClassName('content-wrapper')[0].style.paddingRight="0";
    document.getElementsByClassName('content-wrapper')[0].style.opacity=1;
    document.getElementsByClassName('content-wrapper')[0].style.filter="blur(0)";
    document.getElementsByClassName('preloader-wrapper')[0].addEventListener("animationend", ()=>{
      document.getElementsByClassName('preloader-wrapper')[0].style.display="none";
    });
  }, 1);
};
