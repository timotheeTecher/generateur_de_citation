function genererNombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let premiereCitation  = "\"La vie est un mystère qu'il faut vivre, et non un problème à résoudre\"";
let deuxiemeCitation  = "\"La ou la fé un lérèr ah ahahahahahahaha\"";
let troisiemeCitation = "\"Chef ! Ou fé vélo ou ? Fé vélo ou ? Eske ou gainy cab-haut ?\"";
let quatriemeCitation = "\"Aou Esteban ! Garde a mwin bien dan mon gueule la hin !\"";
let cinquiemeCitation = "\"Ban trin koifé don ! Casse mon léfé !\"";
let sixiemeCitation   = "\"Le chien i trap pa mwn\"";
let septiemeCitation  = "\"Shaina ? Je peux te traper demain ?\"";
let huitiemeCitation  = "\"Uii kel heure ?\"";
let neuviemeCitation  = "\"Midi.\"";
let dixiemeCitation   = "\"Et ma di aou un nafèr depuis talèr la woin woin woin, mais la ou pou baisse la queue alors ?\"";

let premierAuteur     = "Gandhi";
let deuxiemeAuteur    = "Georgio";
let troisiemeAuteur   = "Lionel Messi";
let quatriemeAuteur   = "Giovani di vani";
let cinquiemeAuteur   = "Josian";
let sixiemeAuteur     = "Le tangue 974";
let septiemAuteur     = "Custom Car 974";
let huitiemeAuteur    = "Shaina";
let neuviemeAuteur    = "Custom Car 974";
let dixiemeAuteur     = "Custom Car 974";

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





