const btn = document.getElementById('showButton')
const para = document.querySelector('.about-section-p');

btn.addEventListener('click',()=>{
    if(para.style.display ==='none'){
        para.style.display = 'block';
        btn.textContent ='hide';

    }else{
        para.style.display = 'none';
        btn.textContent ='show';
    }

});