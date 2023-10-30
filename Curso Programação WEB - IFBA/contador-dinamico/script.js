let allowNegative = true;
const sum = () =>{
    const number = document.getElementById('number')
    number.innerText ++;

    if(hasPositive(number.innerText)){
        number.style.color = 'green'
}

applyParOrImpar(number.innerText)

if(Number(number.innerText) === 0){
    number.style.color = 'black'
    document.getElementById('text-number').style.display = 'none'
}
}

function subtraction (){
    const number = document.getElementById('number')
    if(allowNegative || canSubtract(number.innerText)){
    number.innerText --;

    if (hasNegative(number.innerText)){
        number.style.color = 'red'   
}


applyParOrImpar(number.innerText)

if(Number(number.innerText) == 0) {
    number.style.color = 'black'
    document.getElementById('text-number').style.display = 'none'
}
    }
}
function canSubtract(number){
    return number > 0;
}

function hasPositive(number){
    return (number < 0 ? false : true);
}

function hasNegative(number){
    return (number > 0 ? false : true);
}

function applyParOrImpar(number){
    if(hasPar(number)){
        document.getElementById('text-number').innerText = number + ' é um  número par'
        document.getElementById('text-number').style.display = 'block'

    } else{
        document.getElementById('text-number').style.display='none'
    }
}
function hasPar(number){
    return Number(number) % 2 === 0 ? true : false;
}

function toggleNegative(){
    const number = document.getElementById('number');
    allowNegative = !allowNegative;

    if(!allowNegative && Number (number.innerText) < 0 ){
        document.getElementById('text-number').style.display = 'none'
        number.style.color = 'black'
        number.innerText = 0;
    }
   const toggleNegativeBtn = document.getElementById('toggleBtn');
   toggleNegativeBtn.classList.toggle('active', !allowNegative);
}



function reset (){
    const reset = document.getElementById('reset')
    number.innerText = 0;
    number.style.color = 'black';
    document.getElementById('text-number').style.display = 'none';
    
}

