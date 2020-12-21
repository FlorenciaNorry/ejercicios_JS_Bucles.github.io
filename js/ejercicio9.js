let cont = 1;
for (i = 1; i <= 500; i++) {
    if (i % 4 == 0) {
        document.write(i + " es multiplo de 4");
    } else if (i % 9 == 0) {
        document.write(i + " es multiplo de 9");
    } else {
        document.write(i);
    } 
    if(cont == 5){
        document.write(" -");
        cont = 1;
    }else{
        cont++;
    }
    document.write("<br>");

}

