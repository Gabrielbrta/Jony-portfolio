

const botao = document.querySelector('#btn-mobile');
let menuLinks = document.querySelectorAll('#list-menu li a');
console.log(menuLinks)


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


botao.addEventListener('touchstart', toggleMenu);
botao.addEventListener('click', toggleMenu);