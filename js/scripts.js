var canvas;
var ctx;

function getMousePos(canvas, evt){
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function clear(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

$(document).ready(function(){
  jqcanvas = $("#draw");
  canvas = jqcanvas[0];
  ctx = canvas.getContext("2d");
  ctx.beginPath();

  var mousedown = false;
  var mousein = false;

  jqcanvas.mousemove(function(event){
    if(mousedown && mousein){
      var pos = getMousePos(canvas, event);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
  });

  $("*").mousedown(function(event){
    mousedown = true;
  });

  $("*").mouseup(function(event){
    mousedown = false;
    ctx.beginPath();
  });

  jqcanvas.mouseleave(function(event){
    mousein = false;
    ctx.beginPath();
  });

  jqcanvas.mouseenter(function(event){
    mousein = true;
  });
});
