var bos = document.querySelectorAll(".bos");

var sound = {
  a: "./28.mp3",
  s: "./29.mp3",
  d: "./30.mp3",
  f: "./31.mp3",
  j: "./32.mp3",
  k: "./33.mp3",
  l: "./34.mp3",
  e: "./35.mp3",
};

bos.forEach((val) => {
  val.classList.add("blink");
  val.addEventListener("click", () => {
    // let helo = val.innerHTML;
    if (sound[val.innerHTML]) {
      let audio = new Audio(sound[val.innerHTML]);
      audio.currentTime = 0;
      audio.play();
      val.classList.remove("blink");
    }
    setTimeout(() => {
      val.classList.add("blink");
    }, 200);
  });
});

window.addEventListener("keydown", (inp) => {
  bos.forEach((any) => {
    if (any.innerHTML === inp.key.toLowerCase()) {
      let audio = new Audio(sound[any.innerHTML]);
      audio.currentTime = 0;
      audio.play();
      any.classList.remove("blink")
    }
    setTimeout(()=>{
      any.classList.add("blink")
    },200)
  });
  //  
});
