
// $(window).on("scroll", function() {
//   if ($(this).scrollTop() > 100) {
//       $("#header-bar").addClass("scrolled");
//   } else {
//       $("#header-bar").removeClass("scrolled");
//   }
// });

window.addEventListener("scroll", function () {
  const header = document.getElementById("header-bar");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var menu = document.getElementById("bar");
var item = document.getElementById("item");

item.style.right = "-300px";

menu.onclick = function () {
  
  console.log('Menu clicked');
  
  if (item.style.right == "-300px") {
    item.style.right = "0";
  } else {
    item.style.right = "-300px";
  }
};


