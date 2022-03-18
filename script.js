var navbar = document.getElementById("navbarId");
window.onscroll = function () {
  if (window.pageYOffset > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
// $(document).ready(function(){
//     $(".menu-btn").click(function(){
//         $(".navbar.menu").toggleClass("active")
//     })
// })
var navmenu = document.getElementById("menuId");
var menu = document.getElementById("menubar");
function showmenu() {
  navmenu.classList.toggle("active");
  menu.classList.toggle("active");
}

$(document).ready(function () {
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 3000,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      700: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
