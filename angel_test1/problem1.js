//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.//


var horainicial = "12:01:00 AM";
var horafinal = "";

console.log("De:" + horainicial);
horafinal=convertir(horainicial);
console.log("A:" + horafinal);

    hora1 = parseInt(horainicial[0]);
    hora2 = parseInt(horainicial[1]);
    hora1 = (hora1 + 1);
    hora2 = (hora2 + 2); 

horafinal = horafinal.concat (hora1, hora2);
for (i = 2; i < horainicial.length; i++)
    horafinal=horafinal.concat(horainicial[i]);
