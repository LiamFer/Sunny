var open = document.getElementById("open");
var close = document.getElementById("close");
var menu = document.getElementById("navbar");

open.addEventListener("click", abrir);
close.addEventListener("click", closing);

function abrir() {
  if (menu.style.width == "0%") {
    menu.style.width = "100%";
  }
  menu.style.zIndex = "9";
}

function closing() {
  menu.style.width = "0%";
  menu.style.zIndex = "-99";
}

// Primeiro Código

// function abrir() {
//   if (document.getElementById("navbar").style.width == "0%") {
//     document.getElementById("navbar").style.width = "100%";
//   }
//   document.getElementById("navbar").style.zIndex = "9";
// }

// function closing() {
//   document.getElementById("navbar").style.width = "0%";
//   document.getElementById("navbar").style.zIndex = "-9";
// }
