
let imagen_spot_madera = new Image();
imagen_spot_madera.src = "./img/spot_madera.png"


let Spot_Madera = {

    "imagen": imagen_spot_madera,
    "posicion_x": 10,
    "posicion_y": 80
}





function dibujarSpot_madera(context) {


context.drawImage(Spot_Madera.imagen, Spot_Madera.posicion_x, Spot_Madera.posicion_y);



}