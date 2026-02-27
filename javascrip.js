// small-screen hamburger toggle
let toggle=document.querySelector('.toggle');
let body=document.querySelector('body');
if (toggle && body) {
    toggle.addEventListener('click',function(){
        body.classList.toggle('open');
    });
}

// function used by menu links to collapse the menu
function toggleMenu(){
    /*definir les variables*/
    let menuToggle=document.querySelector('.toggle');
    let menu=document.querySelector('.menu');
    /*ajouter  la classe active pour le menu et le toggle*/
    if (menuToggle && menu) {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    }
}

// form validation logic
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const bt = document.getElementById('bt3');
    if (bt) {
        bt.addEventListener('click', function(event){
            event.preventDefault();
            const nom = document.querySelector('#nom').value.trim();
            const email = document.querySelector('#email').value.trim();
            const text = document.querySelector('#text').value.trim();
            if(nom === '' || email === '' || text === ''){
                alert('Veuillez remplir tous les champs du formulaire.');
            } else {
                alert('Merci pour votre message, nous vous contacterons bientôt!');
                bt.textContent = 'Message envoyé';
                /*modifier le texte du bouton pour indiquer que le message a été envoyé*/
               /*retoure sur texte original du bouton après 3 secondes*/
                setTimeout(function(){
                    bt.textContent = 'Envoyer';
                }, 3000);
                if (form) form.reset();
            }
        });
    }
});
