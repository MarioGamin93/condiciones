const form = document.getElementById('form');
const text_stickers = document.getElementById('text');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let sticker1 = document.getElementById('number1').value;
    let sticker2 = document.getElementById('number2').value;
    let sticker3 = document.getElementById('number3').value;
    let total = Number(sticker1)+Number(sticker2)+Number(sticker3);
    
    if(total === 0){
        text_stickers.textContent = (`Debes ingresar una cantidad`);
    }else if(total <= 10){
        text_stickers.textContent = (`Llevas ${total} sticker`);
    }else{
        text_stickers.textContent = ('Llevas demasiados stickers');
    }
})