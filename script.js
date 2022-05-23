const btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#menu');

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle);