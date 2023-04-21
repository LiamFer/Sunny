var menu = document.getElementById("burguer");
var header = document.getElementById("container-1");
var items = document.getElementById("menu-items");

menu.addEventListener("click", menuOpen);

function menuOpen() {
  header.classList.toggle("header-still");
  items.classList.toggle("menu-opn");
}
