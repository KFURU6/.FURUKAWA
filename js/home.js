// page reload
window.onpageshow = function(event){
    if(event.persisted){
      window.location.reload();
    }
  }

  // message

  const topMessage = document.getElementById.
  window.addEventListener('load',function() {
    topMessage.style.fontSize = "16px";
    topMessage.style.letterSpacing = "8px";
  })

// hamberger-menu
const hambergerBtn = document.getElementById('ham-btn');
const hambergerIcon = document.getElementById('ham-icon');
const nav = document.getElementById('nav');
  hambergerIcon.addEventListener('click', function() {
    hambergerBtn.classList.toggle('active')
    hambergerIcon.classList.toggle('active')
    nav.classList.toggle('active')
});

// move-target
console.log('画面の高さ',window.innerHeight)
const animationTargetElement = document.querySelectorAll('.move-target');
console.log(animationTargetElement);
window.addEventListener('scroll', function(){
    for(let i = 0; i <= animationTargetElement.length; i++){
        const ElementHeight = animationTargetElement[i].getBoundingClientRect().top;
        console.log(ElementHeight)
        if(window.innerHeight * .7 > ElementHeight){
            animationTargetElement[i].classList.add('active');
            animationTargetElement[i].style.opacity = "1.0";
            animationTargetElement[i].style.transform = "translateY(0)";
            console.log('hello');
        }
    }
})