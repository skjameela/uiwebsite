let searchForm=document.querySelector('.search-form');
let shoppingCart=document.querySelector('.shopping-cart');
let loginForm=document.querySelector('.login-form');



document.querySelector('#search-btn').onclick= ()=>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


document.querySelector('#cart-btn').onclick=()=>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');

}

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}


