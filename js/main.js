// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn-sitemap-open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn-sitemap-close')
const layer_sitemap = document.getElementById('layer_sitemap')

// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    layer_sitemap.style.display = 'block'
})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    layer_sitemap.style.display = 'none'
})

// 혜택 부분 슬라이더
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,

    slidesPerView : 1, 
    spaceBetween : 6,
    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: '.page',
    },
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
})


// pause, play onclick 메서드
const btnPause = document.getElementById('btn-pause')
const btnPlay = document.getElementById('btn-play')

btnPause.addEventListener("click", function() {
    mySwiper.autoplay.stop()

    btnPlay.style.display = 'block'
    btnPause.style.display = 'none'

})
btnPlay.addEventListener("click", function() {
    mySwiper.autoplay.start()
    btnPlay.style.display = 'none'
    btnPause.style.display = 'block'
    
})

/* box-office 마우스오버-엔터 이벤트 */
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');

const b1 = document.getElementById('boxoffice-first');
const b2 = document.getElementById('boxoffice-second');
const b3 = document.getElementById('boxoffice-third');
const b4 = document.getElementById('boxoffice-fourth');

b1.addEventListener('mouseover', function(){
    first.style.display = 'block';
});
b1.addEventListener('mouseout', function(){
    first.style.display = 'none';
});

b2.addEventListener('mouseover', function(){
    second.style.display = 'block';
});
b2.addEventListener('mouseout', function(){
    second.style.display = 'none';
});

b3.addEventListener('mouseover', function(){
    third.style.display = 'block';
});
b3.addEventListener('mouseout', function(){
    third.style.display = 'none';
});

b4.addEventListener('mouseover', function(){
    fourth.style.display = 'block';
});
b4.addEventListener('mouseout', function(){
    fourth.style.display = 'none';
});


