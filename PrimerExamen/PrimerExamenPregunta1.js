var hora1 = "04:56:12:AM";
var hora2 = "12:13:53:PM";
var hora3 = "12:32:25:AM";


result1 = conversion(hora1);
console.log(result1);

result2 = conversion(hora2);
console.log(result2);

result3 = conversion(hora3);
console.log(result3);

function conversion(time){
    
    var resultado ="";
    h1 = parseInt(time[0]);
    h2 = parseInt(time[1]);
    if (time[0]==1 && time[1]==2 && time[9]== "A"){
        h1 = 0;
        h2 = 0;
    } else if (time[9]== "P"){
        h1 += 1;
        h2 += 2;
    } else if (time[9]== "A"){
    }
    resultado=resultado.concat(h1);
    resultado=resultado.concat(h2);

    for (i = 2; i < time.length-3; i++){
         resultado=resultado.concat(time[i]);
     }
    
    return resultado;
}