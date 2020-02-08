const reveal = gsap.timeline();
const loader = false;

if (loader) {
  reveal.to('.loader', {
    duration: 0.8,
    y: '0%',
    delay: 0.4,
    ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
  });

  reveal.to(
    '.loader__icon__inner',
    {
      duration: 0.8,
      y: 0,
      delay: 0.4,
      ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
    },
    '-=0.2'
  );

  reveal.to('.loader', {
    duration: 1,
    delay: 2,
    y: '-100%',
    ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.942,0.092,1,1"'
  });
}
reveal.to('.header-borders p', {
  autoAlpha: 0.2,
  x: 0,
  duration: 0.5,
  stagger: 0.3,
  delay: 0.3,
  ease: 'power2.ease'
});

reveal.to(
  'h1 span',
  {
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.2,
    ease: 'power2.ease'
  },
  '-=1'
);

reveal.to(
  '.header-text p span',
  {
    y: 0,
    duration: 0.5,
    autoAlpha: 0.7,
    ease: 'power2.ease'
  },
  '-=0.2'
);

const menu = document.querySelector('nav button');

let active = false;

menu.addEventListener('click', function() {
  if (!active) {
    var tl = gsap.timeline();
    tl.to('.header-text', { duration: 0.3, autoAlpha: 0, x: 20 });

    document.querySelector('canvas').style.filter = 'blur(5px)';

    tl.to('.menu-items', {
      autoAlpha: 1
    });

    tl.to('.menu-item--active', {
      x: '+=20',
      duration: 0.3,
      autoAlpha: 1,
      stagger: 0.2,
      ease: 'power2.inOut'
    });

    tl.to('.menu-item--inactive', {
      x: '+=20',
      duration: 0.3,
      autoAlpha: 0.4,
      stagger: 0.2,
      ease: 'power2.inOut'
    });

    gsap.to('.shadow-eyes', {
      duration: 0.3,
      autoAlpha: 0.6,
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
