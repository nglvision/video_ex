'use script';


const secLi = $('.sec-con>ul>li');
const popUp = $('.popUp');
const popUpCon = $('.popUp>.popUp-con');
const spanX=$('.popUp-con>span');


secLi.on('click', function () {
    const imgSrc = $(this).find('img').attr('src');
    const imgAlt = $(this).find('img').attr('alt');
    const liP = $(this).find('p').text();
    popUpCon.find('img').attr({
        'src': imgSrc,
        'alt': imgAlt
    });
    popUpCon.find('p').text(liP);
    // popUp.fadeIn(400,function(){
    //     popUp.css('display', 'flex');
    // });
    popUp.fadeIn().css('display', 'flex');
});

spanX.on('click', function () {
    popUp.fadeOut();
});