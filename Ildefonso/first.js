/*
 * Made by Ildefonso Castro Bouquet 26/05/2021
 */

/* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 *Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM 
 *on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 *
 *Example Input
 *A single string that represents a time in 12-hour clock format (i.e.: hh:mm:ss:AM or hh:mm:ss:PM).
 *
 *'12:01:00:AM'
 *
 *Example Output
 *'00:01:00'
 *
 *Extra
 *Create a specific function for the conversion 
 */

//  Variables
var startTime = "10:00:00PM";
var finishTime = "";

console.log("From :" + startTime);
finishTime=convertir(startTime);
console.log("To :" + finishTime);

/*This function converts from 12 hour AM/PM System to 24 hour System
 *  @param: startTime; 12 hour System
 *  @returns: finishTime; 24 hour System
 */
function convertir(startTime) {
  if (startTime[8] == "A") {
  for (i = 0; i < startTime.length-2; i++){
    finishTime=finishTime.concat(startTime[i]);
  }
  // console.log(finishTime);
  } else {
    hora1 = parseInt(startTime[0]);
    hora2 = parseInt(startTime[1]);
    // console.log(hora1,hora2);
    hora1 += 1;
    hora2 += 2;
    if (hora2 == 10 || hora2 == 11) {
      hora1 += 1;
      hora2 = hora2 - 10;
    }
    // console.log(hora1, hora2);
    finishTime=finishTime.concat(hora1, hora2);
    for (i = 2; i < startTime.length-2; i++){
      finishTime=finishTime.concat(startTime[i]);
    }
  }
  return finishTime;
}