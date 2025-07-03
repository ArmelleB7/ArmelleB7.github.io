// import-menu.js

document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const header = document.getElementById('header');
    const reponse = await fetch('html/header.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    header.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
  let menu = document.getElementById("menu");
  let menutoggle = document.getElementById("menu-toggle");
 let containermenu2 = document.getElementById("container-menu2");
  menutoggle.addEventListener("click", function () {
    menu.classList.toggle("ouvert");
    menutoggle.classList.toggle("ouvert");
    containermenu2.classList.toggle("mobile");


  });
}


// import-footer.js
// Sélectionne l'élément où insérer le footer
const footer = document.getElementById('footer');

fetch('/html/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }
    return response.text();
  })
  .then(data => {
    footer.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

// Menu accueil


