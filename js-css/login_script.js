let login_btn = document.getElementById('btn-lg');
const bk_sc = document.getElementById('bk-sc');
const form_sc = document.getElementById('form-sc');
let cross_btn = document.getElementById('cross-btn')

login_btn.addEventListener('click', ()=>{
    let condition = bk_sc.classList.contains('active') && form_sc.classList.contains('active');
    if (!condition) {
        bk_sc.classList.add('active');
        setTimeout(()=>{
        form_sc.classList.add('active');
        },200)
    } else {
        bk_sc.classList.remove('active');
        setTimeout(()=>{
        form_sc.classList.remove('active');
        },200)
    }
})

cross_btn.addEventListener('click', ()=>{
        form_sc.classList.remove('active');
        setTimeout(()=>{
        bk_sc.classList.remove('active');
        },300)
})

const text_hero = document.querySelector('h1.title-hero');
const pr_hero = document.querySelector('p.par-sc');
const header_sc = document.querySelector('header.header-sc');
const loading_site = document.querySelector('section.loading-sc');

document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        loading_site.classList.add('finish-loading');
    }, 1000);

    setTimeout(()=>{
    text_hero.classList.add('start-animation');
    pr_hero.classList.add('start-animation');
    header_sc.classList.add('start-animation'); 
    }, 1000)
})

window.addEventListener('scroll', ()=>{
    let text_footer = document.getElementById('footer-txt');
    let sc_footer = document.getElementById('footer-sc');
    let links_footer = document.getElementById('links');
    let top = window.scrollY;
    let offset = sc_footer.offsetTop;
    let height = sc_footer.offsetHeight;

    //console.log(top);

    if (top >= offset && top < offset + height) {
        text_footer.style.left = '0';
        links_footer.style.left = '0';
    } else {
        text_footer.style.left = '-100%';
        links_footer.style.left = '100%';
    }
})


function form_convalidation(){
const email_vl = document.getElementById('email');
const password_vl = document.getElementById('password');
const comment_area = document.getElementById('comment-area');
const submit = document.getElementById('submit-btn');
let msg = document.getElementById('msg-error');

comment_area.oninput = ()=>{
    if (comment_area.value.length < 20) {
        msg.textContent = 'Deve contenere almeno 20 caratteri.';
        if (comment_area.value === '') {
        msg.textContent = '';
        }
    }
    else{
        msg.textContent = 'Hai raggiunto il limite.';
        comment_area.setAttribute('readonly', 'readonly');
        comment_area.style.border = '2px solid #880606';
    }
};

email_vl.oninput = ()=>{
    let convalidation_lt = /^([^@]|[a-z0-9])+@+example+\.com$/;
    let value_email = convalidation_lt.test(email_vl.value);
    if (!value_email) {
        msg.textContent = "mi raccomando, l'email deve comprendere almeno in finale example.com.";
    } else {
        msg.textContent = '';
    }
}

password_vl.oninput = ()=>{
    let convalidation_lt = /^[A-Za-z\d]{8}$/;
    let value_pas = convalidation_lt.test(password_vl.value);
    if (!value_pas) {
        msg.textContent = "mi raccomando, la password deve essere di 8 cifre";
    } else {
        msg.textContent = '';
    }
}
}

form_sc.addEventListener('input', form_convalidation);
