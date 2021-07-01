let getFile=document.querySelector("#getFile");



var imageLoader = document.getElementById('getFile');
    imageLoader.addEventListener('change', handleImage, false);
//var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
//let pic =false;
//if(pic){canvas.height=img.height ;canvas.width=img.width}  

function handleImage(e){
 //pic=true;
 let img
    var reader = new FileReader();
    reader.onload = function(event){
         img = new Image();
        
        img.onload = function(){
          
      
      //     var currWidth = img.clientWidth;

      // var cuuheight=img.clientHeight;

      // canvas.width = currWidth;
      // canvas.height = cuuheight

      
    

    //       img.style.height = c;
    // img.style.width = canvas.width;
         
            canvas.width = img.width;
               canvas.height = img.height;
            
                     ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    


}
