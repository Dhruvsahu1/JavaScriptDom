let me = document.querySelector("main");
let btn = document.querySelector("button");

let arr= ["I Am Dhruv","JavaScript is Love","Web Developement","Developer On Work","Lazyyyyy","Busssyyyyy"];

btn.addEventListener("click", function () {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");

    let deg = Math.floor(Math.random() * 360);
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let t = Math.floor(Math.random() * arr.length);

    let s1 = Math.floor(Math.random() * 256);
    let s2 = Math.floor(Math.random() * 256);
    let s3 = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${s1}, ${s2}, ${s3})`;
    div.style.position = "absolute";
    div.style.transform = `rotate(${deg}deg)`;

    div.style.padding = "20px";
    div.style.width = "auto";
    div.style.height = "auto";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    div.style.top = `${x}%`;
    div.style.left = `${y}%`;

   
    h1.style.whiteSpace = "nowrap"; 
    h1.style.margin = "0";
    h1.innerHTML = `<i>${arr[t]}</i>`;

    div.appendChild(h1);
    me.appendChild(div);
});

