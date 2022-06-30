const form = document.getElementById('form');
const text_password = document.getElementById('text');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let numbero1 = document.getElementById('number1').value;
    let numbero2 = document.getElementById('number2').value;
    let numbero3 = document.getElementById('number3').value;
    
    if(numbero1 == 9 && numbero2 == 1 && numbero3 == 1){
        text_password.textContent = 'Password 1 correcto';
    } else if(numbero1 == 7 && numbero2 == 1 && numbero3 == 4){
        text_password.textContent  = 'Password 2 correcto';
    }else{
        text_password.textContent  = 'Password incorrecto';
    }
})