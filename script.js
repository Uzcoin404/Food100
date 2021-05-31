// Level

const lvl = document.querySelector('.level');

rec()
function rec(count = 1, speed = 30){

    lvl.innerHTML = count

    if (count > 50) {
        
        speed = 100
    }
    if (count > 75) {

        speed = 200
    }
    if (count > 90) {
        
        speed = 500
    }

    if (count != 100) {
        
        setTimeout(() =>
            rec(++count), speed
        )
    }
}

// Product objects

const product = {

    gamb: {
        name: 'Gamburger',
        amount: 0,
        price: 10000,
        caloria: 100, 
        get prc(){
            return this.amount * this.price
        },
        get calr(){
            return this.amount * this.caloria
        }
    },
    
    fresh: {
        name: 'Gamburger-fresh',
        amount: 0,
        price: 20500,
        caloria: 205, 
        get prc(){
            return this.amount * this.price
        },
        get calr(){
            return this.amount * this.caloria
        }
    },

    combo: {
        name: 'fresh-combo',
        amount: 0,
        price: 31900,
        caloria: 319, 
        get prc(){
            return this.amount * this.price
        },
        get calr(){
            return this.amount * this.caloria
        }
    }
}

// Product Calculate

const plsMnsBtn = document.querySelectorAll('#cardBtn');

for (let i = 0; i < plsMnsBtn.length; i++) {
    
    plsMnsBtn[i].addEventListener('click', function(){
        
        plsOrMns(this);
    });
    
}    

function plsOrMns(element){
    
    const card = element.closest('.card'),
        cardId = card.getAttribute('id'),
    
        input = card.querySelector('.input'),

        price = card.querySelector('.price'),
        caloria = card.querySelector('.caloria'),

        elmSym = element.getAttribute('data-symbol');

    if (elmSym == '+') {

        product[cardId].amount++
    }
    else if(elmSym == '-' && product[cardId].amount > 0){

        product[cardId].amount--
    }

    input.innerHTML = product[cardId].amount
    price.innerHTML = product[cardId].prc
    caloria.innerHTML = product[cardId].calr

    document.querySelector('.gamb__numb').innerHTML = product.gamb.amount
    document.querySelector('.fresh__numb').innerHTML = product.fresh.amount
    document.querySelector('.combo__numb').innerHTML = product.combo.amount

    let ttl = product.gamb.amount + product.fresh.amount + product.combo.amount
    document.querySelector('.total').innerHTML = ttl

    let ttlPrc = product.gamb.prc + product.fresh.prc + product.combo.prc
    document.querySelector('.purchase').innerHTML = ttlPrc
}


// Order

const delv = document.querySelector('.delivery'),
    order = document.querySelector('.order__blog'),
    cancel = document.querySelector('.fas.fa-times'),
    pay = document.querySelector('.pay__button');

delv.addEventListener('click', function(){
    order.classList.add('show')
});

cancel.addEventListener('click', function(){
    order.classList.remove('show')
});

pay.addEventListener('click', function(){
    order.classList.remove('show')
    document.querySelector('.pay__info').classList.add('show')
    rate.classList.add('show')
});
document.querySelector('#times').addEventListener('click', function(){
    document.querySelector('.pay__info').classList.remove('show')
});


// Delivery button

delv.addEventListener('click', function(e){
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    // ripples.style.top = y + 'px';

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    },500); 
});

// Slider rate blog

const slider = document.querySelector('.slider input');
const thumb = document.querySelector('.slider .thumb');
const progres = document.querySelector('.slider .progres-bar');
const slideIcon = document.querySelector('#slideIcon');
const rate = document.querySelector('.rate__blog');
const sendBtn = document.querySelector('.send__button');

slider.oninput = ()=>{

    let value = slider.value
    thumb.style.left = value + '%';
    progres.style.width = value + '%';

    if (value < 20) {
        slideIcon.style.marginLeft = '0px';
    }
    if (value >= 20) {
        slideIcon.style.marginLeft = '-20%';
    }
    if (value >= 40) {
        slideIcon.style.marginLeft = '-40%';
    }
    if (value >= 60) {
        slideIcon.style.marginLeft = '-60%';
    }
    if (value >= 80) {
        slideIcon.style.marginLeft = '-80%';
    }
}

sendBtn.addEventListener('click', function(){

    rate.classList.remove('show');
});

// Counter-up footer

$(document).ready(function(){

    $(".box__numb").counterUp({
        // delay: 10,
        time: 1000
    });

});