// Given an array of integers, find the sum of its elements, max and min values.
// For example, if the array ar=[1,2,3], 1+2+3=6 so return 6 3 1.

// Example Input
// [10,2,3,4,8,2]

// Example Output
// 29 10 2

// Extra
// Use arrow functions

const array = [10,2,3,4,8,2];
const sumados=[]
let max = 0;
const arrFinal = [];
//  let maxs = 0;




 // Encontrar numero maximo
//  let maxNum = () => {
    
//       for (let maxi of array){
//          if (max < maxi){
//              max = maxi;
//              arrFinal.push(max)
//          }
//      }
//  }

//  maxNum()

//Inicializo mi minimo y lo pongo como el valor maximo encontrado
// let min = max;

// //Encontrar numero minimo
// let minNum = () =>{

//      for(let mini of array){
//         if(min > mini){
//             min = mini;
//             arrFinal.push(min)
//         }
//     }
// }

// minNum()

// console.log(arrFinal)

//Encontrar la suma
let suma = () => {

    let total = 0;
    //Sumar numeros
    for (let i = 0; i < array.length; i++){
         sumados.push(total += array[i])
    }
}


suma()
console.log(sumados)

//Encontrar el valor maximo en el array sumados

let valSuma = sumados[sumados.length-1] //El ultimo valor es el mas alto (esto es lo que te decia que no se si este bien)


//INTENTE HACER ESTO PERO NO JALO
 
// Encontrar numero maximo
  let maxSum = () => {
    
     for (let maxs of array){
        if (max < maxs){
            max = maxs;
            console.log(maxs)
            arrFinal.push(max)
        }
    }
 }

//En vez de darme el numero maximo me duplicaba el array, no se por que



//agregar el mayor valor a nuestro array

arrFinal.push(valSuma)

console.log(arrFinal)