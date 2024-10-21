// script.js

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            greeting: "Hello, I'm Dounia 👋",
            age: "🎂 I'm 22 years old",
            location: "📍 I'm from Paris",
            student: "🎓 I am an engineering student, passionate about web development, data, and artificial intelligence.",
            goal: "I want to use my skills to help companies optimize their processes, thus improving their efficiency and productivity.",
            about: "</> About",
            projects: "🖉 Projects / Experiences",
            skills: "🖉 Skills",
            aboutHeading: "About",
            aboutText1: "This is where it all started, when I joined a preparatory class for engineering schools.",
            aboutText2: "Later, I joined ESILV, a great engineering school.",
            interestsHeading: "My Interests !",
            interestBasketball: "Basketball, my sporting passion.",
            interestTravel: "Exploring new cultures.",
            interestCooking: "Cooking, my creative art.",
            interestHumanitarian: "Helping others through humanitarian work.",
            projectsHeading: "Projects",
            businessProjectsText: "In this section, I invite you to discover my professional experiences.",
            researchProjectsText: "In this section, I invite you to explore my research & development journey.",
            businessProjects: "Business Projects",  // Traduction pour le bouton
            researchProjects: "Research Projects", // Traduction pour le bouton
            interestsIntro: "In this section, I invite you to discover my different interests!"
        },
        fr: {   
            greeting: "Salut, je suis Dounia 👋",
            age: "🎂 J'ai 22 ans",
            location: "📍 Je viens de Paris",
            student: "🎓 Je suis étudiante en ingénierie, passionnée par le développement web, la data et l'intelligence artificielle.",
            goal: "Je souhaite mettre à profit mes compétences pour aider les entreprises à optimiser leurs processus, améliorant ainsi leur efficacité et leur productivité.",
            about: "</> À propos",
            projects: "🖉 Projets / Expériences",
            skills: "🖉 Compétences",
            aboutHeading: "À propos",
            aboutText1: "C'est ici que tout a commencé, lorsque j'ai intégré une classe préparatoire aux grandes écoles.",
            aboutText2: "Par la suite, j'ai intégré l'ESILV, une superbe école d'ingénieurs.",
            interestsHeading: "Mes centres d'intérêts !",
            interestBasketball: "Le basketball, ma passion sportive.",
            interestTravel: "Explorer de nouvelles cultures.",
            interestCooking: "La cuisine, mon art créatif.",
            interestHumanitarian: "S'engager pour aider les autres.",
            projectsHeading: "Projets",
            businessProjectsText: "Dans cette rubrique, je vous invite à découvrir mes expériences professionnelles.",
            researchProjectsText: "Dans cette rubrique, je vous invite à découvrir mon parcours en Recherche & Développement.",
            businessProjects: "Projets en entreprise",  // Traduction pour le bouton
            researchProjects: "Projets de recherche", // Traduction pour le bouton  
            interestsIntro: "Dans cette rubrique, je vous invite à découvrir mes différents centres d'intérêt !"
        }
    };


    const elementsToTranslate = {
        greeting: document.querySelector('.intro h2'),
        age: document.querySelector('.intro p:nth-child(2)'),  // Deuxième paragraphe
        location: document.querySelector('.intro p:nth-child(3)'),  // Troisième paragraphe
        student: document.querySelector('.intro p:nth-child(4)'),  // Quatrième paragraphe
        goal: document.querySelector('.intro p:nth-child(5)'),  // Cinquième paragraphe
        about: document.querySelector('.menu a[href="#about"]'),
        projects: document.querySelector('.menu a[href="#projects"]'),
        skills: document.querySelector('.menu a[href="#skills"]'),
        aboutHeading: document.querySelector('#about h2'),
        aboutText1: document.querySelector('.about-content .about-text p'),
        aboutText2: document.querySelector('.about-content2 .about2-text p'),
        interestsHeading: document.querySelector('#about h2:nth-of-type(2)'),
        interestBasketball: document.querySelector('.interest-item:nth-child(1) .overlay p'),
        interestTravel: document.querySelector('.interest-item:nth-child(2) .overlay p'),
        interestCooking: document.querySelector('.interest-item:nth-child(3) .overlay p'),
        interestHumanitarian: document.querySelector('.interest-item:nth-child(4) .overlay p'),
        projectsHeading: document.querySelector('#projects h2'),
        businessProjectsText: document.querySelector('#business-projects p'),
        researchProjectsText: document.querySelector('#research-projects p'),
        businessProjects: document.querySelector('#business-projects-btn'),  // Sélecteur pour le bouton Projets en entreprise
        researchProjects: document.querySelector('#research-projects-btn'),  // Sélecteur pour le bouton Projets de recherche
        interestsIntro: document.querySelector('.about-content3 p') // Assure-toi que cela est correct
    };

    // Gestion du changement de langue
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const selectedLanguage = flag.alt === 'French Flag' ? 'fr' : 'en';
            for (const [key, element] of Object.entries(elementsToTranslate)) {
                element.textContent = translations[selectedLanguage][key];
            }
        });
    });
});

//Pour la partie Projets 
document.getElementById('projects-link').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut de l'ancre
    document.getElementById('projects').style.display = 'block'; // Affiche la section des projets
});
// Function to handle toggling between the two segments
document.querySelector('.toggle-button').addEventListener('click', function(event) {
    if (event.target.id === 'business-projects-btn' || event.target.id === 'research-projects-btn') {
        // Toggle active class between the two segments
        document.querySelector('.left-segment').classList.toggle('active', event.target.id === 'business-projects-btn');
        document.querySelector('.right-segment').classList.toggle('active', event.target.id === 'research-projects-btn');
        
        // Show or hide the appropriate project section
        document.getElementById('business-projects').style.display = event.target.id === 'business-projects-btn' ? 'block' : 'none';
        document.getElementById('research-projects').style.display = event.target.id === 'research-projects-btn' ? 'block' : 'none';
    }
});


// A propos 
// document.querySelector('.menu a[href="#about"]').addEventListener('click', function(event) {
//     event.preventDefault();  // Cela empêche le comportement par défaut, donc le scroll automatique ne fonctionnera pas
// });

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut de l'ancre
    document.getElementById('about').style.display = 'block'; // Affiche la section des projets
});

/*projets*/
let currentIndex = 0;
const projects = document.querySelectorAll('.project-item');

// function showProject(index) {
//   projects.forEach((project, i) => {
//     project.classList.remove('active');
//     if (i === index) {
//       project.classList.add('active');
//     }
//   });
// }
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
