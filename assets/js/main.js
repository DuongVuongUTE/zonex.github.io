window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-container");
    header.classList.toggle("sticky", window.scrollY >= 100);
  });
let topbar = document.querySelector('.top-bar');
let topbar_icon = document.querySelector('.top-bar__icon');
topbar_icon.addEventListener("click", event =>{
    topbar.classList.add('hide')
})