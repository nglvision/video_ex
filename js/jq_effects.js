'use script';


const effectLi = $('.effect ul li');
const effectBox = $('.effect-box');
console.log(effectLi);

effectLi.eq(1).on('click', () => {
    // effectBox.hide(2000, ()=>{
    //     alert('hide');
    // });
    effectBox.hide(1000);
});
effectLi.eq(0).on('click', () => {
    effectBox.show(1000);
});

effectLi.eq(2).on('click', () => {
    effectBox.toggle(500);
});

effectLi.eq(3).on('click', (e) => {
    effectBox.slideUp(500);
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.target===e.currentTarget);
});

effectLi.eq(4).on('click', () => {
    effectBox.slideDown(500);
});

effectLi.eq(5).on('click', () => {
    effectBox.slideToggle(500);
});

effectLi.eq(6).on('click', () => {
    effectBox.fadeIn(1000);
});

effectLi.eq(7).on('click', () => {
    effectBox.fadeOut(1000);
});

effectLi.eq(8).on('click', () => {
    effectBox.fadeToggle(1000);
});

effectLi.eq(8).on('click', () => {
    effectBox.fadeToggle(1000);
});

