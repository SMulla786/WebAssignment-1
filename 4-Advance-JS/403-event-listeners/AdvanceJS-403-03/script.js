var bill = document.getElementById("bill");
var service = document.getElementById("service_percentage");
var people = document.getElementById("people");
var button = document.getElementById("calculate");

var total = 0;
var billAmount = 0;
var serviceQuality = 0;
var numPeople = 0;

button.addEventListener("click", () => {
  numPeople = people.value;
  billAmount = bill.value;
  serviceQuality = parseInt(service.value);
  var ttip = (billAmount * serviceQuality) / 100;
  total = Math.round(ttip / numPeople);
  document.getElementById("tip").innerText = total;
});
