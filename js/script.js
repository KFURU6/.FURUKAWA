// page reload
window.onpageshow = function(event){
    if(event.persisted){
      window.location.reload();
    }
  }

// section-title scroll
const moveTargetSectionTitle = document.querySelectorAll('.section-title');
console.log(moveTargetSectionTitle);
window.addEventListener('scroll', function() {
  for (let i = 0; i <= moveTargetSectionTitle.length; i++) {
    const sectionTitleHeight = moveTargetSectionTitle[i].getBoundingClientRect().top;
    function moveTargetSectionTitleOpen() {
      moveTargetSectionTitle[i].style.opacity = "1.0";
      moveTargetSectionTitle[i].style.transform = "translateX(0)";
    }
   
    if (window.innerHeight * .6 > sectionTitleHeight) {
      moveTargetSectionTitleOpen();
    }
  }
});

// js-move-target-from-under scroll
console.log('ScreenHeight',window.innerHeight)
const moveTargetFlexBox = document.querySelectorAll('.js-move-target-from-under');
console.log(moveTargetFlexBox);
window.addEventListener('scroll', function() {
  for (let i = 0; i <= moveTargetFlexBox.length; i++) {
    const flexBoxHeight = moveTargetFlexBox[i].getBoundingClientRect().top;
    console.log(flexBoxHeight)
    function moveTargetFlexBoxOpen() {
      moveTargetFlexBox[i].style.opacity = "1.0";
      moveTargetFlexBox[i].style.transform = "translateY(0)";
    }
    if (window.innerHeight * .6 > flexBoxHeight) {
      moveTargetFlexBoxOpen();
    }
  }
});

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