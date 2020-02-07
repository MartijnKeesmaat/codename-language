import gsap from 'gsap';

const menu = document.querySelector('nav button');

let active = false;

menu.addEventListener('click', function() {
  if (!active) {
    var tl = gsap.timeline();
    tl.to('.header-text', { duration: 0.3, autoAlpha: 0, x: 20 });

    tl.to('.menu-item', {
      x: '+=20',
      duration: 0.3,
      autoAlpha: 1,
      stagger: 0.2,
      ease: 'power2.inOut'
    });
    active = !active;
  } else {
    var tl2 = gsap.timeline();
    tl2.to('.menu-item', {
      x: '+=0',
      duration: 0.3,
      autoAlpha: 0,
      stagger: 0.2,
      ease: 'power2.inOut'
    });

    tl2.to('.header-text', { delay: 0.2, duration: 0.3, autoAlpha: 1, x: 0 });
  }

  document.body.classList.toggle('menu-active');
});
