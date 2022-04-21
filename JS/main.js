

const botao = document.querySelector('#btn-mobile');
const menuLinks = document.querySelectorAll('#list-menu li a');
const nav = document.querySelector('#nav');
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

for(const links of menuLinks){
  links.addEventListener('click', function(){
    nav.classList.remove('active')
  })
}


botao.addEventListener('touchstart', toggleMenu);
botao.addEventListener('click', toggleMenu);

/*const links = document.querySelectorAll('nav ul li a');

for (const link of links){
    link.addEventListener('click', function(){
    nav.classList.remove('show')    
    })
}

*/