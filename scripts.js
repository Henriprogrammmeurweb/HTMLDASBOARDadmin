let category=document.querySelector('.cat');
let cateChoice=document.querySelector(".choice-cat");

category.addEventListener('click',()=>{
    category.classList.toggle('active');
    cateChoice.classList.toggle('active');
})