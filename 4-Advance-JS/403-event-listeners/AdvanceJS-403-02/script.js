let button = document.getElementsByTagName("button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    sound(button[i].innerText);
    animation(button[i].innerText);
  });
}

document.addEventListener("keypress", (event) => {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;
    case "s":
      var crash = new Audio("sounds/tom-3.mp3");
      crash.play();
      break;
    case "d":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "j":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;
    case "k":
      var crash = new Audio("sounds/tom-4.mp3");
      crash.play();
      break;
    case "l":
      var crash = new Audio("sounds/bass.mp3");
      crash.play();
      break;
  }
}

function animation(key) {
  var currentkey = document.querySelector("." + key);
  currentkey.classList.add("animation");
  setTimeout(function () {
    currentkey.classList.remove("animation");
  }, 100);
}
