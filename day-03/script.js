const btn2 = document.getElementById('button2')
const para1 = document.getElementById('para')
const btn3 = document.getElementById('button3')
const btn4 = document.getElementById('button4')
const plus1 = document.getElementById('plus')
const sub = document.getElementById('minus')

btn2.addEventListener('click', ()=>{
    para1.classList.toggle('d-none')

    if( para1.classList.contains('d-none')){
        btn2.innerText ='show';
    }else{
        btn2.innerText='hide';
    }
});

btn4.addEventListener('click',()=> {

    document.body.classList.toggle('dark-theme');
});

let counter = 0;

plus1.addEventListener('click',()=>{
    counter++;
    btn3.innerText=counter;
    
});
minus.addEventListener('click',()=>{
    counter--
    btn3.innerText=counter;
})





