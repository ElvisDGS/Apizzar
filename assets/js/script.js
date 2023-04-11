let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

document.documentElement.style.overflowY = 'scroll';

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader,1800);
}

window.addEventListener('load', function(){
    fadeOut();
});
