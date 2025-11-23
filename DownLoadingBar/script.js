let progress = document.querySelector(".progress");
let btn = document.querySelector("button");
let h1 = document.querySelector(".content");
let a =0;
let p  = document.querySelector("p span");
btn.addEventListener("click",function(){
    btn.style.pointerEvents = "none"
    let int = 50+ Math.floor(Math.random()*50);
    console.log(int);
    
    let interval = setInterval(()=>{
        a++;
        h1.innerHTML = `<i>${a}%</i>`
        progress.style.width = `${a}%`
        
    },int)
    setTimeout(()=>{
        clearInterval(interval);
        btn.innerHTML = "Downloaded"
        btn.style.opacity = "0.5"
        
    },int*100)
    p.innerHTML =` ${int/10} seconds`
})