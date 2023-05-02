
//todo .......... CHALLENGE 16 ..........
//Ejercicio descuento según marca y modelo del auto:

//Le pedimos al usuario que ingrese marca y modelo del auto,
//en caso que el auto sea Ford fiesta el descuento que se aplica será del 5%,
//si es un Ford Focus el descuento será del 10%. Mostramos por consola el descuento que obtendrá.


let marca = prompt("Ingrese la marca del vehículo: ");
let modelo = prompt("Ingrese modelo del vehículo:")

if(marca == "ford" && modelo == "fiesta"){
    alert("El vehículo tendrá un descuento del 5%");

}else if(marca == "ford" && modelo == "focus"){
    alert("El vehículo tendrá un descuento del 10%");

}else{
  alert("Vehículo no compatible con el sistema.")
}




