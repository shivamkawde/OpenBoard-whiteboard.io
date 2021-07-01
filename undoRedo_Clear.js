let redobtn = document.querySelector("#redo");
let undo = document.querySelector("#undo");
let clear = document.querySelector("#clear")
let redo = [];


//redo function
redobtn.addEventListener("click", function (e) {
  //reidx=reidx-1;
  if (redo.length > 0) {
    let g = redo.pop();
    ctx.putImageData(g, 0, 0);
  }
})



//undo function
undo.addEventListener("click", function () {


  if (lineArray.length < 1) {
    ctx.fillStyle = background;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    lineArray = [];
    index = -1;

  }
  else {
    index = index - 1;
    let my = lineArray.pop();
    redo.push(my);
    //console.log(redo)
    ctx.putImageData(my, 0, 0)
  }
})


//all content remove
clear.addEventListener("click", function (e) {
  alert("Do you want to delete all content")
  ctx.fillStyle = background;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  lineArray = [];
  index = -1;
})
