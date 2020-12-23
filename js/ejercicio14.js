let texto = prompt("Ingrese un texto");
let ltexto = texto.split("");
    document.write('<p>La cadena original es: "' + texto + '"');
   document.write("<br>El array tiene " + ltexto.length + " elementos: ");

   for (let i=0; i < ltexto.length; i++) {
      document.write(ltexto[i] + " - ");
   }



// for (i= 0; i<texto.length; i++){
//     let cadena = texto.split();
//     document.write(cadena + " - ")
// }
