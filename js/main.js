// chiedo il nome
const firstName = prompt("Inserisci il tuo nome");
// chiedo il cognome
const lastName = prompt("Inserisci il tuo cognome");
// chiedo il suo colore preferito
const bestColor = prompt("Inserisci il tuo colore preferito");
// chiedo l'anno di nascita
const birthYear = prompt("Inserisci il tuo anno di nascita");
// scrivo sulla pagina il tutto
const allTogether = `${firstName} ${lastName} ${bestColor} ${birthYear}`;
document.getElementById('your-info').innerHTML = allTogether;
