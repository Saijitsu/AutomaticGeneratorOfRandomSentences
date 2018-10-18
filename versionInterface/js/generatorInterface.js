// type COMIQUE
var debutComique = ["L’air", "Un cri", "Une dinde", "Une trottinette", "La crotte"];
var milieuComique = ["roule", "chante", "saute", "pète", "danse"];
var finComique = ["sur un toit.", "dans la rue.", "en pleine mer.", "aux champs elysées.", "à Matignon."];

// type TRISTE
var debutTriste = ["Le chiot", "L’enfant", "La cadillac", "L’oeuvre d’art", "Un navire"];
var milieuTriste = ["pleure souvent", "se blesse toujours", "se brise", "chute", "est vide"];
var finTriste = ["au crépuscule.", "à l’aube de ce jour nouveau.", "quand il pleut.", "si le vent souffle.", "dès que la cloche sonne."];

// Le générateur de citation(s)

function generator() {
    //Choix par l'utilisateur du type de citation
    var type = document.getElementById("type");
    var typeCitation = type[type.selectedIndex].value;

    // Choix par l'utilisateur du nombre de citation(s)
    var nbCitation = document.getElementById("nbCitation");
    var numberCitation = nbCitation[nbCitation.selectedIndex].value;

    for (var i = 1; i <= numberCitation; i++) {
        if (typeCitation === "triste") {
            var debut = debutTriste[Math.floor(Math.random() * debutTriste.length)];
            var milieu = milieuTriste[Math.floor(Math.random() * milieuTriste.length)];
            var fin = finTriste[Math.floor(Math.random() * finTriste.length)];
            // Modification du Style via JS:
            var resultId = document.getElementById("result");
            resultId.style.fontFamily = "Comic Sans MS";
            resultId.style.fontStyle = "Italic";
            resultat(debut, milieu, fin)

        } else if (typeCitation === "comique") {
            var debut = debutComique[Math.floor(Math.random() * debutComique.length)];
            var milieu = milieuComique[Math.floor(Math.random() * milieuComique.length)];
            var fin = finComique[Math.floor(Math.random() * finComique.length)];
            // Modification du Style via JS:
            var resultId = document.getElementById("result");
            resultId.style.fontFamily = "Georgia";
            resultId.style.fontStyle = "Normal";
            resultat(debut, milieu, fin)
        }
    }
};

// Création des éléments de la liste et insertion dans HTML

function resultat(debut, milieu, fin) {
    var setResult = document.createElement("li"); // Création d'un élément li
    setResult.textContent ="\""+ debut + " " + milieu + " " + fin + "\""; // Définition de son contenu textuel
    document.getElementById("result").appendChild(setResult); // Insertion du nouvel élément
}


// Pour démarrer le programme:
document.getElementById("bouton").addEventListener("click", programm);

function programm() {

    // Vider le contenu précédement affiché sur l'interface utilisateur
    document.getElementById("result").innerHTML = "";
    generator()
};