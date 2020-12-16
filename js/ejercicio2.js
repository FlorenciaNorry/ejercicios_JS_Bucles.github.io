ciclo = true;
while (ciclo){
    let nota = prompt("Ingrese una nota");
if (nota >= 0 && nota <= 10) {
    if (nota < 3) {
        document.write("Muy deficiente");
        ciclo(false);
    } else if (nota < 5) {
        document.write("insuficiente");
        ciclo(false);
    } else if (nota < 7) {
        document.write("suficiente");
        ciclo(false);
    } else if (nota < 8) {
        document.write("Bien");
        ciclo(false);
    } else if (nota < 10) {
        document.write("Notable");
        ciclo(false);
    } else {
        document.write("Sobresaliente");
        ciclo(false);
    }
} else {
    alert("La nota ingresada debe ser entre 0 y 10");
}

}
