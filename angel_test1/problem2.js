//Given an array of integers, find the sum of its elements, max and min values.
//For example, if the array ar=[1,2,3], 1+2+3=6 so return 6 3 1.

var ar = [10, 2, 3, 4, 8, 2];

function suma(ar){
    let suma = 0; 
    for(let i = 0; i < ar.length; i++)
    suma += ar[i];

return suma
}

var min = Math.min(...ar);
var max = Math.max(...ar);
console.log("Total: " + suma(ar), "Max: " + max, "Min: " + min);

