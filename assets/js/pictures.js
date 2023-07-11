const items = document.querySelectorAll('.item');

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });

  const initialWidth = parseFloat(window.getComputedStyle(item).getPropertyValue('width'));
  const expandedWidth = initialWidth * 1.1; // Increase the width by 10% (adjust the multiplier as desired)

  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? `${250}px` : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  });
};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener('click', () => expand(item, i));
});
