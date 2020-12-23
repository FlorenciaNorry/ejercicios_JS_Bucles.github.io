let texto = prompt("Ingrese un texto");
let long = texto.length;
for(i=0; i<long; i++){
    if(texto.substr(i,1) === "a" || texto.substr(i,1) === "e" || texto.substr(i,1) === "i" || texto.substr(i,1) === "o" || texto.substr(i,1) === "u" ){ 
        document.write(i); 
    }   
}
