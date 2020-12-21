let listaedad = [];
let listanombre = [];
for (i = 0; i < 3; i++) {
    let edad = parseInt(prompt("Ingrese la edad"));
    let nombre = prompt("Ingrese el nombre");
    listaedad[i] = edad;
    listanombre[i] = nombre;
}
let max = Math.max(...listaedad);
for (i = 0; i < listanombre.length; i++) {
    if(listaedad[i] == max){
        nom = listanombre[i];
        document.write("el nombre del mayor es " + nom + " con " + max + " años ");
    }
}

