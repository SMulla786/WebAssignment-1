var div = document.getElementsByTagName("div")[0];
const first = document.createElement("input");
const para = document.createElement("p");
first.style.border = "2px solid blue";
div.setAttribute("id", "div1");
div.append(first);
div.append(para);
first.addEventListener("keyup", () => {
  const val = first.value;
  para.innerText = val;
});
