var text = document.getElementById("text");
const main = document.getElementById("main");
const count = document.getElementsByClassName("count")[0];
document.addEventListener("keyup", (e) => {
  //   text.remove();
  //   let txt = document.createElement("div");
  //   txt.setAttribute("id", "text");
  //   main.appendChild(txt);
  text.innerHTML = `<p>You pressed <span>${e.key}</span> </p>`;
  count.innerHTML = `<p>${e.keyCode}</p>`;
});
