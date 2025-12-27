//carousel//
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
};
prevButton.onclick = function(){
    showSlider('prev');
};
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

        //end carousel //

// mobile  view menu//
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuWrapper = document.querySelector('.menu-wrapper');

    if (menuToggle && menuWrapper) {
        menuToggle.addEventListener('click', function() {
            menuWrapper.classList.toggle('active');
        });
    }
});

////
 function closeSignInCard() {
            const card = document.getElementById('sign-in-card');
            if (card) {
                
                card.style.display = 'none';
                console.log('Sign-in card closed/hidden.');
            }
            
            window.history.back();
        }

// cart //
function toggleCart() {
            const cart = document.getElementById('cart-sidebar');
            cart.classList.toggle('open'); 
        }

        function checkout() {
            console.log('Proceeding to Checkout...');
            alert('Redirecting to checkout! (This is a placeholder action)');
        }