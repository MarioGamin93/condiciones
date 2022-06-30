const img = document.getElementById('img');
let = imgClick = false;


img.addEventListener('click', (e) => {
    if (!imgClick){
        e.target.classList.add('border');
        imgClick = true;
    }else{
        e.target.classList.remove('border');
        imgClick = false
    }
})
             

