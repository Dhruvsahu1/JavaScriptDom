const main = document.querySelector("main");
const thor = document.querySelector("img");

main.addEventListener("mousemove",function(dets){
    // console.log(dets);
    thor.style.left = dets.clientX+'px';
    thor.style.top = dets.clientY+"px";
})