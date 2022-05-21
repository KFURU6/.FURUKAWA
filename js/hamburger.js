// hamburger-btn click
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerLine = document.getElementsByClassName("hamburger-line");
const hamburgerNav = document.getElementById("hamburger-nav");
hamburgerBtn.addEventListener('click', function(e) {
  e.preventDefault();
  hamburgerNav.classList.toggle('is-open');
  for (i = 0; i <= hamburgerLine.length; i++) {
    hamburgerLine[i].classList.toggle('on-line');
  }
  return false;
});

// hamburger-nav-item click
const hamburgerNavItem = document.getElementsByClassName('hamburger-nav-item');
console.log(hamburgerNavItem);
for (hamburgerNavItemCount = 0; hamburgerNavItemCount <= hamburgerNavItem.length; hamburgerNavItemCount++) {
  hamburgerNavItem[hamburgerNavItemCount].addEventListener('click', function(e) {
    hamburgerNav.classList.remove('is-open');
    for (i = 0; i <= hamburgerLine.length; i++) {
      hamburgerLine[i].classList.remove('on-line');
    }
  })
};