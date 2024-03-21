const toggleButton = document.querySelector(".toggle-button");
const mainMenu = document.querySelector(".main-menu");
/* Toggle the Menu Icon */
toggleButton.addEventListener('click', function () {
    /* Toggles the active class */
    mainMenu.classList.toggle('active');
        if (mainMenu.classList.contains("active")) {              
            /* Adds the close (x) icon */
            toggleButton.innerHTML = "&#215;";
        } else {          
            /* Adds the hamburger icon */
            toggleButton.innerHTML = "&#9776;";
        }
});
/* Adding Dropdowns to the Submenu */
const menuItems = document.querySelectorAll(".menu-item");
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (mainMenu.querySelector(".submenu-active")) {
    mainMenu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
/* Event Listeners */
for (let menuItem of menuItems) {
    if (menuItem.querySelector(".submenu")) {
        menuItem.addEventListener("click", toggleItem, false);
        menuItem.addEventListener("keypress", toggleItem, false);
    }   
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (mainMenu.querySelector(".submenu-active")) {
      let isClickInside = mainMenu.querySelector(".submenu-active").contains(e.target);
      if (!isClickInside && mainMenu.querySelector(".submenu-active")) {
        mainMenu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
/* Event listener */
  document.addEventListener("click", closeSubmenu, false);

// slider
var imgs =document.querySelectorAll('.bannerslides img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function currentSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = n;

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}
var timer = setInterval(changeSlide, interval);
currentImg = (currentImg + 1) % imgs.length; // update the index number

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
}

// scrollbar
const scrollbar =document.querySelector("scrollbar");

scrollbar.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });

})

 const navLink = document.querySelectorAll('.navlink');
 const windowPathname = window.location.pathname;

 navLink.forEach(navLink =>{
  const navLinkPathname = new URL(navLink.href).pathname;
  if((windowPathname === navLinkPathname)||(windowPathname === '/index.html' && navLinkPathname ==='/home.html')){
   navLink.classList.add('active');
  }
 });
