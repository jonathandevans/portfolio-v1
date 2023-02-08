"use strict";

/**
 * Used to setup the click events for the mobile navigation.
 */
function mobileNavSetup() {
    const mobileNavToggle = document.getElementById("mobile-nav__toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const backdrop = document.getElementById("backdrop");
    const buttons = document.getElementsByClassName("mobile-nav__item");

    mobileNavToggle.addEventListener("click", toggleMobileNav);
    backdrop.addEventListener("click", toggleMobileNav);
    for (let b of buttons) b.addEventListener("click", toggleMobileNav);

    /**
     * Used to toggle the classes to show/hide the mobile navigation.
     */
    function toggleMobileNav() {
        mobileNav.classList.toggle("mobile-nav--open");
        backdrop.classList.toggle("backdrop--open");
    }
}

/**
 * Used to add javascript functionality to the page when loaded.
 */
function generatePage() {
    mobileNavSetup();
}

document.body.onload = generatePage();