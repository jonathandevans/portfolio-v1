function mobileNavSetup() {
    const mobileNavToggle = document.getElementById("mobile-nav__toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const backdrop = document.getElementById("backdrop");
    const buttons = document.getElementsByClassName("mobile-nav__item");

    mobileNavToggle.addEventListener("click", toggleMobileNav);
    backdrop.addEventListener("click", toggleMobileNav);
    for (b of buttons) b.addEventListener("click", toggleMobileNav);

    function toggleMobileNav() {
        mobileNav.classList.toggle("mobile-nav--open");
        backdrop.classList.toggle("backdrop--open");
    }
}

mobileNavSetup();