// page reload
window.onpageshow = function(event){
    if(event.persisted){
      window.location.reload();
    }
  }

// hamburger-btn click
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerLine = document.getElementsByClassName("hamburger-line");
const hamburgerNav = document.getElementById("hamburger-nav");
hamburgerBtn.addEventListener('click', function() {
  hamburgerNav.classList.toggle('hamburger-nav-is-open');
  for (i = 0; i <= hamburgerLine.length; i++) {
    hamburgerLine[i].classList.toggle('hamburger-line-on');
  }
});

// hamburger-nav-item click
// hamburgerLine.addEventListener('click', function() {
//   hamburgerNav.classList.toggle('hamburger-nav');
// });

// move-target-section-title scroll
const moveTargetSectionTitle = document.querySelectorAll('.move-target-section-title');
console.log(moveTargetSectionTitle);
window.addEventListener('scroll', function () {
  for (let i = 0; i <= moveTargetSectionTitle.length; i++) {
    const sectionTitleHeight = moveTargetSectionTitle[i].getBoundingClientRect().top;
    function moveTargetSectionTitleOpen() {
      moveTargetSectionTitle[i].style.opacity = "1.0";
      moveTargetSectionTitle[i].style.transform = "translateX(0)";
    }
    function moveTargetSectionTitleClose() {
      moveTargetSectionTitle[i].style.opacity = "0";
      moveTargetSectionTitle[i].style.transform = "translateX(-100%)";
    }
    if (window.innerHeight * .6 > sectionTitleHeight) {
      moveTargetSectionTitleOpen();
    }
    else if (window.innerHeight * .3 < sectionTitleHeight) {
      moveTargetSectionTitleClose();
    }
  }
});

// move-target-flex-box scroll
console.log('ScreenHeight',window.innerHeight)
const moveTargetFlexBox = document.querySelectorAll('.move-target-flex-box');
console.log(moveTargetFlexBox);
window.addEventListener('scroll', function () {
  for (let i = 0; i <= moveTargetFlexBox.length; i++) {
    const flexBoxHeight = moveTargetFlexBox[i].getBoundingClientRect().top;
    console.log(flexBoxHeight)
    function moveTargetFlexBoxOpen() {
      moveTargetFlexBox[i].style.opacity = "1.0";
      moveTargetFlexBox[i].style.transform = "translateY(0)";
    }
    function moveTargetFlexBoxClose() {
      moveTargetFlexBox[i].style.opacity = "0";
      moveTargetFlexBox[i].style.transform = "translateY(100px)";
    }
    if (window.innerHeight * .6 > flexBoxHeight) {
      moveTargetFlexBoxOpen();
    }
    else if (window.innerHeight * .3 < flexBoxHeight) {
      moveTargetFlexBoxClose();
    }
  }
});