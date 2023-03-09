const hero = document.querySelector('.hero');
const header = document.querySelector('header.header');

let height_header = header.getBoundingClientRect().height;

console.log('height header: '+height_header);

hero.style.marginTop = "-"+height_header+"px";
hero.style.paddingTop = height_header+"px";

document.addEventListener('scroll', (e) => {

    console.log(window.scrollY);

    if(window.scrollY > 150){
        header.classList.add('header_white');
    }else{
        header.classList.remove('header_white');
    }

});