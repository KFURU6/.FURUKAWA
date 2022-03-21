// page reload
window.onpageshow = function(event){
    if(event.persisted){
      window.location.reload();
    }
  }

  // const headerNavItem = document.querySelectorAll('header-nav-item');
  // const hamburgerNavItem = document.querySelectorAll('hamburger-nav-item');
  // const footerNavItem = document.querySelectorAll('footer-nav-item');
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerLine = document.getElementById('hamburger-line');
hamburgerBtn.addEventListener('click', function() {
  for (let i = 0; i <= hamburgerLine.length; i++) {
    console.log('hhhhhhhhhh');
    hamburgerLine[0].classList.toggle('active');
    hamburgerLine[0].classList.add('active');
  }
});


  // message
  // const topMessage = document.getElementById('message');
  // window.addEventListener('load',function(){
  //   topMessage.style.letterSpacing = "8px";
  //   topMessage.style.opacity = "1.0";
  // })

// hamburger-menu
// const hamburgerBtn = document.getElementById('ham-btn');
// const hamburgerIcon = document.getElementById('ham-icon');
// const nav = document.getElementById('nav');
//     hamburgerIcon.addEventListener('click', function() {
//     hamburgerBtn.classList.toggle('active')
//     hamburgerIcon.classList.toggle('active')
//     nav.classList.toggle('active')
// });

// nav click
// const navTop = document.getElementById('top-btn');
// navTop.addEventListener('click',function(){
//   hamburgerBtn.classList.remove('active')
//   hamburgerIcon.classList.remove('active')
//   nav.classList.remove('active')
// });

// const navService = document.getElementById('service-btn');
// navService.addEventListener('click',function(){
//   hamburgerBtn.classList.remove('active')
//   hamburgerIcon.classList.remove('active')
//   nav.classList.remove('active')
// });

// const navWorks = document.getElementById('works-btn');
// navWorks.addEventListener('click',function(){
//   hamburgerBtn.classList.remove('active')
//   hamburgerIcon.classList.remove('active')
//   nav.classList.remove('active')
// });

// const navBlog = document.getElementById('blog-btn');
// navBlog.addEventListener('click',function(){
//   hamburgerBtn.classList.remove('active')
//   hamburgerIcon.classList.remove('active')
//   nav.classList.remove('active')
// });

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

// move-target-flex-box
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