let frases = [];
let con = 0;
let val;

do {
    let texto = prompt("Escriba una frase");
    frases[con] = texto;
    con++;
    val=confirm("desea continuar");
    }while(val);

for (i = 0; i < frases.length; i++) {
    document.write(frases[i] + " - ");
}
