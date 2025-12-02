const main = document.querySelector("main");

main.addEventListener("mousemove", (e) => {
  const x = e.clientX + "px";
  const y = e.clientY + "px";

  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
});

const text = document.querySelector(".text");
console.log(text);


text.addEventListener("mouseover", function (e) {
    
  const ans = "G-Wagon";
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let iteration = 0;
  console.log(text);
  function randomText() {
    const res = ans
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return str.split("")[Math.floor(Math.random() * 52)];
      })
      .join("");
    console.log(res);
    text.innerText = res;
    if(iteration>=ans.length){
        clearInterval(interval);
    }
    iteration += 0.25;

  }
  
  let interval = setInterval(randomText, 50);
},{once:true});
