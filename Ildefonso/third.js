/*
 * Made by Ildefonso Castro Bouquet 26/05/2021
 */

/*
 * Staircase detail This is a staircase of size n=4:
 *               *
 *              **
 *             ***
 *            ****
 * Extra
 * Print the staircase upside down
 */

//  Variables
var n = 6;

//  Triangle
for (i = 0; i < n; i++){
  for (j = 0; j < n-(i+1); j++){
    process.stdout.write(" ");//  Prints without \n
  }
  for (j = 0; j < (i+1); j++){
    process.stdout.write("*");
  }
  console.log("");
}

//  Spacing
console.log("");
console.log("");

/*Upside down triangle*/
for (i = n; i > 0; i--){
  for (j = 0; j < n-i; j++){
    process.stdout.write(" ");//  Prints without \n
  }
  for (j = 0; j < i; j++){
    process.stdout.write("*");
  }
  console.log("");
}