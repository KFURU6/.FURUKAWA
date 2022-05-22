const moveTargetSectionTitle = document.querySelectorAll('.section-title');
console.log(moveTargetSectionTitle);
window.addEventListener('scroll', function() {
  for (let i = 0; i <= moveTargetSectionTitle.length; i++) {
    const sectionTitleHeight = moveTargetSectionTitle[i].getBoundingClientRect().top;
    function moveTargetSectionTitleOpen() {
      moveTargetSectionTitle[i].style.opacity = "1.0";
      moveTargetSectionTitle[i].style.transform = "translateX(0)";
    }
   
    if (window.innerHeight * .7 > sectionTitleHeight) {
      moveTargetSectionTitleOpen();
    }
  }
});