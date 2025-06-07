// шторка

document.addEventListener('DOMContentLoaded', () => {
  const curtain = document.getElementById('curtain');
  const mainContent = document.getElementById('main-content');

  curtain.addEventListener('click', () => {
    curtain.classList.add('up');

    // После окончания анимации скрываем шторку и показываем основное содержимое
    curtain.addEventListener('animationend', () => {
      curtain.style.display = 'none';
      mainContent.classList.remove('hidden');
    }, { once: true });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const curtain = document.getElementById('curtain');
  const mainContent = document.getElementById('main-content');
  const backBtn = document.getElementById('backBtn');

  curtain.addEventListener('click', () => {
    curtain.classList.add('up');
    curtain.addEventListener('animationend', () => {
      curtain.style.display = 'none';
      mainContent.classList.remove('hidden');
    }, { once: true });
  });

  backBtn.addEventListener('click', () => {
    // Показываем шторку
    curtain.style.display = 'flex';
    // Убираем класс анимации подъёма
    curtain.classList.remove('up');
    // Скрываем основное содержимое
    mainContent.classList.add('hidden');
  });
});

// слайд

document.querySelectorAll('.slider').forEach(slider => {
  const slidesContainer = slider.querySelector('.slides');
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let currentIndex = 0;

  // Функция обновления видимого слайда
  function updateSlide() {
    // Вычисляем смещение для контейнера
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }

  // Обработчик кнопки "Назад"
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlide();
  });

  // Обработчик кнопки "Вперед"
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlide();
  });

  // Инициализация стилей для плавного перехода
  slidesContainer.style.display = 'flex';
  slidesContainer.style.transition = 'transform 0.4s ease-in-out';
  slidesContainer.style.width = `${slides.length * 100}%`;

  slides.forEach(slide => {
    slide.style.minWidth = `${100 / slides.length}%`;
  });

  // Показываем первый слайд при загрузке
  updateSlide();
});

