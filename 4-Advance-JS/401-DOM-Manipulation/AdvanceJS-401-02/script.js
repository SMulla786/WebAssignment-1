let list = document.getElementsByTagName("li");

list[0].style.backgroundColor = "blue";
list[0].style.color = "white";

list[16].style.backgroundColor = "palevioletred";
list[16].style.color = "white";

list[8].style.backgroundColor = "green";
list[8].style.color = "white";

for (let i = 0; i < list.length; i++) {
  if (i % 2 !== 0) {
    list[i].style.backgroundColor = "lime";
    list[i].style.color = "white";
  }
}
