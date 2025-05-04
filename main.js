const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu');

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('show');
});

const headerBtnHotDiscount = document.querySelector('.header__btn_hotdiscount');
const modWindow = document.querySelector('.modwindow');

headerBtnHotDiscount.addEventListener('click', function() {
    modWindow.classList.toggle('show');
});
