let numero = parseInt(prompt("Ingrese un numero"));
for (i = 1; i <= numero; i++) {
    document.write("<br>");
    for (j = 0; j < i; j++) {
        document.write(j+1);
}
}