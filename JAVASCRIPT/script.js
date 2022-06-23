
function Dom (seletor1, seletor2, seletor3, seletor4, seletor5){
    

    this.animaisImagem = document.querySelectorAll(seletor1);
    this.animaisConteudo = document.querySelectorAll(seletor2);
    this.animaisQuestions = document.querySelectorAll(seletor3);
    this.animaisAnswers = document.querySelectorAll(seletor4);     
    this.sectionMenu = document.querySelectorAll(seletor5);
    this.addClass = function (classe){
        this.animaisConteudo[0].classList.add('ativo');
        this.removeClass = function (classe){
            this.animaisConteudo.forEach((item)=>{
                item.classList.remove(classe);
            })
        }      
        this.animaisImagem.forEach((item,index)=>{
            item.addEventListener('click', ()=>{
            this.animaisConteudo.forEach((item)=>{
                item.classList.remove('ativo');

            })    
            this.animaisConteudo[index].classList.toggle(classe);


            });

        });  
    }
    this.addClass2 = function (classe){
        
        this.animaisQuestions.forEach((item,index)=>{
            item.addEventListener('click', ()=>{
            this.animaisAnswers[index].classList.toggle(classe);
            });
        });
    }
    this.addScroll = function(){
        this.sectionMenu.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                const href = e.currentTarget.getAttribute('href');
                const section = document.querySelector(href);
                const topo = section.offsetTop;
                window.scrollTo({
                   behavior: 'smooth',
                   top: topo,
                });
            })
        })
    };
}
const seletorImagem = new Dom ('.animais-lista li','.animais-descricao section', '.faq-lista dt', '.faq-lista dd', 'a[href^="#"]');
seletorImagem.addClass('ativo');
seletorImagem.addClass2('ativo');
seletorImagem.addScroll();
const windowMetade = window.innerHeight * 0.4;
const activeItens = ()=>{
    sections.forEach((item)=>{
        const distanceTop = item.getBoundingClientRect().top - windowMetade;
        if ( distanceTop < 0){
        item.classList.add('ativo');
    }
    })

}
const sections = document.querySelectorAll('.js-scroll');
window.addEventListener("scroll", activeItens);








