const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', function(){
    burger.classList.toggle('open')
    nav.classList.toggle('open')
})

const contact = document.querySelector(".button-contact");
contact.addEventListener('click', function(){
    window.location.href="contact.html";
})
const bouton = document.querySelectorAll(".button-resa");
bouton.forEach(bouton=>{
bouton.addEventListener('click',function(){
    window.location.href="reservation.html"; 
})
})
