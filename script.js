const searchInput=document.querySelector(".search");
const divs=document.querySelectorAll(".movie");
searchInput.addEventListener("keyup",function(event){
    const word=event.target.value.toLowerCase();
    divs.forEach(item=>{
        item.querySelector("p").textContent.toLowerCase().includes(word)?(item.style.display="block"):(item.style.display="none")
    })
})
gsap.from('.about-me', { duration: 1.5, delay: .9, stagger: .6, x: '-100vw', ease: 'power2.in', opacity: 0 });
gsap.from('.about-name', { duration: 1.5, delay: .9, stagger: .6, x: '-100vw', ease: 'power2.in', opacity: 0 });
gsap.from('.about-btn', { duration: 1.9, delay: .9, stagger: .6, y: '100vw', ease: 'power2.in', opacity: 0});
gsap.from(".movie", {opacity: 0, duration: 1.4, delay: 1, stagger: .3});


function countdown() {
    const chDate = new Date("February 28, 2023 00:00");
    const now = new Date();
    const diff = chDate - now;
  
   const msInSecond = 1000; 
   const msInMinute = 60 * 1000; 
   const msInHour = 60 * 60 * 1000; 
   const msInDay = 24 * 60 * 60 * 1000; 
  
   const displayDay =  Math.floor(diff/msInDay);
   document.querySelector(".days").textContent = displayDay;
   
   const displayHour = Math.floor((diff%msInDay) / msInHour);
   document.querySelector(".hours").textContent = displayHour;
   
   const displayMinute = Math.floor((diff%msInHour) / msInMinute);
   document.querySelector(".minutes").textContent = displayMinute;
  
   const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
   document.querySelector(".seconds").textContent = displaySecond;
  
   if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    merry();
   }
}
  
  let timerID = setInterval(countdown, 1000);
  

// button top
$('body').append('<div class="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            bottom: '15px'
        });
        } else {
        $('.upbtn').css({
            bottom: '-80px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});


