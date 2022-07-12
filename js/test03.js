$(function () {
    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        puaseOnHover: false,
    });
})

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
회전문자('scroll scroll scroll ');