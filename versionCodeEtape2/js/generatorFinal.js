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
    var typeCitation = choiceType()
    var numberCitations = numberChoice()

    for (var i = 1; i <= numberCitations; i++) {
        if (typeCitation === "triste") {
            var debut = debutTriste[Math.floor(Math.random() * debutTriste.length)];
            var milieu = milieuTriste[Math.floor(Math.random() * milieuTriste.length)];
            var fin = finTriste[Math.floor(Math.random() * finTriste.length)];
            console.log(debut + " " + milieu + " " + fin)
        } else if (typeCitation === "comique") {
            var debut = debutComique[Math.floor(Math.random() * debutComique.length)];
            var milieu = milieuComique[Math.floor(Math.random() * milieuComique.length)];
            var fin = finComique[Math.floor(Math.random() * finComique.length)];
            console.log(debut + " " + milieu + " " + fin)
        }
    }
    setTimeout(start, 500)
    /*
    Pourquoi utiliser setTimeout:
    He issue is that the UI is being updated faster than the JavaScript is executing 
    and this is causing a problem syncing with the console.log statements.

    This happens because the JavaScript runtime is not responsible for updating the UI, 
    that's the browsers job and so once the JavaScript asks the browser to update the UI (display the prompt), 
    it does it very quickly and since a propmt is a "blocking" dialog, all other code is suspended.
    Chrome started to show Violations (depuis novembre 2016):
    long tasks which block the UI thread and other critical tasks from being executed
    https://twitter.com/malyw/status/800421380902645760
    nota bene: Ces violations ne sont pas visible sous Firefox par exemple.
    */
};

// Fonction pour démarrer le programme

function start() {
    var saisie = Number(prompt("Souhaitez-vous générer des citations aléatoires? \nTapez 1 pour oui \nTapez 2 pour non"));
    if (saisie === 1) {
        generator()
    } else if (saisie === 2) {
        console.log("Tant pis! Ce sera pour une autre fois!")
    } else {
        alert("Je ne vous ai pas compris!")
        start()
    }
}

// Fonction pour choisir le Type de Citation
function choiceType() {
    var type = Number(prompt("Vous préférez des citations comiques ou tristes? \nTapez 1 pour Comique \nTapez 2 pour Triste"));
    if (type === 1) {
        return "comique"
    } else if (type === 2) {
        return "triste"
    } else {
        alert("Attention Choisissez: \n1 (Comique) \n2 (Triste)");
        return choiceType()
        /* pourquoi return: au lieu de rappeler simplement la function 
        en cas d'erreur il faut juste la mettre sous la forme return function() 
        car si pas de return à la fin d'une function qui defini une variable le langage renvoi un undefined */
    }
}

// Fonction pour choisir le nombre de citation(s) souhaitée(s)

function numberChoice() {
    var nbCitation = Number(prompt("Saissez le nombre de citations aléatoires souhaitées (Entre 1 et 5)"));
    if ((nbCitation <= 5) && (nbCitation > 0)) {
        return nbCitation
    } else if ((nbCitation > 5) || (nbCitation <= 0)) {
        alert("Attention le nombre doit être compris entre 1 et 5!");
        return numberChoice()
    } else {
        alert("Attention, rentrez bien un nombre alphanumérique de type: 1, 2, 3, 4, 5!");
        return numberChoice()
    }
}

// Pour démarrer le programme:
start()