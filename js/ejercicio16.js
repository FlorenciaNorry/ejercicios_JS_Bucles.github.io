let reversa="";
let texto = prompt("Ingrese un texto");
for (let i = texto.length - 1; i >= 0; i--) {
    reversa += texto[i];
    
}

document.write(reversa);