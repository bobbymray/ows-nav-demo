var navigation     = document.getElementById('navigation');
var navToggle      = document.getElementById('nav-toggle');
var navToggleImage = document.getElementById('nav-toggle__image');
var body           = document.querySelector('body');

navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    navigation.classList.toggle('show-nav');

    if (navigation.classList.contains('show-nav')) {
        navToggleImage.src = 'close.png';
    } else {
        navToggleImage.src = 'menu.png';
    }
});