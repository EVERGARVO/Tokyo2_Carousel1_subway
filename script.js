let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const currentIndexDisplay = document.getElementById('current-index');
const totalItemsDisplay = document.getElementById('total-items');

totalItemsDisplay.textContent = totalItems;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
  updateCarouselInfo();
}

function updateCarouselInfo() {
  currentIndexDisplay.textContent = currentIndex + 1;
}

// 초기화 함수 호출
updateCarouselInfo();

// 다크모드와 라이트모드를 감지하여 클래스 적용
function applyColorScheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
}

// 초기 모드 적용
applyColorScheme();

// 모드 변경 감지
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyColorScheme);
