document.documentElement.className = ' js';


const botao = document.querySelector('#btn-mobile');
const menuLinks = document.querySelectorAll('#list-menu li a[href^="#"]');
const nav = document.querySelector('#nav');


function initScrollSuave(){
  if(menuLinks.length){
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
  }
}
initScrollSuave()


function initToggleMenu(){
  const clientEvent = ['click', 'touchStart']
  clientEvent.forEach(event => {
    botao.addEventListener(event, toggleMenu);
  menuLinks.forEach(links => {
    links.addEventListener(event, toggleMenu);
    })
  })

  function toggleMenu(event){
    const nav = document.querySelector('#nav');
    if(event.type === clientEvent[0] && event.type === clientEvent[2]);
    event.preventDefault();

    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
  
    if(active){
      event.currentTarget.setAttribute('aria-label', 'fechar menu')
      
    }else{
      event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
  }
}
initToggleMenu();


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

function initAnimeScroll(){
  const target = document.querySelectorAll("[data-anime]");
  if(target.length){
    const animationClass = 'animate';

  function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4);
    target.forEach(function(element){
      if ((windowTop) > element.offsetTop){
        element.classList.add(animationClass);
      }
    })
  }
  animeScroll();
}
  if(target.length){
    window.addEventListener('scroll',debounce(function(){
      animeScroll();
    }, 50),{passive: true})
  }
}
initAnimeScroll();
