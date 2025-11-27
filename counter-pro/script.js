var h1 = document.querySelector("h1");
var btn1 = document.querySelector(".inc");
var btn2 = document.querySelector(".dec");
let p = document.createElement("p");
let box = document.querySelector(".box");

let a = 0;

btn1.addEventListener("click", () => {
  a++;
  h1.innerHTML = a;
  if (a >= 0) {
    h1.style.color = "black";
  }
  if (a >= 10) {
    p.innerHTML = "you have reached the limit";
    box.appendChild(p);
  }
  if(a>=10){
    btn1.disabled = true;
  }
  
});

btn2.addEventListener("click", () => {
  a--;
  h1.innerHTML = a;
  if (a < 0) {
    h1.style.color = "red";
  }
  if (a <= 10) {
    box.removeChild(p);
  }
  if(a<10){
    btn1.disabled = false;
  }
});
