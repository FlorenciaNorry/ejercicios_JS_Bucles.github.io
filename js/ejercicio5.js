let div = 0;
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
do {
    let dni = parseInt(prompt("Ingrese un dni"));
    if (!isNaN(dni)) {
        if (dni > 0 && dni < 99999999) {
            div = dni % 23;
            alert("la letra correspondinte al dni " + dni + " es: " + letras[div]);
        } else {
            alert("el numero debe estar entre 0 y 99999999");
        }
    }else{
        alert("Debe ingresar un numero");
    }
    conf = confirm("¿desea ingresar otro dni?");
} while (conf);