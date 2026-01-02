const name = document.getElementById('user-name')
const age = document.getElementById('user-age')
const gamil = document.getElementById('user-gmail')
const password = document.getElementById('user-password')
const button =  document.getElementById('submit-button')
const  form = document.getElementById('my-form')
const nError = document.getElementById('name-error')
const aError = document.getElementById('age-error')
const gError = document.getElementById('gmail-error')
const pError = document.getElementById('password-error')

form.addEventListener( 'submit', (e)=> {
    e.preventDefault();

    let isValid = true;

    if(name.value.length<3){
        nError.innerText='wrong input';
        isValid = false;

    }else{
        nError.innerText=''
    }
    if(!gamil.value.includes('@')){
        gError.innerText='wrong gmail please check again';
         isValid = false;

    }else{
        gError.innerText='';
    }
    if(isNaN(age.value) || age.value === ""){
            aError.innerText='number only';
            isValid = false;
    }else{
        aError.innerText='';
    }
    if(password.value.length<6){
        pError.innerText='wrong password';
         isValid = false;
    }else{
        pError.innerText='';
    }
    if(isValid){
        alert('form successefully submitted') 
    form.reset();
        }


});

