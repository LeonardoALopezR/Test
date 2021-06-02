/*Excercise 1 Eduardo Bátiz
 */

/*Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 *Example Input
 *A single string that represents a time in 12-hour clock format (i.e.: hh:mm:ss:AM or hh:mm:ss:PM).
 *
 *12:02:00:AM
 *
 *Example Output
 *00:01:00
 *
 *Extra
 *Create a specific function for the conversion.
 */
 var normal="13:10:59:PM";
 var military="";
 console.log("Normal: " + normal);
 military=change(normal);
 console.log("Military: " + military);
 function change(normal)
 {
     if (normal[9]=="A")
     {
         if((normal[0]=="1") && (normal[1]=="2"))
         {
             firstVal= 0;
             secondVal= 0;
             military=military.concat(firstVal,secondVal);
             for (i = 2; i < normal.length-3; i++)
             {
                 military=military.concat(normal[i]);
             }
         }
         else
         {
             for (i = 0; i < normal.length-3; i++)
             {
             military=military.concat(normal[i]);
             }
         }
     }
     else
     {
         if((normal[1]=="8") && (normal[9]=="P"))
         {
          firstVal= 2;
          secondVal= 0;
          military=military.concat(firstVal,secondVal);
         for (i = 2; i < normal.length-3; i++)
             {
                 military=military.concat(normal[i]);
             }
         }
         else
         {
             if((normal[1]=="9") && (normal[9]=="P"))
             {
                  firstVal= 2;
                  secondVal= 1;
                 military=military.concat(firstVal,secondVal);
                 for (i = 2; i < normal.length-3; i++)
                 {
                     military=military.concat(normal[i]);
                 }
             }   
             else
             {
                 if((normal[0]=="1") && (normal[1]=="2") && (normal[9]=="P"))
                 {
                     for (i = 0; i < normal.length-3; i++)
                     {
                         military=military.concat(normal[i]);
                     }
                 }
                 else
                 {
                     firstVal= parseInt(normal[0]);
                     secondVal= parseInt(normal[1]);
                     firstVal=firstVal+1;
                     secondVal=secondVal+2;
                     military=military.concat(firstVal,secondVal);
                     for (i = 2; i < normal.length-3; i++)
                      {
                         military=military.concat(normal[i]);
                     }
                 }
                
             }
         }
     }
     return military;
 }