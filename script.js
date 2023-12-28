let menubar =document.getElementById('menu-bar');
let headernavbar =document.querySelector('.header-navbar');


menubar.onclick = () =>{

    console.log('Menu bar clicked');
    menubar.classList.toggle('fa-times');
    console.log('fa-times class toggled');

    headernavbar.classList.toggle('active');
    console.log('active class toggled');
}


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header.navbar a')




section.forEach(sec =>{


  let top = window.scrollY;
  let height = sec.offsetHeight;
  let offset = sec.offsetTop - 150;
  let id = sec.getAttribute('id');



  if(top => offset && top <offset + height){
    navLinks.forEach(links =>{
      links.classList.remove('active');
      document.querySelector('header.navbar a[href*='+id+']').classList.add('active');

    });
  };




});

   







function openSearch(){
    document.getElementById("myOverlay").style.display="block";
}

function closeSearch(){
    document.getElementById("myOverlay").style.display="none"
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });



  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1
        },
        640:{
            slidesPerView:2
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    },
  });





  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }


  function fadeOut(){
    setInterval(loader,3000);
  }

  window.onload = fadeOut;






