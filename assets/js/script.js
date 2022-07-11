"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventlistener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast modal
const toast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

toastCloseBtn.addEventListener("click", () => toast.classList.add("closed"));

// Mobile Menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);

const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const mobileMenuCloseFunc = () => {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };
  mobileMenuOpenBtn[i].addEventListener("click", () => {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// Accordion
const accordionBtns = document.querySelectorAll("[data-accordion-btn]");
const accordionMenus = document.querySelectorAll("[data-accordion-menu]");
const accordionLists = document.querySelectorAll("[data-accordion]");

const accordion = [...accordionBtns, ...accordionMenus];

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      accordionLists[i].classList.remove("active");
    } else {
      accordion.forEach((accordion, index) => {
        if (accordion.classList.contains("active") && index !== i) {
          accordion.classList.remove("active");
          accordionLists[index].classList.remove("active");
        }
      });
      this.classList.add("active");
      accordionLists[i].classList.add("active");
    }
  });
}
