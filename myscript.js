    
 var mediaDevices = navigator.mediaDevices;
 let btn=document.querySelector("#btn");
 let video=document.querySelector("#vid");
 let takepic=document.querySelector("#takepic");
 let record=document.querySelector("#record");
 let mediaRecorder;
 let chunks=[];
 let isreording=false;
 
 
//   record.addEventListener("click",function(){
 
//  if(isreording==false){
//  mediaRecorder.start()
//  record.innerHTML="recording"
//  isreording=true;
//  }
//  else{
//      mediaRecorder.stop()
//     record.innerHTML="e"
 
//  }
 
//   })
 
 
    mediaDevices.getUserMedia({  video: true,audio: false }).then(function(meadisStream){
     
     if(meadisStream){
     console.log("done");
     
    
     var mediaRecorder = new MediaRecorder(meadisStream);
      
     mediaRecorder.addEventListener("dataavailable", function (e) {
         chunks.push(e.data);
       });
   
       mediaRecorder.addEventListener("stop", function (e) {
         
    })}
    video.srcObject = meadisStream;
     }).
     catch(function(e){
     console.log("erroe");
     }
     )
     takepic.addEventListener("click",function(){
         
         let canvas = document.createElement("canvas");
         canvas.width = video.videoWidth;
         canvas.height = video.videoHeight;
         let tool = canvas.getContext("2d");
          tool.drawImage(video,0,0)
         let link=canvas.toDataURL();
         console.log(link)
         let a = document.createElement("a");
         a.href=link;
         a.download="imagpng";
         a.click();
         a.remove();
         
     })
 
 
 
