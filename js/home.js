// page reload
window.onpageshow = function(event){
    if(event.persisted){
      window.location.reload();
    }
  }

  // Appear from below
//     const movepage = document.getElementById('body');
//   window.addEventListener('load', function() {
//       movepage.style.opacity = '1.0';
//       movepage.style.transform = 'translateY(0vw)';
//   })

  // hamberger-menu
  const hambergerBtn = document.getElementById('ham-btn');
  const hambergerIcon = document.getElementById('ham-icon');
  const nav = document.getElementById('nav');
    hambergerIcon.addEventListener('click', function() {
      hambergerBtn.classList.toggle('active')
      hambergerIcon.classList.toggle('active')
      nav.classList.toggle('active')
  });

console.log('画面の高さ',window.innerHeight)
const animationTargetElement = document.querySelectorAll('.animation-image');
console.log(animationTargetElement);
window.addEventListener('scroll', function(){
    for(let i = 0; i <= animationTargetElement.length; i++){
        const ElementHeight = animationTargetElement[i].getBoundingClientRect().top;
        console.log(ElementHeight)
        if(window.innerHeight * .7 > ElementHeight){
            animationTargetElement[i].classList.add('active');
            animationTargetElement[i].style.opacity = "1.0";
            console.log('hello');
        }
    }
})