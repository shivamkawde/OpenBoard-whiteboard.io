canvas.addEventListener("touchstart",start,false);
canvas.addEventListener("touchmove",LineDraw,false);
canvas.addEventListener("mousedown",start,false);
canvas.addEventListener("mousemove",LineDraw,false);
canvas.addEventListener("touchend",stop,false);
canvas.addEventListener("mouseup",stop,false);
canvas.addEventListener("mouseout",stop,false)
ctx.fillRect(0,0,canvas.width,canvas.height);
var mouseX;
var mouseY;
var lastX;
var lastY;


let curser=["cell","grab"];

let lineArray=[];//main array for adding line 
let index=-1;
let drawing=false;

function LineDraw(e){
    console.log(drawing);
  
      if(drawing){
       // ctx.globalCompositeOperation="source-over";
       
          ctx.lineTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
          ctx.strokeStyle=color;
          //ctx.linewidth="red";
          ctx.lineWidth=dwidth;
          ctx.lineCap="round";
          ctx.lineJoin="round";
          ctx.stroke();
          
      }
      
      e.preventDefault();
  }
  function stop(e){
     if(drawing){
      ctx.stroke();
      ctx.closePath();
      drawing=false
      }
      e.preventDefault();
      if(e.type!="mouseout"){
      lineArray.push(ctx.getImageData(0,0,canvas.width,canvas.height));
      index+=1;
      //console.log(lineArray[index])
      //console.log(lineArray[0])
    }
  }



  function start(e){

    if(!ll){
    ctx.globalCompositeOperation="source-over";
  
   canvas.style.cursor=reLine==true? curser[1]: curser[0];
   drawing=true;
   ctx.beginPath();
   ctx.moveTo(e.clientX-canvas.offsetLeft,e.clientY- canvas.offsetTop);
   //lineArray.push(e.clientX-canvas.offsetLeft,e.clientY- canvas.offsetTop)
   e.preventDefault();
   
  }}
  