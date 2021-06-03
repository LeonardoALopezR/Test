var num = 7;
var char = "." ;
var piso = "";

for (i=0; i < num ; i++){
    for (j=1; j< num-i;j++){
        process.stdout.write(" ");
    }
    piso = piso.concat(char);
    console.log(piso);
}
console.log("Al revés")
for (k=0;k<num;k++){
    for (m=0; m<k;m++){
        process.stdout.write(" ");
    }
    for(l=0; l<num-k;l++){
        process.stdout.write(".");
    }
    
    console.log(" ");
}