const prompt = require('prompt-sync')();

const nombreA = prompt(" donnez un premier nombre ");
const nombreB = prompt(" donnez un deuxième nombre ");

const somme = ((nombreA)+(nombreB));

console.log ( +nombreA, ' + ', +nombreB, ' = ', +somme,);