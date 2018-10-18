// Les trois morceaux qui vont se combiner pour créer une phrase intelligible!

var debut = ["L’air", "Un cri", "Une dinde", "Une trottinette", "La crotte"];
var milieu = ["roule", "chante", "saute", "pète", "danse"];
var fin = ["sur un toit.", "dans la rue.", "en pleine mer.", "aux champs elysées.", "à Matignon."];

function generator() {
    var debutRandom = debut[Math.floor(Math.random() * debut.length)];
    var milieuRandom = milieu[Math.floor(Math.random() * milieu.length)];
    var finRandom = fin[Math.floor(Math.random() * fin.length)];
    console.log(debutRandom + " " + milieuRandom + " " + finRandom)
}

/* 
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
 Math.random() used with Math.floor() can be used to return random integers. 
 https://www.w3schools.com/code/tryit.asp?filename=FTECVP551HEW
*/

// Pour générer une phrase: generator();
