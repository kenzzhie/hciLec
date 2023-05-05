// const regis = document.getElementById('register');
function gantiRegister(){
    let containerRegister = document.getElementsByClassName('registerContainer')
    let containerLogin = document.getElementsByClassName('loginContainer')
    containerLogin[0].style.display = 'none'
    containerRegister[0].style.display = 'flex'
}

function gantiLogin(){
    let containerRegister = document.getElementsByClassName('registerContainer')
    let containerLogin = document.getElementsByClassName('loginContainer')
    containerLogin[0].style.display = 'flex'
    containerRegister[0].style.display = 'none'
}

// regis.addEventListener('click', function(){
//     console.log('tes');
//     containerLogin.style.display = 'none';
//     containerRegister.style.display = 'flex';
// })