const mobileBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                dropdownMenu.classList.toggle('active');

                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('active');
                    }
                });
            }
        }
    });
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        const isClickInsideNav = navMenu && navMenu.contains(e.target);
        const isClickOnMenuBtn = mobileBtn && mobileBtn.contains(e.target);

        if (!isClickInsideNav && !isClickOnMenuBtn && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileBtn && mobileBtn.classList.remove('active');
        }
    }
});
