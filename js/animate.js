'use script';

// menu
const btn = $('.btn-menu');
const leftMenu = $('.left-menu');



let toggleKey = 0;

btn.on('click', function () {
    console.log(toggleKey)

    if (toggleKey === 0) {
        $(this).find('img').attr('src', `./img/m1.png`);
        leftMenu.animate({
            left: 0
        }, 200)
        toggleKey = 1;
    } else if (toggleKey === 1) {
        $(this).find('img').attr('src', `./img/m0.png`);
        leftMenu.animate({
            left: '-100%'
        }, 200)
        toggleKey = 0;
    };
});


// scroll
const rightLi = $('.right-menu>ul>li');
const section = $('.sections .section');
const section2H1 = $('.section.sec2 h1');

// // $('html').animate({scrollTop:200})
// // $('html,body').animate({scrollTop:200})

rightLi.on('click', function () {
    const _ind = $(this).index();
    const secTop = section.eq(_ind).offset().top;
    $('html').stop().animate({
        scrollTop: secTop,
    }, 500);
    $(this).addClass('on').siblings().removeClass('on');

    if(_ind==1){
        section2H1.animate({left:300}, 1000);
    }
});

const gnbLi = $('.left-menu .gnb>ul>li');
const ulSub = ('ul.sub')

gnbLi.on('click', function (idx) {
    _thisSub = $(this).find('ul.sub');
    _siblingsSub = $(this).siblings().find('ul.sub');
    _thisSub.slideToggle();
    _siblingsSub.slideUp();
})