let line=document.querySelector("#line");

let pen=document.querySelector("#pen");





pen.addEventListener("click",function(e){
    reLine=false;
    ll=false;
  
   // drawing=true;
  //canvas.removeEventListener("mousedown" ,function(){console.log("mit gt");})
  //canvas.addEventListener("mousemove",LineDraw,false);
  
  canvas.addEventListener("mousedown",start,false);
  canvas.addEventListener("mouseup",stop,false);}
  
  )
  
  // strightLine.addEventListener("click",function(e){
  //   drawing=true;
  //   ctx.fillStyle = "#333333";
  // 				ctx.fillRect(0,0,canvasWidth,canvasHeight);
                  
  // 				ctx.strokeStyle = "black";
  // 				ctx.lineWidth = 2;
  // 				ctx.beginPath();
                  
  // 				for (var i = 0; i < lineArray.length; ++i) {
  // 					var line = lineArray[i];
  // 					ctx.moveTo(e.clientX-canvas.offsetLeft,e.clientY- canvas.offsetTop);
                      
  //           ctx.lineTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
  // 				}
                  
  // 				ctx.stroke();
                  
  // 				if (drawing) {
  // 					ctx.strokeStyle = "darkred";
  // 					ctx.lineWidth = 3;
  // 					ctx.beginPath();
  //           ctx.moveTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
  //           ctx.lineTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
  // 					ctx.stroke();
  // 				}
  // 			}
  
  
  // })
  
  
  let ll=false;
  line.addEventListener("click",function(e){
    //drawing=false;
    ll=true
    reLine=false
    //reLine=false
    canvas.addEventListener("mousedown",tart);
    
    canvas.addEventListener("mouseup",raw)
    
    
   
  })
  






  function tart(e){
    if(ll&&reLine==false){
    ctx.globalCompositeOperation="source-over";
  
   canvas.style.cursor=curser[0];
  // drawing=true;
   ctx.beginPath();
   ctx.moveTo(e.clientX-canvas.offsetLeft,e.clientY- canvas.offsetTop);
   //lineArray.push(e.clientX-canvas.offsetLeft,e.clientY- canvas.offsetTop)
   e.preventDefault();
  }}
  
  
  
  
  function raw(e){
    console.log(drawing);
  
      if(ll&&reLine==false){
       // ctx.globalCompositeOperation="source-over";
          ctx.lineTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
          ctx.strokeStyle=color;
          //ctx.linewidth="red";
          ctx.lineWidth=dwidth;
          ctx.lineCap="round";
          ctx.lineJoin="round";
          ctx.stroke();
             
      }
      lineArray.push(ctx.getImageData(0,0,canvas.width,canvas.height));  
      e.preventDefault();
  }
  







