//Ejercicio realizado Luis Eduardo Corral Corona 31/05/2021
/*
Using classes create a rectangle object, which will return the area once it is instantiated

Example Input
new rectangle(2,3)

Example Output
6*/

class Rectangulo
{  
    constructor(base, altura)
    {
        this.base=base;
        this.altura=altura;
        
    }
    area()
    {
        var total=this.base * this.altura;
        return total;
    } 
}

var objeto = new Rectangulo(2,3);

 console.log(objeto.area());
