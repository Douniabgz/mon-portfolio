// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//   const translations = {
//       en: {
//           greeting: "Hello, I'm Dounia 👋",
//           age: "🎂 I'm 22 years old",
//           location: "📍 I'm from Paris",
//           student: "🎓 I am an engineering student, passionate about web development, data, and artificial intelligence.",
//           goal: "I want to use my skills to help companies optimize their processes, thus improving their efficiency and productivity.",
//           about: "</> About",
//           projects: "🖉 Projects / Experiences",
//           skills: "🖉 Skills",
//           aboutHeading: "About",
//           aboutText1: "This is where it all started, when I joined a preparatory class for engineering schools.",
//           aboutText2: "Later, I joined ESILV, a great engineering school.",
//           interestsHeading: "My Interests !",
//           interestBasketball: "Basketball, my sporting passion.",
//           interestTravel: "Exploring new cultures.",
//           interestCooking: "Cooking, my creative art.",
//           interestHumanitarian: "Helping others through humanitarian work.",
//           projectsHeading: "Projects",
//           businessProjectsText: "In this section, I invite you to discover my professional experiences.",
//           researchProjectsText: "In this section, I invite you to explore my research & development journey.",
//           businessProjects: "Business Projects",  // Translation for the button
//           researchProjects: "Research Projects", // Translation for the button
//           interestsIntro: "In this section, I invite you to discover my different interests!"
//       },
//       fr: {   
//           greeting: "Salut, je suis Dounia 👋",
//           age: "🎂 J'ai 22 ans",
//           location: "📍 Je viens de Paris",
//           student: "🎓 Je suis étudiante en ingénierie, passionnée par le développement web, la data et l'intelligence artificielle.",
//           goal: "Je souhaite mettre à profit mes compétences pour aider les entreprises à optimiser leurs processus, améliorant ainsi leur efficacité et leur productivité.",
//           about: "</> À propos",
//           projects: "🖉 Projets / Expériences",
//           skills: "🖉 Compétences",
//           aboutHeading: "À propos",
//           aboutText1: "C'est ici que tout a commencé, lorsque j'ai intégré une classe préparatoire aux grandes écoles.",
//           aboutText2: "Par la suite, j'ai intégré l'ESILV, une superbe école d'ingénieurs.",
//           interestsHeading: "Mes centres d'intérêts !",
//           interestBasketball: "Le basketball, ma passion sportive.",
//           interestTravel: "Explorer de nouvelles cultures.",
//           interestCooking: "La cuisine, mon art créatif.",
//           interestHumanitarian: "S'engager pour aider les autres.",
//           projectsHeading: "Projets",
//           businessProjectsText: "Dans cette rubrique, je vous invite à découvrir mes expériences professionnelles.",
//           researchProjectsText: "Dans cette rubrique, je vous invite à découvrir mon parcours en Recherche & Développement.",
//           businessProjects: "Projets en entreprise",  // Translation for the button
//           researchProjects: "Projets de recherche", // Translation for the button  
//           interestsIntro: "Dans cette rubrique, je vous invite à découvrir mes différents centres d'intérêt !"
//       }
//   };

//   // Elements to translate
//   const elementsToTranslate = {
//       greeting: document.querySelector('.intro h2'),
//       age: document.querySelector('.intro p:nth-child(2)'),
//       location: document.querySelector('.intro p:nth-child(3)'),
//       student: document.querySelector('.intro p:nth-child(4)'),
//       goal: document.querySelector('.intro p:nth-child(5)'),
//       about: document.querySelector('.menu a[href="#about"]'),
//       projects: document.querySelector('.menu a[href="#projects"]'),
//       skills: document.querySelector('.menu a[href="#skills"]'),
//       aboutHeading: document.querySelector('#about h2'),
//       aboutText1: document.querySelector('.about-content .about-text p'),
//       aboutText2: document.querySelector('.about-content2 .about2-text p'),
//       interestsHeading: document.querySelector('#about h2:nth-of-type(2)'),
//       interestBasketball: document.querySelector('.interest-item:nth-child(1) .overlay p'),
//       interestTravel: document.querySelector('.interest-item:nth-child(2) .overlay p'),
//       interestCooking: document.querySelector('.interest-item:nth-child(3) .overlay p'),
//       interestHumanitarian: document.querySelector('.interest-item:nth-child(4) .overlay p'),
//       projectsHeading: document.querySelector('#projects h2'),
//       businessProjectsText: document.querySelector('#business-projects p'),
//       researchProjectsText: document.querySelector('#research-projects p'),
//       businessProjects: document.querySelector('#business-projects-btn'),
//       researchProjects: document.querySelector('#research-projects-btn'),
//       interestsIntro: document.querySelector('.about-content3 p')
//   };

//   // Language change handler
//   const flags = document.querySelectorAll('.flag');
//   flags.forEach(flag => {
//       flag.addEventListener('click', () => {
//           const selectedLanguage = flag.alt === 'French Flag' ? 'fr' : 'en';
//           for (const [key, element] of Object.entries(elementsToTranslate)) {
//               element.textContent = translations[selectedLanguage][key];
//           }
//       });
//   });

//   // Projects section toggle
//   document.getElementById('projects-link').addEventListener('click', (event) => {
//       event.preventDefault();
//       document.getElementById('projects').style.display = 'block';
//   });

//   // Toggle between business and research projects
//   document.querySelector('.toggle-button').addEventListener('click', (event) => {
//       const isBusiness = event.target.id === 'business-projects-btn';
//       document.querySelector('.left-segment').classList.toggle('active', isBusiness);
//       document.querySelector('.right-segment').classList.toggle('active', !isBusiness);
//       document.getElementById('business-projects').style.display = isBusiness ? 'block' : 'none';
//       document.getElementById('research-projects').style.display = isBusiness ? 'none' : 'block';
//   });

//   // About section handling
//   document.getElementById('about-link').addEventListener('click', (event) => {
//       event.preventDefault();
//       document.getElementById('about').style.display = 'block';
//   });

//   // Projects display handling
//   let currentIndex = 0;
//   const projects = document.querySelectorAll('.project-item');

//   function showProject(index) {
//       projects.forEach((project, i) => {
//           project.style.display = (i === index) ? 'block' : 'none';
//       });
//   }

//   function nextProject() {
//       currentIndex = (currentIndex + 1) % projects.length;
//       showProject(currentIndex);
//   }

//   function prevProject() {
//       currentIndex = (currentIndex - 1 + projects.length) % projects.length;
//       showProject(currentIndex);
//   }

//   window.onload = () => {
//       showProject(currentIndex); // Show the first project on load
//   };

//   // Modal handling
//   function openModal(modalId) {
//       document.getElementById(modalId).style.display = "block";
//   }

//   function closeModal(modalId) {
//       document.getElementById(modalId).style.display = "none";
//   }

//   // Close modal when clicking outside of it
//   window.onclick = function(event) {
//       const modals = document.getElementsByClassName("modal");
//       for (let modal of modals) {
//           if (event.target === modal) {
//               modal.style.display = "none";
//           }
//       }
//   };

//   // Menu navigation for sections
//   document.querySelector('.menu a[href="#about"]').addEventListener('click', (event) => {
//       event.preventDefault();
//       document.getElementById('projects').style.display = 'none'; 
//       document.getElementById('about').style.display = 'block'; 
//   });

//   document.querySelector('.menu a[href="#projects"]').addEventListener('click', (event) => {
//       event.preventDefault();
//       document.getElementById('about').style.display = 'none'; 
//       document.getElementById('projects').style.display = 'block'; 
//   });

//   // Hide sections when clicking another menu link
//   document.querySelectorAll('.menu a').forEach(link => {
//       link.addEventListener('click', function() {
//           document.getElementById('about').style.display = 'none';
//           document.getElementById('projects').style.display = 'none';

//           if (this.getAttribute('href') === '#about') {
//               document.getElementById('about').style.display = 'block';
//           } else if (this.getAttribute('href') === '#projects') {
//               document.getElementById('projects').style.display = 'block';
//           }
//       });
//   });

//   // Default display settings
//   document.getElementById('about').style.display = 'block';
//   document.getElementById('projects').style.display = 'none';

//   // Project section toggle
//   const businessProjectsBtn = document.getElementById('business-projects-btn');
//   const researchProjectsBtn = document.getElementById('research-projects-btn');
//   const businessProjectsSection = document.getElementById('business-projects');
//   const researchProjectsSection = document.getElementById('research-projects');

//   businessProjectsBtn.addEventListener('click', () => {
//       businessProjectsSection.style.display = 'block';
//       researchProjectsSection.style.display = 'none';
//   });

//   researchProjectsBtn.addEventListener('click', () => {
//       businessProjectsSection.style.display = 'none';
//       researchProjectsSection.style.display = 'block';
//   });
// });


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            // greeting: "Hello, I'm Dounia 👋",
            // age: "🎂 I'm 22 years old",
            // location: "📍 I'm from Paris",
            // student: "🎓 I am an engineering student, passionate about web development, data, and artificial intelligence.",
            // goal: "I want to use my skills to help companies optimize their processes, thus improving their efficiency and productivity.",
            // about: "&lt;/&gt; About",
            // projects: "🖉 Projects / Experiences",
            // skills: "🖉 Skills",
            // aboutHeading: "About",
            // aboutText1: "This is where it all started, when I joined a preparatory class for the grandes écoles. I first followed the MPSI specialty - Mathematics, Physics and Engineering Sciences, before continuing in MP.<br><br>The pace, much more intense than in high school, pushed me to surpass myself. Today, I am very proud of this journey !",
            // aboutText2: "Afterwards, I joined ESILV, a superb engineering school. I chose the Data and Artificial Intelligence specialty there and I had the opportunity to be one of the establishment's student researchers.",
            // interestsHeading: "My Interests !",
            // interestBasketball: "Basketball, my sporting passion.",
            // interestTravel: "Exploring new cultures.",
            // interestCooking: "Cooking, my creative art.",
            // interestHumanitarian: "Helping others through humanitarian work.",
            // projectsHeading: "Projects",
            // businessProjectsText: "In this section, I invite you to discover my professional experiences.",
            // researchProjectsText: "In this section, I invite you to explore my research & development journey.",
            businessProjects: "Business Projects",  // Translation for the button
            researchProjects: "Research Projects", // Translation for the button
            // interestsIntro: "In this section, I invite you to discover my different interests!",


            // data_quality_description: 'Automation of data quality control',
            // urbanbot_description: 'Developing a chatbot MVP (Minimum Viable Product)',

            // description: "MMGait: A Multi-Modal Approach for Gait Recognition with Structural and Dynamic Features."
                    
        },
        fr: {   
            // greeting: "Salut, je suis Dounia 👋",
            // age: "🎂 J'ai 22 ans",
            // location: "📍 Je viens de Paris",
            // student: "🎓 Je suis étudiante en ingénierie, passionnée par le développement web, la data et l'intelligence artificielle.",
            // goal: "Je souhaite mettre à profit mes compétences pour aider les entreprises à optimiser leurs processus, améliorant ainsi leur efficacité et leur productivité.",
            // about: "&lt;/&gt; A propos",
            // projects: "🖉 Projets / Expériences",
            // skills: "🖉 Compétences",
            // aboutHeading: "À propos",
            // aboutText1: "C'est ici que tout a commencé, lorsque j'ai intégré une classe préparatoire aux grandes écoles.J'ai d'abord suivi la spécialité MPSI - Mathématiques, Physique et Sciences de l'Ingénieur, avant de poursuivre en MP.<br><br>Le rythme, bien plus intense qu'au lycée, m'a poussée à me surpasser. Aujourd'hui, je suis très fière de ce parcours !<br>",
            // aboutText2: "Par la suite, j'ai intégré l'ESILV, une superbe école d'ingénieurs. J'y ai choisi la spécialité en Data et Intelligence Artificielle et j'ai eu l'opportunité de faire partie des étudiants-chercheurs de l'établissement.",
            // interestsHeading: "Mes centres d'intérêts !",
            // interestBasketball: "Le basketball, ma passion sportive.",
            // interestTravel: "Explorer de nouvelles cultures.",
            // interestCooking: "La cuisine, mon art créatif.",
            // interestHumanitarian: "S'engager pour aider les autres.",
            // projectsHeading: "Projets",
            // businessProjectsText: "Dans cette rubrique, je vous invite à découvrir mes expériences professionnelles.",
            // researchProjectsText: "Dans cette rubrique, je vous invite à découvrir mon parcours en Recherche & Développement.",
            businessProjects: "Projets en entreprise",  // Translation for the button
            researchProjects: "Projets de recherche", // Translation for the button  
            // interestsIntro: "Dans cette rubrique, je vous invite à découvrir mes différents centres d'intérêt !",

            // data_quality_description: 'Automatisation du contrôle de qualité de données',
            // urbanbot_description: 'Réaliser un MVP (Minimum Viable Product) du chatbot',


            // description: "MMGait : Une approche multimodale pour la reconnaissance de la démarche avec des caractéristiques structurelles et dynamiques."
               
        }
    };
  
    // Elements to translate
    const elementsToTranslate = {
        // greeting: document.querySelector('.intro h2'),
        // age: document.querySelector('.intro p:nth-child(2)'),
        // location: document.querySelector('.intro p:nth-child(3)'),
        // student: document.querySelector('.intro p:nth-child(4)'),
        // goal: document.querySelector('.intro p:nth-child(5)'),
        // about: document.querySelector('.menu a[href="#about"]'),
        // projects: document.querySelector('.menu a[href="#projects"]'),
        // skills: document.querySelector('.menu a[href="#skills"]'),
        // aboutHeading: document.querySelector('#about h2'),
        // aboutText1: document.querySelector('.about-content .about-text p'),
        // aboutText2: document.querySelector('.about-content2 .about2-text p'),
        // interestsHeading: document.querySelector('#about h2:nth-of-type(2)'),
        // interestBasketball: document.querySelector('.interest-item:nth-child(1) .overlay p'),
        // interestTravel: document.querySelector('.interest-item:nth-child(2) .overlay p'),
        // interestCooking: document.querySelector('.interest-item:nth-child(3) .overlay p'),
        // interestHumanitarian: document.querySelector('.interest-item:nth-child(4) .overlay p'),
        // projectsHeading: document.querySelector('#projects h2'),
        // businessProjectsText: document.querySelector('#business-projects p'),
        // researchProjectsText: document.querySelector('#research-projects p'),
        businessProjects: document.querySelector('#business-projects-btn'),
        researchProjects: document.querySelector('#research-projects-btn'),
        // interestsIntro: document.querySelector('.about-content3 p'),
        // projectDescription1: document.querySelector('.project-item h2')

    };
  
    // Language change handler
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const selectedLanguage = flag.alt === 'French Flag' ? 'fr' : 'en';
            for (const [key, element] of Object.entries(elementsToTranslate)) {
                element.textContent = translations[selectedLanguage][key];
            }
            for (const [key, element] of Object.entries(elementsToTranslate)) {
                element.innerHTML = translations[selectedLanguage][key];
            }
            
        }); 
    });
  


    // Projects section toggle
    document.getElementById('projects-link').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('projects').style.display = 'block';
    });
  
    // Toggle between business and research projects
    document.querySelector('.toggle-button').addEventListener('click', (event) => {
        const isBusiness = event.target.id === 'business-projects-btn';
        document.querySelector('.left-segment').classList.toggle('active', isBusiness);
        document.querySelector('.right-segment').classList.toggle('active', !isBusiness);
        document.getElementById('business-projects').style.display = isBusiness ? 'block' : 'none';
        document.getElementById('research-projects').style.display = isBusiness ? 'none' : 'block';
    });
  
    // About section handling
    document.getElementById('about-link').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('about').style.display = 'block';
    });
  
    // Projects display handling
    let currentIndex = 0;
    const projects = document.querySelectorAll('.project-item');
  
    function showProject(index) {
        projects.forEach((project, i) => {
            project.style.display = (i === index) ? 'block' : 'none';
        });
    }
  
    function nextProject() {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
    }
  
    function prevProject() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        showProject(currentIndex);
    }
  
    window.onload = () => {
        showProject(currentIndex); // Show the first project on load
    };
  
    // // Modal handling
    // function openModal(modalId) {
    //     document.getElementById(modalId).style.display = "block";
    // }
  
    // function closeModal(modalId) {
    //     document.getElementById(modalId).style.display = "none";
    // }
  
    // // Close modal when clicking outside of it
    // window.onclick = function(event) {
    //     const modals = document.getElementsByClassName("modal");
    //     for (let modal of modals) {
    //         if (event.target === modal) {
    //             modal.style.display = "none";
    //         }
    //     }
    // };
  
    // Menu navigation for sections
   // Écouteur pour 'À propos'
document.querySelector('.menu a[href="#about"]').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('projects').style.display = 'none'; 
    document.getElementById('skills').style.display = 'none'; 
    document.getElementById('about').style.display = 'block'; 
});

// Écouteur pour 'Projets/Expériences'
document.querySelector('.menu a[href="#projects"]').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('about').style.display = 'none'; 
    document.getElementById('skills').style.display = 'none'; 
    document.getElementById('projects').style.display = 'block'; 
});

// Écouteur pour 'Compétences'
document.querySelector('.menu a[href="#skills"]').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('about').style.display = 'none'; 
    document.getElementById('projects').style.display = 'none'; 
    document.getElementById('skills').style.display = 'block'; 
});

// Masquer toutes les sections et afficher la section sélectionnée
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('about').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('skills').style.display = 'none';

        if (this.getAttribute('href') === '#about') {
            document.getElementById('about').style.display = 'block';
        } else if (this.getAttribute('href') === '#projects') {
            document.getElementById('projects').style.display = 'block';
        } else if (this.getAttribute('href') === '#skills') {
            document.getElementById('skills').style.display = 'block';
        }
    });
});

// Paramètres d'affichage par défaut
document.getElementById('about').style.display = 'block';
document.getElementById('projects').style.display = 'none';
document.getElementById('skills').style.display = 'none';

  
    // Project section toggle
    const businessProjectsBtn = document.getElementById('business-projects-btn');
    const researchProjectsBtn = document.getElementById('research-projects-btn');
    const businessProjectsSection = document.getElementById('business-projects');
    const researchProjectsSection = document.getElementById('research-projects');
  
    businessProjectsBtn.addEventListener('click', () => {
        businessProjectsSection.style.display = 'block';
        researchProjectsSection.style.display = 'none';
    });
  
    researchProjectsBtn.addEventListener('click', () => {
        businessProjectsSection.style.display = 'none';
        researchProjectsSection.style.display = 'block';
    });
  });
  
  
  //pour le modal 
  function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
          modal.style.display = "block";
      }
  }
  
  function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
          modal.style.display = "none";
      }
  }
  
  // Ferme le modal lorsque l'utilisateur clique en dehors de celui-ci
  window.onclick = function(event) {
      const modals = document.getElementsByClassName("modal");
      for (let i = 0; i < modals.length; i++) {
          if (event.target == modals[i]) {
              modals[i].style.display = "none";
          }
      }
  }
  
// test projet ok ! 
let currentIndex = 0;
const projects = document.querySelectorAll('.project-item');

function showProject(index) {
    projects.forEach((project, i) => {
      project.style.display = (i === index) ? 'block' : 'none'; // Utilisation de 'display' au lieu de 'classList'
    });
  }
  

function nextProject() {
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(currentIndex);
}

function prevProject() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(currentIndex);
}

window.onload = () => {
  showProject(currentIndex); // Affiche le premier projet au chargement
};


// test switcher de langue
function changeLanguage(lang) {
    document.documentElement.lang = lang;
  
    // Met à jour le texte des voiles
    document.querySelectorAll('.square').forEach(function(element) {
      const newText = element.getAttribute('data-' + lang);
      if (newText) {
        element.setAttribute('data-text', newText);
      }
    });
  
    // Met à jour le texte des autres éléments
    document.querySelectorAll('[data-' + lang + ']').forEach(function(element) {
      const newText = element.getAttribute('data-' + lang);
      if (newText) {
        element.textContent = newText;
        element.innerHTML = newText.replace(/\\n/g, '<br>'); // Remplace \n par <br>

      }
    });
  }
  
  // Ajoute des écouteurs d'événements pour les drapeaux
  document.getElementById('fr-toggle').addEventListener('click', function() {
    changeLanguage('fr');
  });
  
  document.getElementById('en-toggle').addEventListener('click', function() {
    changeLanguage('en');
  });
  
  // Initialiser la langue par défaut lors du chargement de la page
  window.addEventListener('load', function() {
    changeLanguage('fr'); // Initialisation en français
  });
  

//   pour contact
document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le défilement automatique
    const contactSection = document.getElementById('contact');
    contactSection.classList.toggle('contact-hidden'); // Affiche ou masque la section contact
    contactSection.scrollIntoView({ behavior: 'smooth' }); // Fait défiler la page vers la section contact
});

