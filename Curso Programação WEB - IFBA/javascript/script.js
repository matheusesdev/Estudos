const sum = () =>{
    const number = document.getElementById('number')
    number.innerText ++;
    return number.innerText;
    
}

function subtraction (){
    const number = document.getElementById('number')
    number.innerText --;
    return number.innerText;
}
function reset (){
    const reset = document.getElementById('reset')
    number.innerText = 0;
    return number.innerText;
}

