window.onload=function(){
    let Animation = function() {
    let pageTop =  document.getElementById('page_top');
    let rect = pageTop.getBoundingClientRect();
    let scrollTop = rect.top + window.pageYOffset;

    if(scrollTop > innerHeight){
      pageTop.classList.add('show');
     }  else {
      pageTop.classList.remove('show');
     }

    pageTop.addEventListener('click', scroll_to_top);
    function scroll_to_top() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
   }
      window.addEventListener('scroll', Animation);
  }