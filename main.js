let list = document.querySelectorAll('.list .item');
let carousel = document.querySelector('.carousel');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let mockup = document.querySelector('.mockup');

let count = list.length;
let active = 0;
let leftMockup = 0;
let leftEachItem = 100 / (list.length - 1);

next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    leftMockup = leftMockup + leftEachItem;
    carousel.classList.remove('right');
    changeCarousel();
}

prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    leftMockup = leftMockup - leftEachItem;
    carousel.classList.add('right');
    changeCarousel();
}

function changeCarousel() {
    let hiddenOld = document.querySelector('.item.hidden');
    if (hiddenOld) hiddenOld.classList.remove('hidden');

    let activeOld = document.querySelector('.item.active');
    activeOld.classList.remove('active');
    activeOld.classList.add('hidden');

    list[active].classList.add('active');

    mockup.style.setProperty('--left', leftMockup + '%');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000);
}

let refreshInterval = setInterval(() => {
    next.click();
}, 3000);