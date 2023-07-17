var navbar = document.getElementById("navbarId");
var scrollBtn = document.getElementById("scroll-btn");
window.onscroll = function () {
  if (window.pageYOffset > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset > 500) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
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
function hidemenu() {
  navmenu.classList.remove("active");
  menu.classList.remove("active");
}

function sendEmails() {
  var target = document.getElementById("myForm");
  var namedata = document.getElementById("name").value;
  var emaildata = document.getElementById("email").value;
  var messagedata = document.getElementById("message").value;

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      target.reset();
      alert(xmlHttp.responseText);
    }
  };
  // https://portfolio-backend-orpin.vercel.app/
  xmlHttp.open("post", "https://portfolio-backend-orpin.vercel.app/");

  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlHttp.send(
    "name=" + namedata + "&email=" + emaildata + "&message=" + messagedata
  );
}
$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: ["Programmer", "Web Developer", "Enthusiastic Dev"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Programmer", "Web Developer", "Enthusiastic Dev"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 3000,
    autoplay: true,
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
