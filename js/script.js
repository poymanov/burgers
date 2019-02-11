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