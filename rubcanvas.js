let eleser = document.querySelector("#eleser");
let reLine = false;
eleser.addEventListener("click", function () {
    reLine = true
    ll = false

})
//console.log(reLine)

//eraser function
canvas.addEventListener("mousedown", function (e) {

    if (reLine) {

        mouseX = parseInt(e.clientX - canvas.offsetLeft);
        mouseY = parseInt(e.clientY - canvas.offsetTop);
        lastX = mouseX;
        lastY = mouseY;
        ctx.globalCompositeOperation = "destination-out";
        ctx.arc(lastX, lastY, 50, 0, Math.PI * 2, false);
        ctx.fill();

    }

})
