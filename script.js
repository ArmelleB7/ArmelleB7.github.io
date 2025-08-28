// ===============================
// Chargement du menu (header)
// ===============================
document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const header = document.getElementById("header");
    const reponse = await fetch('/HTML/header.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    header.innerHTML = html;

    // Une fois le header injecté, on ajoute les événements
    setTimeout(() => {
      const navlist = document.getElementById("nav-list");
      const navtoggle = document.getElementById("nav-toggle");
      const btncontactheader = document.getElementById("btn-contact-header");

      if (navtoggle && navlist && btncontactheader) {
        navtoggle.addEventListener("click", function () {
          navlist.classList.toggle("expanded");
          navtoggle.classList.toggle("expanded");
          btncontactheader.classList.toggle("expanded");
        });
      }
    }, 0);

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
}

// ===============================
// Fonctionnalités de page (galerie, carte)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  
  // === Galerie ===
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return; // aucune galerie sur cette page

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // === Écouteurs sur les boutons "précédent / suivant" ===
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

if (prev) {
  prev.addEventListener("click", function () {
    plusSlides(-1);
  });
}

if (next) {
  next.addEventListener("click", function () {
    plusSlides(1);
  });
}

// === Écouteurs sur les "dots" ===
const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    currentSlide(i + 1);
  });
}

});

// Animation mon nom page accueil //

  document.addEventListener("DOMContentLoaded", function () {
    const texte = "Armelle Bruneaux.";
    const target = document.getElementById("mon-nom");
    let index = 0;

    // Attendre un délai avant de commencer (ex: 1 seconde)
    setTimeout(() => {
      const interval = setInterval(() => {
        if (index < texte.length) {
          target.textContent += texte[index];
          index++;
        } else {
          clearInterval(interval); // stop quand tout est écrit
        }
        if (!target) {
  console.warn("⚠️ Élément #prenom-nom introuvable dans le DOM.");
  return;
}
      }, 200); // temps entre chaque lettre (100ms = rapide, 200ms = plus lent)
    }, 1000); // délai avant de commencer
  });




// ===============================
// Chargement du footer
// ===============================
const footer = document.getElementById('footer');

fetch('/html/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du footer');
    }
    return response.text();
  })
  .then(data => {
    footer.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur :', error);
  });
