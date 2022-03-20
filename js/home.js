// page reload
window.onpageshow = function(event){
    if(event.persisted){
      window.location.reload();
    }
  }

  // message
  const topMessage = document.getElementById('message');
  window.addEventListener('load',function(){
    topMessage.style.letterSpacing = "8px";
    topMessage.style.opacity = "1.0";
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
// nav click
const navTop = document.getElementById('top-btn');
navTop.addEventListener('click',function(){
  hambergerBtn.classList.remove('active')
  hambergerIcon.classList.remove('active')
  nav.classList.remove('active')
});
const navService = document.getElementById('service-btn');
navService.addEventListener('click',function(){
  hambergerBtn.classList.remove('active')
  hambergerIcon.classList.remove('active')
  nav.classList.remove('active')
});
const navWorks = document.getElementById('works-btn');
navWorks.addEventListener('click',function(){
  hambergerBtn.classList.remove('active')
  hambergerIcon.classList.remove('active')
  nav.classList.remove('active')
});
const navBlog = document.getElementById('blog-btn');
navBlog.addEventListener('click',function(){
  hambergerBtn.classList.remove('active')
  hambergerIcon.classList.remove('active')
  nav.classList.remove('active')
});

// move-target
console.log('ScreenHeight',window.innerHeight)
const animationTargetElement = document.querySelectorAll('.move-target');
console.log(animationTargetElement);
window.addEventListener('scroll', function(){
    for(let i = 0; i <= animationTargetElement.length; i++){
        const ElementHeight = animationTargetElement[i].getBoundingClientRect().top;
        console.log(ElementHeight)
        if(window.innerHeight * .6 > ElementHeight){
          animationTargetElement[i].classList.add('active');
          animationTargetElement[i].style.opacity = "1.0";
          animationTargetElement[i].style.transform = "translateY(0)";
        }
        else if (window.innerHeight * .3 < ElementHeight){
          animationTargetElement[i].classList.remove('active');
          animationTargetElement[i].style.opacity = "0";
          animationTargetElement[i].style.transform = "translateY(100px)";
        }
    }
});