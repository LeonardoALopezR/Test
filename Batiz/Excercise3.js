/*Excercise 2 Eduardo Batiz
*/
/*Given an array of integers, find the sum of its elements, max and min values.
*For example, if the array ar=[1,2,3], 1+2+3=6 so return 6 3 1.
*
*Example Input
*[10,2,3,4,8,2]
*
*Example Output
*29 10 2
*
*Extra
*Use arrow functions
*/
var arr = [15, 21, 5, 1, 7, 11, 2, 9];
var maxValue, minValue, sumValue;
sum=0;
maxValue= minValue = arr[0];
const numbers = arr =>
{
    for (i = 0; i < arr.length; i++)
    {
        if(arr[i]>maxValue)
        {
            maxValue=arr[i];
        }

        if(arr[i]<minValue)
        {
            minValue=arr[i];
        }

        sum=sum + arr[i];
    }
    console.log(`Addition : ${sum}, Maximum: ${maxValue},  Minimum: ${minValue}`);
}
numbers(arr)