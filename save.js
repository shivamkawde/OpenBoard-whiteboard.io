let save = document.querySelector("#save");
save.addEventListener("click", function () {

    console.log("aa gta");
    var image = canvas.toDataURL();
    console.log(image)
    let a = document.createElement('a');


    a.href = image;

    a.download = "mypic.jpg";
    a.click();
    a.remove();

})
