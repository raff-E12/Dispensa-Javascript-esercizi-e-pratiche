const swiper = new Swiper('.panel-info.swiper', {
    loop: true,
    gradCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.arrow.swiper-button-next',
      prevEl: '.arrow.swiper-button-prev',
    }
  });

// Swipper Section


//Ham MenuSection

const Ham_icon = document.getElementById('Ham-icon');
const Cross_icon = document.getElementById('Cross-icon');
var Ham_Menu = document.querySelector('nav.HamMenu');
var list_links = document.getElementsByClassName('navlinks');

Ham_icon.addEventListener('click', ()=>{
    var condition_event = Ham_Menu.classList.contains('active');
    if (!condition_event) {
        Ham_Menu.classList.add('active');
        Ham_Menu.style.right = '0';
    }
})

Cross_icon.addEventListener('click', ()=>{
    var condition_event_null = Ham_Menu.classList.contains('active');
    if (condition_event_null) {
        Ham_Menu.classList.remove('active');
        Ham_Menu.style.right = '-120%';
    }
})

for (i = 0; i < list_links.length; i++) {
    list_links[i].addEventListener('click', ()=>{
        Ham_Menu.classList.remove('active');
        Ham_Menu.style.right = '-120%';
    })
}

window.addEventListener('resize', ()=>{
    var condition_media = this.matchMedia('(min-width:992px)').matches;
    if (condition_media) {
        Ham_Menu.style.right= '-120%';
        Ham_Menu.classList.toggle('active');
    }
})

// Header Change Color

const Header = document.getElementById('header');
function Scroll_Change(){
    var condition_change = this.scrollY >= 100;
    if (condition_change) {
        Header.classList.add('activeScroll');
        Ham_Menu.classList.add('activeScroll');
    } else {
        Header.classList.remove('activeScroll');
        Ham_Menu.classList.remove('activeScroll');
    }
}

window.addEventListener('scroll', Scroll_Change);

window.addEventListener('scroll', ()=>{
var btn_top = document.getElementById('scroll-top');
var position_top = document.documentElement.scrollTop;
    if (position_top > 300) {
        btn_top.classList.add('active');
    } else {
        btn_top.classList.remove('active');
    }

btn_top.onclick = ()=>{
   document.documentElement.scrollTop = 40;
}
})