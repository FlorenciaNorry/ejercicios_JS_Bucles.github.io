let fila = parseInt(prompt("Ingrese un numero de fila"));
let columna = parseInt(prompt("Ingrese un numero de columna"));
resul = fila * columna; 

for (i = 0; i < fila; i++) {
    document.write("<br>")
    for (j = 0; j < columna; j++){
        document.write(resul + " - ");
        resul--;
    }
}
