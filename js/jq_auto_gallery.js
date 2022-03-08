'use script';

const galleryLi = $('.gallery>ul>li');
const gallery = $('.gallery');
const spanArrow = $('.center-btn span.arrow');
const itemsLi = $('.items>ul>li');
// console.log(spanArrow)

// let bg=[];
// for(let i=0;i<galleryLi.length;i++){
//     bg.push(`url(./img/tutor_img/bg${i}.jpg) no-repeat 50% /cover`);
//     galleryLi.eq(i).css('background',bg[i])
// }

galleryLi.each(function (idx) {
    $(this).css('background', `url(./img/tutor_img/bg${idx}.jpg) no-repeat 50% /cover`)
})

let i = -1;

function autoGallery() {
    if (i >= galleryLi.length - 1) i = -1;
    i++;
   galleryFunc(i);
    if (i >= galleryLi.length - 1) i = -1;
}

let setIn = setInterval(autoGallery, 2000);

spanArrow.hover(
    function (e) {
        clearInterval(setIn);
    },
    function (e) {
        setIn = setInterval(autoGallery, 2000);
    },
);

itemsLi.hover(
    function (e) {
        clearInterval(setIn);
    },
    function (e) {
        setIn = setInterval(autoGallery, 2000);
    },
);

spanArrow.on('click', function (idx, el) {
    const _idx = $(this).index();
    if (_idx == 1) {
        console.log(i);
        if (i >= galleryLi.length - 1) i = -1;
        i++;
        galleryFunc(i);
    } else if (_idx == 0) {
        console.log(i);
        if (i <= 0) i = galleryLi.length;
        i--;
        galleryFunc(i);
    };
});

itemsLi.on('click', function () {
    const _ind = $(this).index();
    galleryFunc(_ind);
    i=_ind;
});

function galleryFunc(idx){
    const gap = galleryLi.eq(2).offset().left - galleryLi.eq(1).offset().left;
    const goto = -gap * idx;
    gallery.animate({
        left: goto
    }, 600);
    itemsLi.eq(idx).addClass('on').siblings().removeClass('on');
}

(() => {
    autoGallery();
})();

// http://nglvision@nglvision.dothome.co.kr/jq_animate_08.03.2022/jq_auto_gallery.html