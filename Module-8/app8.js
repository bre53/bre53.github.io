const coverface = document.querySelector('.closed');
const openface = document.querySelector('.open');

//add event listener
coverface.addEventListener('click', ()=> {
    if(openface.classList.contains ('open')) {
        openface.classList.add('active');
        coverface.classList.remove('active');
    }
})

openface.addEventListener('click', ()=> {
    if(coverface.classList.contains ('closed')) {
        coverface.classList.add('active');
        openface.classList.remove('active');
    }
})