let canvas=document.querySelector(".canvas");
var ctx = canvas.getContext('2d');
canvas.width=window.innerWidth-10;
canvas.height=520;


let background="white";
ctx.fillStyle=background;
let color=background=="white"?"black":"white";
let dwidth="3";
function chageClr(e){
    color=e.value;
}



//pen width change
function penwidth(e)
{
    
  console.log(e)
  dwidth=e;
}
