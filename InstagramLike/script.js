const img = document.querySelector("img");
const like = document.querySelector("i");
img.addEventListener("dblclick",function(){
    like.style.opacity = 1;
    like.style.transform = `translate(-40%,-40%) scale(1) rotate(0deg)`

    setTimeout(function(){
        like.style.transform = `translate(-60%,-360%) scale(1) rotate(80deg)`
    },800);
    setTimeout(function(){
        like.style.opacity = 0;
    },1000)
    setTimeout(function(){
         like.style.transform = `translate(-50%,-50%) scale(0) rotate(-80deg)`
    },1200)
})