let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

const storeOpening = new Date('nov 01, 2024 00:00:00');
  setCountdown (storeOpening);
  setInterval(function() {
    setCountdown (storeOpening);
  },1000)
  function setCountdown (countingDownTime) {
  let now = new Date();
  let timeRemaining = countingDownTime - now;
  console.log(timeRemaining);

  let seconds = Math.floor(timeRemaining/(1000));
  let minutes = Math.floor(timeRemaining/(1000*60));
  let hours = Math.floor(timeRemaining/(1000*60*60));
  let days = Math.floor(timeRemaining/(1000*60*60*24));
  console.log(days, hours, minutes, seconds);
        
  let daysToDisplay = days;
  let hoursToDisplay = hours - (days*24);
  let minutesToDisplay = minutes-(hours*60);
  let secondsToDisplay = seconds - (minutes*60);
  console.log( daysToDisplay, hoursToDisplay, minutesToDisplay,  secondsToDisplay);

  const daysE1 = documents.getElementById('days');
  const hoursE1 = documents.getElementById('hours');
  const minutesE1 = documents.getElementById('minutes');
  const secondsE1 = documents.getElementById('seconds');

  daysE1.textContent = daysToDisplay;
  hoursE1.textContent = hoursToDisplay;
  minutesE1.textContent = minutesToDisplay;
  secondsE1.textContent = secondsToDisplay;
}

var swiper = new Swiper(".product-slider", {
  loop:  true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
 
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop:  true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
 
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});