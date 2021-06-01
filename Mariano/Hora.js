//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

//Example Input
//A single string that represents a time in 12-hour clock format (i.e.: hh:mm:ss:AM or hh:mm:ss:PM).

//'12:01:00:AM'

//Example Output
//'00:01:00'

//Extra
//Create a specific function for the conversion

let horas = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let distintivos = ['AM', 'PM']
let horasCompletas =[];


let mostrarHoras = () => {
    for(let i = 0; i < horas.length; i++){
        
        for(distintivo of distintivos){
           horasCompletas.push(`${horas[i]} ${distintivo}`)
        }
     }
 }


mostrarHoras()

console.log(horasCompletas);

let cambiarHoras = () => {

    for(let i = 0; i < horasCompletas.length; i++)
    
    if(horasCompletas[i].includes('PM')){

        let horaNuevaAm = horasCompletas[i].substring(0,2) * 1 + 12 

        console.log(horaNuevaAm)
    } 
    
    else if (horasCompletas[i].includes('AM')) {

        let horaNuevaPM = horasCompletas[i].substring(0,2) * 1

        console.log(horaNuevaPM)
    }
}
cambiarHoras()
    


//Funcion que cambia la hora

let cambiador = (hora) =>{
    

    if(hora.includes('12 AM')){
        let hora12Am = hora.substring(0,2)*1  //El *1 es para convertir el string a numero
        console.log(`Son las ${hora12Am + 12} horas`)
    } 
    
    else if ( hora.substring(0,2)*1 > 12){
        console.log('Esa hora no existe mi brother')
    }

     else if(hora.includes('AM')){
         let horaAm = hora.substring(0,2)*1
         console.log(`Son las ${horaAm} horas`)
     }

     else if(hora.includes('12 PM')){
        let hora12Am = hora.substring(0,2)*1
        console.log(`Son las ${hora12Am} horas`)
    } 
   
     else if(hora.includes('PM')){
         let horaPm = hora.substring(0,2)*1
         console.log(`Son las ${horaPm + 12} horas`)
     } 
     
     else{
        console.log('Eso no es una hora krnal')
    }
}

cambiador('12 PM')