let cont = 0;
do{
    let numero = parseInt(prompt("Ingrese un numero"));
    if(!isNaN(numero)){
        cont += numero;
    }else{
        alert("debe ingresar un numero")
    }
    val=confirm("¿desea ingresar otro numero?")
}while(val);
document.write(cont);