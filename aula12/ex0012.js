var agora = new Date()
var hora = agora.getHours()
//var hora = 8
console.log("Agora são " +hora+ " horas.")
if (hora<=12){
    console.log("BOM DIA!")
} else if (hora<=18){
    console.log("BOA TARDE!")
} else {
    console.log("BOA NOITE!")
}