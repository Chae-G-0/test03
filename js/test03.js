$(function () {
    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.txtSlide').slick({
        arrows: false,
        pauseOnHover: false,
    });

    $('.faceSlide').slick({
        arrows: false,
        pauseOnHover: false,
        slidesToShow: 3,
        asNavFor: ".txtSlide",
        swipeToSlide: true,
    });

    $('.arrow i:nth-child(1)').on('click', function () {
        $('.faceSlide').slick('slickPrev')
    });

    $('.arrow i:nth-child(2)').on('click', function () {
        $('.faceSlide').slick('slickNext')
    });

});

const ROLLING_BOX = document.querySelector('.box .txtbox');
window.addEventListener('scroll', function () {
    let sct = window.scrollY;
    ROLLING_BOX.style.transform = 'rotate(' + sct / 2 + 'deg)';
});

function 회전문자(word) {
    const words = [...word].map(el => '<span>' + el + '</span>').join('');
    ROLLING_BOX.innerHTML = words;
    const SPAN = [...ROLLING_BOX.children];
    SPAN.forEach((el, idx) => {
        el.style.transform = 'translateX(-50%) rotate(' + idx * (360 / SPAN.length) + 'deg)'
    })
}
회전문자('scroll scroll  Good  ');