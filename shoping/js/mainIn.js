let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let inpass = document.getElementById('inpass');
let welc = document.querySelector('h2');
let btn2 = document.getElementById('btn2');

btn.onclick = function() {
    if(inp.value === '') {
        inp.style.border = '1px solid red';
        return false;
    }else {
        inp.style.border = '1px solid #D0D5DD';
    }
    if(inpass.value === '') {
        inpass.style.border = '1px solid red';
        return false;
    }else {
        inpass.style.border = '1px solid #D0D5DD';
    }
    welc.textContent = `Welcome: ${inp.value}`;
    welc.style.color = '#E1C441'

    setTimeout(() => {
        window.close();
        return window.open('/index.html').scrollTo({
        });
    }, 3000);
}

btn2.onclick = function() {
    window.open('https://mail.google.com/');
}
