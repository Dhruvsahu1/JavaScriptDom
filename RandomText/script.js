let me  = document.querySelector("main");
let btn = document.querySelector("button");
let arr= ["I Am Dhruv","JavaScript is Love","Web Developement","Developer On Work","Lazyyyyy"];
btn.addEventListener("click",function(){
    let h1 = document.createElement("h1");
    let t = Math.floor(Math.random()*arr.length);
    console.log(t);
    h1.innerHTML = `<i>${arr[t]}</i>`;
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let deg = Math.floor(Math.random()*360);
    let scale = Math.floor(Math.random()*3)+0.3;
     h1.style.position= "absolute";
    h1.style.transform = `rotate(${deg}deg) scale(${scale})`;
    h1.style.top = `${x}%`
    h1.style.left = `${y}%`
    me.appendChild(h1);
    h1.style.color = "white";
    
})