// Bouton burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', function(){
    burger.classList.toggle('open')
    nav.classList.toggle('open')
})
// bouton me contacter
const contact = document.querySelector(".button-contact");
contact.addEventListener('click', function(){
    window.location.href="contact.html";
})
// boutons reservations
const bouton = document.querySelectorAll(".button-resa");
bouton.forEach(bouton=>{
bouton.addEventListener('click',function(){
    window.location.href="reservation.html"; 
})
})
// back to top
const backToTopButton = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    backToTopButton.classList.add('show');
    backToTopButton.classList.remove('hide');
  } else {
    backToTopButton.classList.add('hide');
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
