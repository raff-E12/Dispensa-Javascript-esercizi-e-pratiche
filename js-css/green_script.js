let nav_cont = document.getElementById("int-sc");
let submenu = document.querySelector(".submenu-hovering");
let header_menu = document.getElementsByClassName('row-sc1');
let nav_top = document.getElementById("header-sc");

window.addEventListener('scroll', ()=>{
    let document_top = document.documentElement.scrollTop;
    if (document_top > 100) {
        nav_top.classList.add('active');
    } else {
        nav_top.classList.remove('active');
    }
})

nav_cont.addEventListener('mouseover', ()=>{
    submenu.classList.toggle('active');
})
nav_cont.addEventListener('mouseout', ()=>{
    submenu.classList.remove('active');
})
submenu.addEventListener('mouseout', ()=>{
    submenu.classList.remove('active');
})
submenu.addEventListener('mouseover', ()=>{
    submenu.classList.toggle('active');
})

let nav_cont_1 = document.getElementById("int-sc-1");
let submenu_1 = document.getElementById('service-sub');
nav_cont_1.addEventListener('mouseover', ()=>{
    submenu_1.classList.add('active');
})
nav_cont_1.addEventListener('mouseout', ()=>{
    submenu_1.classList.remove('active');
})
submenu_1.addEventListener('mouseout', ()=>{
    submenu_1.classList.remove('active');
})
submenu_1.addEventListener('mouseover', ()=>{
    submenu_1.classList.add('active');
})

let nav_cont_2 = document.getElementById("int-sc-2");
let submenu_2 = document.getElementById('pages-sub');
nav_cont_2.addEventListener('mouseover', ()=>{
    submenu_2.classList.add('active');
})
nav_cont_2.addEventListener('mouseout', ()=>{
    submenu_2.classList.remove('active');
})
submenu_2.addEventListener('mouseout', ()=>{
    submenu_2.classList.remove('active');
})
submenu_2.addEventListener('mouseover', ()=>{
    submenu_2.classList.add('active');
})

let nav_cont_3 = document.getElementById("int-sc-3");
let submenu_3 = document.getElementById('blog-sub');
nav_cont_3.addEventListener('mouseover', ()=>{
    submenu_3.classList.add('active');
})
nav_cont_3.addEventListener('mouseout', ()=>{
    submenu_3.classList.remove('active');
})
submenu_3.addEventListener('mouseout', ()=>{
    submenu_3.classList.remove('active');
})
submenu_3.addEventListener('mouseover', ()=>{
    submenu_3.classList.add('active');
})


let circle_2_sc = document.getElementById('circle-2');
let img_hero_1 = document.querySelector('.box-1-img');
let img_hero_2 = document.querySelector('.box-2-img');

circle_2_sc.addEventListener('click', ()=>{
   if (!circle_2_sc.classList.contains('active')) {
    circle_2_sc.classList.add('active');
   }
   img_hero_2.classList.add('active');
   img_hero_1.style.display = 'none';
})