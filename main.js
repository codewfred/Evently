document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburgerMenu.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Simple animation on scroll
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.6s ease-out";
    }
  });
});

const accordionBtns = document.querySelectorAll(".accordion-button");

accordionBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});