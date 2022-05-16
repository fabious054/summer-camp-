(function(){

let btnTop = document.getElementById('box-btn');
let menuOpener = document.getElementById('btnOpenMenu');
let emailInput = document.getElementById('emailInput');
let submitBtn = document.getElementById('submitBtn');
let alertBox = document.getElementById('alertBox');

    btnTop.addEventListener('click',()=> emailInput.focus());

    submitBtn.addEventListener('click',()=>{

        let email = emailInput.value;

        if(!email || email.indexOf('@') == -1 ){

            alertBox.style.display = 'flex';
            alertBox.style.color = '#ff0000';
            alertBox.innerHTML ='*Favor preencher o campo com um email válido!';
            emailInput.value = '';

        } else {
            alertBox.style.color = '#333';
            alertBox.style.display = 'flex';
            alertBox.innerHTML =`<span>Iremos enviar um email para ${email} contendo todas as informações para sua incrição.</br> Sejam muito bem-vindos!</span><button id="btnAlertBox" >OK</button>`;

        let btnAlertBox = document.getElementById('btnAlertBox');

            btnAlertBox.style.backgroundColor = '#009900';
            btnAlertBox.style.color = '#fff';
            btnAlertBox.style.height = '25px';
            btnAlertBox.style.borderRadius = '5px';

        btnAlertBox.addEventListener('click',()=>{

            alertBox.style.display = 'none';
            alertBox.innerHTML ='';
            emailInput.value = '';
        })
        }
    });

    menuOpener.addEventListener('click',()=>{

        let menuMobile = document.getElementById('menu');

        if(menuMobile.style.display == 'flex'){

            menuMobile.style.display = 'none';
            document.documentElement.style.overflow = 'scroll'

        } else {
            menuMobile.style.display = 'flex'
            document.documentElement.style.overflow = 'hidden'
        }
    })
})()