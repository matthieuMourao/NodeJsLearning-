const prompt = require('prompt-sync')();

const prenom = prompt("Quel est ton prénom ?");
const nom = prompt("Quel est ton nom ?");
const age = prompt("Quel est ton age ?");
const origine = prompt("Quel est ton origine ?");

console.log('Salut ' +prenom +nom,' , tu as ' +age, ' ans et tu est ' +origine );