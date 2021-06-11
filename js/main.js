const mobileMenuButton = document.querySelector('.mobile-menu-button')
const menu = document.querySelector('.nav-menu')
const mobileMenuCloseButton = document.querySelector('.mobile-menu-close')

mobileMenuButton.addEventListener("click",() => {
  menu.classList.add("is-active");
  mobileMenuCloseButton.classList.add("is-active");
});

mobileMenuCloseButton.addEventListener("click",() => {
  menu.classList.remove("is-active");
  mobileMenuCloseButton.classList.remove("is-active");
});