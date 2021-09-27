const btn = document.querySelector('.mobile-btn i');
btn.addEventListener('click', ()=>{
    let nav = document.querySelector('header nav');
    nav.classList.toggle('ativo');
})