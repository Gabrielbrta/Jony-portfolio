
/*Toggle menu ================================== */
const botao = document.querySelector('#btn-mobile');
const menuLinks = document.querySelectorAll('#list-menu li a[href^="#"]');
const nav = document.querySelector('#nav');

/* Scroll Suave -------------------------------------------------------*/
menuLinks.forEach(item => {
  item.addEventListener('click', scrollToId, {passive:false})
})

function scrollToId(event){
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll(0, to - 75);
}
/* ----------------------------------------------------------------- */
function toggleMenu(event){
    if(event.type === 'touchstart')event.preventDefault();

    
    const nav = document.querySelector('#nav');

   let menuLinks = document.querySelectorAll('#list-menu li a'); 

    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if(active){
      event.currentTarget.setAttribute('aria-label', 'fechar menu')

    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
    
}

botao.addEventListener('touchstart', toggleMenu,{passive:false});
botao.addEventListener('click', toggleMenu, {passive:true});

/*Fechar menu  --------------------------------------------------------------*/

  for(const links of menuLinks){
    links.addEventListener('click', function(){
      nav.classList.remove('active');
    },{passive:true})
  }

/*--------------------------------------------------------------*/



const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4);
  target.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(animationClass);
    }else{
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length){
  window.addEventListener('scroll',debounce(function(){
    animeScroll();
  }, 50),{passive: true})
}