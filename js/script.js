// Активация мобильного меню
document.querySelector('.mobile-menu').addEventListener('click', function(e) {
  e.preventDefault();
  
  document.querySelector('.mobile-nav').classList.toggle('mobile-nav--active');
  e.target.classList.toggle('mobile-menu--active');
});

let teamAccordeon = document.querySelectorAll('.team-accordeon__item');

// Отображение описания участника команды
teamAccordeon.forEach(elem => {
  elem.addEventListener('click', function(e) {    
    const curItem = e.currentTarget;

    if (curItem.classList.contains('team-accordeon__item--active')) {      
      closeTeamItems();
    } else {
      closeTeamItems();
      curItem.classList.add('team-accordeon__item--active');
    }
  });
});

// Закрытие всех блоков с описаниями участников команды
function closeTeamItems() {
  let openedTeamItems = document.querySelectorAll('.team-accordeon__item--active');

  openedTeamItems.forEach(elem => {
    elem.classList.remove('team-accordeon__item--active');
  });
}

let foodMenuAccordeon = document.querySelectorAll('.food-menu-accordeon__item');

// Отображение пункта меню
foodMenuAccordeon.forEach(elem => {
  elem.addEventListener('click', function(e) {    
    const curItem = e.currentTarget;

    if (curItem.classList.contains('food-menu-accordeon__item--active')) {      
      closeFoodMenuItems();
    } else {
      closeFoodMenuItems();
      curItem.classList.add('food-menu-accordeon__item--active');
    }
  });
});

// Закрытие всех блоков с описаниями меню
function closeFoodMenuItems() {
  let openedTeamItems = document.querySelectorAll('.food-menu-accordeon__item--active');

  openedTeamItems.forEach(elem => {
    elem.classList.remove('food-menu-accordeon__item--active');
  });
}

// Слайдер
step = 940;
rightValue = 0;
slideCount = document.querySelectorAll('.slider__slide').length;
maxRightValue = step * (slideCount - 1);

let sliderRight = document.querySelector('.slider__control--next');
let sliderLeft = document.querySelector('.slider__control--prev');

sliderRight.addEventListener('click', e => {
  e.preventDefault();

  if (rightValue >= maxRightValue) {
    return false;
  }

  rightValue += step;
  document.querySelector('.slider__wrapper').style.right = `${rightValue}px`;  
});

sliderLeft.addEventListener('click', e => {
  e.preventDefault();

  if (rightValue <= 0) {
    return false;
  }

  rightValue -= step;

  document.querySelector('.slider__wrapper').style.right = `${rightValue}px`;  
});

// Вызов модального окна с отзывом
document.querySelectorAll('.review__link, .review__link-mobile').forEach(elem => {
  elem.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.popup--reviews').classList.add('opened');
  });
});

// Закрытие модального окна
document.querySelector('.popup__close').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.popup').classList.remove('opened');
});

// Отправка формы доставки
document.querySelector('#form-delivery').addEventListener('submit', e => {
  e.preventDefault();
  
  document.querySelector('.popup__description--delivery').textContent = '';

  let name = document.querySelector('#name').value;
  let phone = document.querySelector('#phone').value;
  let comment = document.querySelector('#comment').value;

  let formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("comment", comment);
  formData.append("to", "test@test.ru");

  let req = new XMLHttpRequest();
  req.open('POST', 'https://webdev-api.loftschool.com/sendmail', true);
  req.onload = function() {
    let response = JSON.parse(req.response);
    let message = response.message;

    document.querySelector('.popup__description--delivery').textContent = message;
    document.querySelector('.popup--delivery').classList.add('opened');
  };

  req.send(formData);
});

// Закрытие модального окна
document.querySelector('.popup__close-link').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.popup--delivery').classList.remove('opened');
});