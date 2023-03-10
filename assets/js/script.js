const hero = document.querySelector('.hero');
const header = document.querySelector('header.header');

let height_header = header.getBoundingClientRect().height;


if(hero){
    document.addEventListener('DOMContentLoaded', () => {

        console.log('height header: '+height_header);
        hero.style.marginTop = "-"+height_header+"px";
        hero.style.paddingTop = height_header+"px";
    })
}


document.addEventListener('scroll', (e) => {

    if(window.scrollY > 150){
        header.classList.add('header_white');
        document.body.style.paddingTop = height_header+"px";
    }else{
        header.classList.remove('header_white');
        document.body.style.paddingTop = "0px";
    }

});



//========================= control menu mobile ====================================
const right_header = document.querySelector('.right_header');
const open_menu_mobile = document.getElementById('open_menu_mobile');
const close_menu_mobile = document.getElementById('close_menu_mobile');

open_menu_mobile.addEventListener('click', (e) => {

    e.preventDefault();

    right_header.classList.add('open_menu_mobile');

});

close_menu_mobile.addEventListener('click', (e) => {

    e.preventDefault();

    right_header.classList.remove('open_menu_mobile');
});





//========================= control btn feat ============================================
const btn_open_feat = document.querySelectorAll('.btn_open_feat');
const modal_feat = document.querySelector('.modal_feat');
const close_modal_feat = document.querySelector('.close_modal_feat');
const close_modal_feat2 = document.getElementById('close-two-modal');
const modal_thumb = document.querySelector('.modal_thumb');
const card_features = document.querySelectorAll('.card_features');

btn_open_feat.forEach((item, index) => {

    

    item.addEventListener('click', () => {

        let title_modal = card_features[index].querySelector('p').innerText;
        let desc_modal = card_features[index].getAttribute('data-description');
        let scr_img_modal = card_features[index].querySelector('img').getAttribute('src');

        console.log('title: '+title_modal);

        document.querySelector('.title_modal_set').innerHTML = title_modal;
        document.querySelector('.description_modal_set').innerHTML = desc_modal;
        document.querySelector('.img_modal_set').setAttribute('src', scr_img_modal);

        modal_feat.classList.add('open_modal_feat');
        modal_thumb.classList.add('open_modal_thumb');

    });

});

if(close_modal_feat){
    close_modal_feat.addEventListener('click', () => {

        modal_feat.classList.remove('open_modal_feat');
        modal_thumb.classList.remove('open_modal_thumb');
    
    });
}
if(close_modal_feat2){
    close_modal_feat2.addEventListener('click', () => {

        modal_feat.classList.remove('open_modal_feat');
        modal_thumb.classList.remove('open_modal_thumb');
    
    });
}


function isOnScreen(el){
    let rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

const itens_onscreen = document.querySelectorAll('.isonscreen');

document.addEventListener('scroll', () => {

    itens_onscreen.forEach((item) => {

        if(isOnScreen(item)){
            item.classList.remove('opa-0')
            item.classList.add( 'animate__fadeInDown');
            item.style.setProperty('--animate-delay', '1s')
            item.style.setProperty('--animate-duration', '1.5s');
        }

    });

});

//============================ owl carrousel ========================================
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});