'use script';

const galleryLi = $('.gallery>ul>li');
const btnArrow = $('.center-btn span.arrow');
const itemsLi = $('.items>ul>li');
// console.log(btnArrow);


const arrBg = [];
// $.each(galleryLi, function (idx) {
//     $(this).eq(idx).css('background', `url(img/bg${idx}.jpg) no-repeat 50% /cover`);
// });

// galleryLi.each(function (idx) {
//     $(this).eq(idx).css('background', `url(img/bg${idx}.jpg) no-repeat 50% /cover`);
// });

// galleryLi.each((idx)=> {
//     $(this).eq(idx).css('background', `url(img/bg${idx}.jpg) no-repeat 50% /cover`);
// });

for (let i = 0; i < galleryLi.length; i++) {
    arrBg.push(`url(img/bg${i}.jpg) no-repeat 50% /cover`);
    galleryLi.eq(i).css('background', arrBg[i]);
};


let i = -1;

const autoGallery = () => {
    i++;
    // console.log(i);
    galleryLi.eq(i).fadeIn().siblings().fadeOut();
    itemsLi.eq(i).addClass('on').siblings().removeClass('on');
    if (i >= galleryLi.length - 1) i = -1;
};

// const autoGallery2 = () => {

//     // console.log(i);
//     galleryLi.eq(i).fadeIn().siblings().fadeOut();
//     itemsLi.eq(i).addClass('on').siblings().removeClass('on');
//     if (i <= 0) i = galleryLi.length;
//     i--;
// };

let setIn = setInterval(autoGallery, 3000);


itemsLi.hover(
    function (e) {
        clearInterval(setIn);
    },
    function (e) {
        setIn = setInterval(autoGallery, 3000);
    }
);

btnArrow.hover(
    function (e) {
        clearInterval(setIn);
    },
    function (e) {
        setIn = setInterval(autoGallery, 1000);
    }
);


// itemsLi.on('mouseover', function () {
//     clearInterval(setIn);
// });
// itemsLi.on('mouseout', () => {
//     setIn = setInterval(autoGallery, 1000)
// });

itemsLi.on('click', function (idx, el) {
    const _idx = $(this).index();
    const _this = $(this);
    _this.addClass('on').siblings().removeClass('on');
    i = _idx;
    galleryLi.eq(_idx).fadeIn().siblings().fadeOut();
});

// btnArrow.each(function (idx) {
//     const _index = galleryLi.index();
//     i = _index;
//     if (idx == 0) {
//         $(this).on('click', function (idx, el) {
//             i++;
//             galleryLi.eq(i).fadeIn().siblings().fadeOut();
//             console.log(i);
//             if (i >= galleryLi.length - 1) i = -1;
//             itemsLi.eq(i).addClass('on').siblings().removeClass('on');
//         });
//     } else {
//         $(this).on('click', function (idx, el) {
//             i--;
//             galleryLi.eq(i).fadeIn().siblings().fadeOut();
//             itemsLi.eq(i).addClass('on').siblings().removeClass('on');
//             if (i < 0) i = galleryLi.length - 1;
//             console.log(i);
//         });
//     };
// });


btnArrow.on('click', function () {
    const _this_index = $(this).index();
    if (_this_index == 0) {
        i--;
        galleryLi.eq(i).fadeIn().siblings().fadeOut();
        itemsLi.eq(i).addClass('on').siblings().removeClass('on');
        if (i < 0) i = galleryLi.length - 1;
        console.log(i);
    } else {
        i++;
        galleryLi.eq(i).fadeIn().siblings().fadeOut();
        itemsLi.eq(i).addClass('on').siblings().removeClass('on');
        console.log(i);
        if (i >= galleryLi.length - 1) i = -1;
    };
});

(() => {
    autoGallery();
})();