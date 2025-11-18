let me = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click",function () {
    let div = document.createElement("div");
    div.style.height = "80px";
    div.style.width = "80px";
    let s1 = Math.floor(Math.random()*256);
    let s2 = Math.floor(Math.random()*256);
    let s3 = Math.floor(Math.random()*256);
    div.style.backgroundColor = `rgb(${s1},${s2},${s3})`;
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let deg = Math.floor(Math.random()*360);
    div.style.position= "absolute";
    div.style.top = `${x}%`
    div.style.left = `${y}%`
    div.style.transform = `rotate(${deg}deg)`;
    me.appendChild(div);
})