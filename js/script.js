// Активация мобильного меню
document.querySelector('.mobile-menu').addEventListener('click', function(e) {
  e.preventDefault();
  
  document.querySelector('.mobile-nav').classList.toggle('mobile-nav--active');
  e.target.classList.toggle('mobile-menu--active');
});