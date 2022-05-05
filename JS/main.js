
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

botao.addEventListener('touchstart', toggleMenu,{passive:true});
botao.addEventListener('click', toggleMenu, {passive:true});

/*Fechar menu  --------------------------------------------------------------*/

  for(const links of menuLinks){
    links.addEventListener('click', function(){
      nav.classList.remove('active');
    },{passive:true})
  }

/*--------------------------------------------------------------*/




/*const links = document.querySelectorAll('nav ul li a');

for (const link of links){
    link.addEventListener('click', function(){
    nav.classList.remove('show')    
    })
}

*/

/* Animar ao Scroll ========================================== */

/*1 - Selecionar elementos que devem ser animados
2 - Definir a classe que é adicionada durante a animação
3 - Criar função de animação
3.1 - Verificar a distância entre a barra de scroll e o topo do site
3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
5 - Otimizar ativação
*/

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
    console.log(animeScroll)
  }, 50),{passive: true})
}