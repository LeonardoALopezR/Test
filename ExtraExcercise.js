/* Extra Excercise Eduardo Batiz
*/
/*Using classes create a rectangle object, which will return the area once it is instantiated
*
*Example Input
*new rectangle(2,3)
*
*Example Output
*6
*/
class rectangle
{  
    constructor(lenght, width)
    {
        this.lenght=lenght;
        this.width=width;
        
    }
    area()
    {
        var area= this.lenght * this.width;
        return area;
    } 
}
var geoFig = new rectangle(2,3);
 console.log(geoFig.area());