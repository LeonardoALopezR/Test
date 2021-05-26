/*
 * Made by Ildefonso Castro Bouquet 26/05/2021
 */

/*
 * Given an array of integers, find the sum of its elements, max and min values.
 * 
 * For example, if the array ar=[1,2,3], 1+2+3=6 so return 6 3 1.
 * 
 * Example Input
 * [10,2,3,4,8,2]
 * 
 * Example Output
 * 29 10 2
 * 
 * Extra
 * Use arrow functions
 */

//  Variables
var ar = [10, 2, 3, 4, 8, 2];
var suma=0;
var max, min;

for (i = 0; i < ar.length; i++){
  suma += ar[i];//Toatl add
  if (i == 0) {//starts max and min value based on first array value
    max = ar[i];
    min = ar[i];
  }
  if (ar[i] > max) {//if theres a bigger value than before it changes
    max = ar[i];
  }
  if (ar[i] < min) {//if theres a smalles value than before it changes
    min = ar[i];
  }
}

//  Output
console.log("Total :%d     Max:%d      Min:%d", suma, max, min);
