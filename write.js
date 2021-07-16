let write =document.querySelector("#write");
write.addEventListener("click",function(e){
    alert("click on canvas")
})
ctx.font = '60px Arial'
ctx.fillStyle = 'red'
let word=[]
let mousex=0
let mousey=0;
let starting=0;
canvas.addEventListener("click",function(e){
  
  mousex=e.pageX-canvas.offsetLeft;
  mousey=e.pageY-canvas.offsetTop;
  console.log(mousex)
  console.log(mousey)

})
document.addEventListener("keydown",function(e){

 console.log(e.key)

 console.log("ye"+mousex)
 console.log(word)  

 
 
ctx.fillStyle="red"
 ctx.fillText(e.key, mousex, mousey)   
  word.push(e.key)
  
 mousex+=ctx.measureText(e.key).width;
 
})
