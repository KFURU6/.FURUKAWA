window.onload=function(){
    let Animation = function() {
    //アイコン位置取得
    let pageTop =  document.getElementById('page_top');

    //要素の位置座標を取得
    let rect = pageTop.getBoundingClientRect();
    //topからの距離
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