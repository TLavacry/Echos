const carousel = document.getElementById("carousel");
const items = carousel.children;
const itemHeight = 120; // 100px + 20px margin
const containerHeight = 320;
let currentIndex = 0;
let isScrolling = false;

function updateCarousel() {
  const offset = (containerHeight - itemHeight) / 2;
  carousel.style.transform = `translateY(${offset - currentIndex * itemHeight}px)`;

  Array.from(items).forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
  });
}

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0) {
    currentIndex = (currentIndex + 1) % items.length;
  } else if (e.deltaY < 0) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }

  updateCarousel();
  isScrolling = true;

  setTimeout(() => {
    isScrolling = false;
  }, 300);
});

updateCarousel();


// Effet menu + étincelles
const menuBtn = document.getElementById('menuBtn');
document.addEventListener('mousemove', (e) => {
  const rect = menuBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;
  const distance = Math.hypot(dx, dy);
  if (distance < 150) {
    menuBtn.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
  } else {
    menuBtn.style.transform = 'translate(0, 0)';
  }

  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 40 + 10;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;
    sparkle.style.setProperty('--x', `${offsetX}px`);
    sparkle.style.setProperty('--y', `${offsetY}px`);
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }
});

const menuOverlay = document.getElementById('menuOverlay');
const menuContent = document.getElementById('menuContent');

// Ouvrir le menu
menuBtn.addEventListener('click', () => {
  menuOverlay.style.display = 'flex';
});

// Fermer si clic en dehors du menu
menuOverlay.addEventListener('click', (e) => {
  if (!menuContent.contains(e.target)) {
    menuOverlay.style.display = 'none';
  }
});
