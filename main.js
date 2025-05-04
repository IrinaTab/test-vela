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

// Адаптив
const burgerButton = document.querySelector('.burger__button');
const crossButton = document.querySelector('.burger__button_cross');
const content = document.querySelector('.content');
const burgerWrapper = document.querySelector('.burger__wrapper');

burgerButton.addEventListener('click', function() {
  burgerButton.style.display = 'none'; // Скрываем первую кнопку
  crossButton.style.display = 'block'; // Показываем вторую кнопку
  content.style.display = 'none'; // Скрываем блок .content
  burgerWrapper.style.display = 'block'; // Показываем блок .burger__wrapper
});

crossButton.addEventListener('click', function() {
  burgerButton.style.display = 'block'; // Показываем первую кнопку
  crossButton.style.display = 'none'; // Скрываем вторую кнопку
  content.style.display = 'block'; // Показываем блок .content
  burgerWrapper.style.display = 'none'; // Скрываем блок .burger__wrapper
});
