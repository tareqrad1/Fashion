console.log('WELCOME ALL VISITOR'); //Welcome
//active-li
const a = document.querySelectorAll('a');
a.forEach((a) => {
    a.addEventListener('click',setActive);
});
function setActive() {
    a.forEach((e) => {
        e.classList.remove('active');
        this.classList.add('active');
    });
}
// nav-scroll
const sectionOne = document.querySelector('section');
const header = document.querySelector("header");
let up = document.getElementById('up');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 800) {
        header.classList.add('scroll');
        up.style.transform = 'translateX(0px)';
    }else {
        header.classList.remove('scroll');
        up.style.transform = 'translateX(100px)';
    }
});
up.addEventListener('click',() => {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
});

// observer
const Option = {
    root:null,
}
const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
},Option);
const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => Observer.observe(el));

const slideleft = document.querySelectorAll('.slide-left');
slideleft.forEach((el) => Observer.observe(el));

const slidebottom = document.querySelectorAll('.slide-bottom');
slidebottom.forEach((el) => Observer.observe(el));

const slidetop = document.querySelectorAll('.slide-top');
slidetop.forEach((el) => Observer.observe(el));

const hiddenb = document.querySelectorAll('.hiddenb');
hiddenb.forEach((el) => Observer.observe(el));

//btn
let shopNow = document.querySelector('.contBtn > button');
shopNow.addEventListener('click',() => {
    window.scrollTo({
        top:745,
        behavior:"smooth",
    });
});

// icon in mobile
let small = document.querySelector('small');
let box = document.querySelectorAll('footer .right .box')
small.onclick = function() {
    box.forEach((box) => {
        box.classList.toggle('active');
    });
}

// input submit
let input = document.querySelector('.shoping .content form  input');
let error = document.querySelector('.shoping .content .error');
document.forms[0].onsubmit = function() {
    if(input.value === '') {
        error.style.display = 'block';
        return false;
    }
    return true;
}

// cursor
let cursor = document.querySelector('.cursor');
window.addEventListener('mousemove',(e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// sign in
let signIn = document.querySelector('header .container > button');
signIn.onclick = function() {
    window.close();
    window.open('/indexIn.html');
}

//social media
let instagram = document.querySelectorAll('footer .left .icon i')[1];
instagram.addEventListener('click',() => {
    window.open('https://www.instagram.com/tareq.radi/?next=%2F')
});
let gitHub = document.querySelectorAll('footer .left .icon i')[2];
gitHub.addEventListener('click',() => {
    window.open('https://github.com/tareqrad1');
});
let fb = document.querySelectorAll('footer .left .icon i')[0];
fb.addEventListener('click',() => {
    window.open('https://www.facebook.com/profile.php?id=100008719989799')
});

//shopNow
let btnShop = document.getElementById('btnShop');
btnShop.onclick = function() {
    window.open('http://127.0.0.1:5500/indexIn.html')
}
