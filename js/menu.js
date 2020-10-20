const menuIcon = document.querySelector('.menu');
const menuNav = document.querySelector('.div-bar');


console.log(menuIcon)
console.log(menuNav)

menuIcon.addEventListener('click',()=>{
    menuNav.classList.toggle('move')
})

window.addEventListener('click', e=>{
    if (menuNav.classList.contains('move') && e.target != menuNav && e.target != menuIcon){
        menuNav.classList.toggle('move')
    }
})