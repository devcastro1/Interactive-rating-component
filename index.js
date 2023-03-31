const btn = document.querySelector('.btn');

const card2 = document.querySelector('.card2')

const card1 = document.querySelector('.card1')

const base = document.querySelectorAll('.base')

const rating = document.getElementById('rating')




btn.addEventListener('click', () => {
    card2.classList.remove('hidden');
    card1.style.display = 'none'



})


base.forEach((rate) => {
    rate.addEventListener('click', () =>{
        rating.innerHTML = rate.innerHTML
    })
})







