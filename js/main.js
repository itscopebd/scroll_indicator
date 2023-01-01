


window.onscroll= function(){

let progress= document.getElementById("progress");
 let winScroll= document.body.scrollTop || document.documentElement.scrollTop;

 let height= document.documentElement.clientHeight;
let scrollHeight= document.documentElement.scrollHeight;
let calculate= scrollHeight-height;

let scroled= (winScroll/calculate) * 100;
progress.style.display="block"
document.getElementById("progress").style.width = scroled + "%";

}