function genererNombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let premiereCitation  = "\"La vie est un mystère qu'il faut vivre, et non un problème à résoudre\"";
let deuxiemeCitation  = "\" L'homme est un loup pour l'homme.\"";
let troisiemeCitation = "\"Rien de grand ne s'est accompli dans le monde sans passion.\"";
let quatriemeCitation = "\" L'homme n'est pas né pour le repos.\"";
let cinquiemeCitation = "\"Tout vrai regard est un désir.\"";
let sixiemeCitation   = "\"À vaincre sans péril, on triomphe sans gloire.\"";
let septiemeCitation  = "\"Ceux qui ne peuvent se souvenir du passé sont condamnés à le répéter.\"";
let huitiemeCitation  = "\"Un problème sans solution est un problème mal posé.\"";
let neuviemeCitation  = "\"Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.\"";
let dixiemeCitation   = "\"Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.\"";

let premierAuteur     = "Gandhi";
let deuxiemeAuteur    = "Plaute";
let troisiemeAuteur   = "Hegel";
let quatriemeAuteur   = "Voltaire";
let cinquiemeAuteur   = "Alfred de Musset";
let sixiemeAuteur     = "Pierre Corneille";
let septiemAuteur     = "George Santayana";
let huitiemeAuteur    = "Albert Einstein";
let neuviemeAuteur    = "Nelson Mandela";
let dixiemeAuteur     = "Gandhi";

let citations = [
    [premiereCitation, premierAuteur],
    [deuxiemeCitation, deuxiemeAuteur],
    [troisiemeCitation, troisiemeAuteur],
    [quatriemeCitation, quatriemeAuteur],
    [cinquiemeCitation, cinquiemeAuteur],
    [sixiemeCitation, sixiemeAuteur],
    [septiemeCitation, septiemAuteur],
    [huitiemeCitation, huitiemeAuteur],
    [neuviemeCitation, neuviemeAuteur],
    [dixiemeCitation, dixiemeAuteur]
];

let boutonNouvelleCitation = document.querySelector('#bouton_nouvelle_citation');
let citationAffichee       = document.querySelector('#citation');
let auteur                 = document.querySelector('#auteur');

let nombreAléatoire = 0;
let dernier         = 0;

boutonNouvelleCitation.addEventListener('click', () => {
    do {
        nombreAléatoire = genererNombreAleatoire(citations.length);
    }while(dernier == nombreAléatoire);

    citationAffichee.textContent = citations[nombreAléatoire][0];
    auteur.textContent           = citations[nombreAléatoire][1];
    dernier                      = nombreAléatoire;
});





