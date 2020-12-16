op=true;
while(op){
    let edad = prompt("Ingrese su edad");
    if(isNaN(edad)){
        alert("el valor ingresado no es valido, intente nuevamente"); 
    }else if(edad>=18 && edad<=80){
        document.write("puede conducir");
        op=false;
    }else{
        document.write("no puede conducir");
        op=false;
    }
}
