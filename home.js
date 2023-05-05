const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide-img');
const comingSoon = document.querySelector('.comingSoon');
const nowShowing = document.querySelector('.nowShowing');
const jonWik = document.getElementById('poster8');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImg.length - 1)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImg[counter].id === 'last-clone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if(carouselImg[counter].id === 'first-clone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});

comingSoon.addEventListener('click', function(){
    let posterRow = document.querySelector('.poster-row');

    posterRow.classList.add('poster-transition');

    setTimeout(function(){
        let posterRowImg = document.querySelectorAll('.poster-row img');

        for(let i = 0; i < posterRowImg.length; i++){
            posterRowImg[i].src = 'assetsWebFinal/comingPoster' + (i+1) + '.png';
        }

        posterRow.classList.remove('poster-transition');
    }, 300);
});

nowShowing.addEventListener('click', function(){
    let posterRowImg = document.querySelectorAll('.poster-row img');

    for(let i = 0; i < posterRowImg.length; i++){
        posterRowImg[i].src = 'assetsWebFinal/poster' + (i+1) + '.png';
    }
})


jonWik.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      window.location.href = 'movie_detail2.html';
    }
});