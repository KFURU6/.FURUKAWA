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
    if (window.innerHeight * .7 > flexBoxHeight) {
      moveTargetFlexBoxOpen();
    }
  }
});