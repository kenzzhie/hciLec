const popUp = document.querySelector('.popUp');
const overlay = document.querySelector('.overlay');
const pay = document.querySelector('.payBtn');
const payOpt = document.querySelectorAll('.payOpt');
const gopay = document.getElementById('gopay');
const masterCard = document.getElementById('masterCard');
const ovo = document.getElementById('ovo');
const dana = document.getElementById('dana');


gopay.addEventListener('click', function(){
    if(gopay.src.includes('assetsWebFinal/paymentAssets/payOpt1.png')){
        gopay.src = 'assetsWebFinal/paymentAssets/clickedOpt1.png';
    }else {
        gopay.src = 'assetsWebFinal/paymentAssets/payOpt1.png';
    }
})

masterCard.addEventListener('click', function(){
    if(masterCard.src.includes('assetsWebFinal/paymentAssets/payOpt2.png')){
        masterCard.src = 'assetsWebFinal/paymentAssets/clickedOpt2.png';
    }else {
        masterCard.src = 'assetsWebFinal/paymentAssets/payOpt2.png';
    }
})

ovo.addEventListener('click', function(){
    if(ovo.src.includes('assetsWebFinal/paymentAssets/payOpt3.png')){
        ovo.src = 'assetsWebFinal/paymentAssets/clickedOpt3.png';
    }else {
        ovo.src = 'assetsWebFinal/paymentAssets/payOpt3.png';
    }
})

dana.addEventListener('click', function(){
    if(dana.src.includes('assetsWebFinal/paymentAssets/payOpt4.png')){
        dana.src = 'assetsWebFinal/paymentAssets/clickedOpt4.png';
    }else {
        dana.src = 'assetsWebFinal/paymentAssets/payOpt4.png';
    }
})


pay.addEventListener('click', function(){
    popUp.style.display = 'block';
    overlay.style.display = 'block';
});

popUp.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Back') {
      popUp.style.display = 'none';
      overlay.style.display = 'none';
    }
});