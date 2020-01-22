
let imagen_personaje = new Image();
imagen_personaje.src = "./img/personaje.png"

let Personaje = {

    "imagen": imagen_personaje,
    "posicion_x": 300,
    "posicion_y":400,
    



}



function dibujarPersonaje(context) {

    context.drawImage(Personaje.imagen, Personaje.posicion_x, Personaje.posicion_y);




}