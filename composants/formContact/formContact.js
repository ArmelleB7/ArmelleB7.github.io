document.addEventListener("DOMContentLoaded", chargerFormContact);

function chargerFormContact() {
    const formContact = document.getElementById("carte-contact");
    console.log(formContact);
    fetch("/composants/formContact/formcontact.html")
        .then(response => response.text("formulaire de contact trouvé"))
        .then(html => {
            formContact.innerHTML = html;
            console.log(formContact.innerHTML);
  
        })
        .then(() => {
            // Ajouter les événements après l'injection du HTML
            const btnFormulaire = document.getElementById('btn-formulaire');
            if (btnFormulaire) {
                btnFormulaire.addEventListener('click', function () {
                    formContact.classList.toggle('turn');
                });
            }
        })

        .then(() => {
            // Ajouter les événements après l'injection du HTML
            const btnretourformulaire = document.getElementById('btn-retour-formulaire');
            if (btnretourformulaire) {
                btnretourformulaire.addEventListener('click', function () {
                    formContact.classList.toggle('turn');
                });
            }
        })
        .catch(error => console.error('Error loading form contact:', error));
}