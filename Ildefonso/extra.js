/*
 * Made by Ildefonso Castro Bouquet 26/05/2021
 */

/*
 * Using classes create a rectangle object, which will return the area once it is instantiated
 * 
 * Example Input
 * new rectangle(2,3)
 * 
 * Example Output
 * 6
 */

/*This class rectangle receives 2 parameters, in this case height and width*/
class rectangle{
  //  Constructor
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  /*This method calculates area of a rectangle*/
  calcularArea() {
    return this.height * this.width;
  }
}
//  Variables
var rectangle2 = new rectangle(2, 3);

//  Output
console.log(rectangle2.calcularArea());

