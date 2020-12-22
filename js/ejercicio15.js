let texto = prompt("Ingrese un texto");
let frase = texto.length;
let cont = 0;
let i;
for (i = 0; i < frase; i++) {
    if (texto.substr(i, 1) === "a" || texto.substr(i, 1) === "e" || texto.substr(i, 1) === "i" || texto.substr(i, 1) === "o" || texto.substr(i, 1) === "u") {
        cont = cont + 1
    }
}
document.write("La cantidad de volcales qeu tiene el texto es " + cont);