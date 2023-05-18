// функция добавляет CSS-класс, который и осуществляет анимацию
const scrollImations = (entries, observer) => {
  entries.forEach((entry) => {
    // анимируем, если элемент целиком попадает в отслеживаемую область
    if(entry.isIntersecting && entry.intersectionRatio >= 0.35) {
      entry.target.classList.add('box--visible');
    } else {
/*       entry.target.classList.remove('box--visible'); */
    }
  });
}

// создаём обсервер с параметрами
const options = {
  threshold: 0.35,
};
const observer = new IntersectionObserver(scrollImations, options);

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  observer.observe(box);
	});
	