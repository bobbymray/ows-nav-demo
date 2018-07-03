var navigation     = document.getElementById('navigation');
var navToggle      = document.getElementById('nav-toggle');
var navToggleImage = document.getElementById('nav-toggle__image');
var body           = document.querySelector('body');

navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    navigation.classList.toggle('show-nav');

    if (navigation.classList.contains('show-nav')) {
        navToggleImage.src = '../icons/close.png';
    } else {
        navToggleImage.src = '../icons/menu.png';
    }
});

body.addEventListener('click', function(e) {
    if (e.target !== navToggleImage && navigation.classList.contains('show-nav') && !navigation.contains(e.target)) {
        navigation.classList.toggle('show-nav');
        navToggleImage.src = '../icons/menu.png';
    }
});