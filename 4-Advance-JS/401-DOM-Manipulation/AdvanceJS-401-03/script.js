var imgArray = ["f1.jpg", "1151247.jpg", "1218864.jpg", "1219390.jpg"];
var curIndex = 0;
function next() {
  curIndex++;
  if (curIndex == imgArray.length) {
    curIndex = 0;
  }
  document.getElementById("img").src = imgArray[curIndex];
}
function previous() {
  if (curIndex == 0) {
    curIndex = imgArray.length;
  }
  curIndex--;
  document.getElementById("img").src = imgArray[curIndex];
}
