var x;
for(var i =0;i<document.querySelectorAll(".btn").length;i++){
     //x=document.querySelectorAll(".btn")[i].textContent
    document.querySelectorAll(".btn")[i].addEventListener("click",a);
}
function a(event){
  // alert(x);
  // var sou= new Audio("/sounds/crash.mp3");
  //   sou.play();
  x=event.target.textContent;
  w(x);
}
function w(x){
  if(x==='W'){
   // alert(x);
    var sou= new Audio("/sounds/crash.mp3");
    sou.play();
  }else if(x==='A'){
    // alert(x);
    var sou= new Audio("/sounds/kick-bass.mp3");
    sou.play();
  }else if(x==='S'){
    // alert(x);
    var sou= new Audio("/sounds/snare.mp3");
    sou.play();
  }else if(x==='D'){
    //alert(x);
    var sou= new Audio("/sounds/tom-1.mp3");
    sou.play();
  }else if(x==='J'){
    // alert(x);
    var sou= new Audio("/sounds/tom-2.mp3");
    sou.play();
  }else if(x==='K'){
    // alert(x);
    var sou= new Audio("/sounds/tom-3.mp3");
    sou.play();
  }else if(x==='L'){
    // alert(x);
    var sou= new Audio("/sounds/tom-4.mp3");
    sou.play();
  }
  
}
document.querySelector("body").addEventListener("keydown",key);
function key(event){
  var key=event.key;
  if(key=='w'){
    var sou= new Audio("/sounds/crash.mp3");
    sou.play();
    
  }else if(key=='a'){
    var sou= new Audio("/sounds/kick-bass.mp3");
    sou.play();
    
  }else if(key=='s'){
    var sou= new Audio("/sounds/snare.mp3");
    sou.play();
    
  }else if(key=='d'){
    var sou= new Audio("/sounds/tom-1.mp3");
    sou.play();
    
  }else if(key=='j'){
    var sou= new Audio("/sounds/tom-2.mp3");
    sou.play();
    
  }else if(key=='k'){
    var sou= new Audio("/sounds/tom-3.mp3");
    sou.play();
    
  }else if(key=='l'){
    var sou= new Audio("/sounds/tom-4.mp3");
    sou.play();
    
  }
}