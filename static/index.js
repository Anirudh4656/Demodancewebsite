/*******slider */
const btn = document.querySelector('.btn2');
const container = document.querySelector('.container2');
const close = document.querySelector('.close');

btn.addEventListener('click',()=>{
    container.classList.add('show');
})
close.addEventListener('click',()=>{
    container.classList.remove('show');
})