window.onload=function(){
    let Animation = function() {
    //アイコン位置取得
    let pageTop =  document.getElementById('page_top');

    //要素の位置座標を取得
    let rect = pageTop.getBoundingClientRect();
    //topからの距離
    let scrollTop = rect.top + window.pageYOffset;

    if(scrollTop > 420){
      pageTop.classList.add('show');
     }  else {
      pageTop.classList.remove('show');
     }
   }
      window.addEventListener('scroll', Animation);
  }

// 1. すべてのhref="#"のaタグを取得
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

// 2. 1のaタグにそれぞれクリックイベントを設定
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {

        // 3. ターゲットの位置を取得
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href'); // 各a要素のリンク先を取得
        let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得
        
        const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
        const offset = window.pageYOffset; // 現在のスクロール量を取得
        const gap = document.getElementById('js-header').clientHeight; // 固定ヘッダー分の高さ
        const target = rect + offset - gap; //最終的な位置を割り出す

        if ( smoothScrollTrigger === "#") {
            window.scrollTo({
                top: 0,
            behavior: 'smooth',
            })
        } else {

            // 4. スムースにスクロール
            window.scrollTo({
                top: target,
                behavior: 'smooth',
            })
        }


    });

}