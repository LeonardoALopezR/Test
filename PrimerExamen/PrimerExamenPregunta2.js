var arreglo = [10,2,3,4,8,2];
fun = funcion(arreglo);

function funcion(arre){
    max = arre[0];
    min = arre[0];
    sum = arre[0];
    for(i=1; i<arre.length; i++){
        sum = sum + arre[i];
        if (max <= arre[i]){
            max=arre[i];
        }
        if (min >= arre[i]){
            min=arre[i];
        }
    }
    
    console.log(sum, max, min)

}