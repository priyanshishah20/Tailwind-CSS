const initApp = ()=> {
    const hamBurger = document.getElementById('mobile-hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = ()=> {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        hamBurger.classList.toggle('toggle-btn');
    }

    hamBurger.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}
document.addEventListener('DOMContentLoaded', initApp);