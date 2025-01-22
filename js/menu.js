
const menuRight = document.querySelector('.menu-right');
const menuBurger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.nav-menu-mobile a');

function showHideMenu() {
    document.body.classList.toggle('overflow-hidden');
    menuRight.classList.toggle('opened');
    menuBurger.classList.toggle('opened');
    overlay.classList.toggle('shown');


    if (menuRight.classList.contains('hide-nav') ||
        (!menuRight.classList.contains('show-nav') && !menuRight.classList.contains('hide-nav'))
    ) {
        menuRight.classList.remove('hide-nav');
        menuRight.classList.add('show-nav');
    }
    else {
        menuRight.classList.remove('show-nav');
        menuRight.classList.add('hide-nav');
    }

    if (menuBurger.classList.contains('hide-burger') ||
        (!menuBurger.classList.contains('show-burger') && !menuBurger.classList.contains('hide-burger'))
    ) {
        menuBurger.classList.remove('hide-burger');
        menuBurger.classList.add('show-burger');
    }
    else {
        menuBurger.classList.remove('show-burger');
        menuBurger.classList.add('hide-burger');
    }
}

menuBurger.onclick = function () {
    showHideMenu();
};

menuLinks.forEach(link => {
    link.addEventListener('click', showHideMenu);
});

overlay.onclick = function () {
    showHideMenu();
};

document.addEventListener('keydown', function(e) {
	if( e.code === 'Escape' ){
		document.body.classList.remove('overflow-hidden');
        menuRight.classList.remove('opened');
        menuBurger.classList.remove('opened');
        overlay.classList.remove('shown');
        menuBurger.classList.remove('show-burger');
        menuBurger.classList.add('hide-burger');
        menuRight.classList.remove('show-nav');
        menuRight.classList.add('hide-nav');
	}
});

window.addEventListener('resize', () => {
    if (document.documentElement.scrollWidth <= 890) {
        menuRight.classList.remove('hide-nav');
        menuBurger.classList.remove('hide-burger');
    }
});

