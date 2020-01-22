
let imagen_worker = new Image();
imagen_worker.src = "./img/worker.png"

let max_cantidad_recursos_acarreados = 25;

let Trabajador = {

    "imagen": imagen_worker,
    "posicion_x": 100,
    "posicion_y": 100,
    "cantidad": 0,
    "estado":"quieto",
    //estados : quieto, buscando, recolectando, volviendo, depositando, caminando
    "cooldown": 0,
    "objetivo_x": "el_spot.x",
    "objetivo_y": "el_spot.y",
    "seleccionado": false,

    w: 100,
    h: 100

}



function dibujarTrabajador(context) {

    context.drawImage(Trabajador.imagen, Trabajador.posicion_x, Trabajador.posicion_y);




}



// function moverTrabajador () {

//     var posicion_mouse = getMousePos(canvas, evt);

//     if (Trabajador.estado == "caminando"){

//          if ((Trabajador.posicion_x != posicion_mouse.x) && (Trabajador.posicion_y != posicion_mouse.y)) {
//             console.log("moviendo");
//             if (Trabajador.posicion_x <= posicion_mouse.x){

//                 Trabajador.posicion_x += 5;

//             }

//             if (Trabajador.posicion_x >= posicion_mouse.x){

//                 Trabajador.posicion_x -= 5;

//             }


//             if (Trabajador.posicion_y <= posicion_mouse.y){

//                 Trabajador.posicion_y += 5;

//             }

//             if (Trabajador.posicion_y >= posicion_mouse.y){

//                 Trabajador.posicion_y -= 5;

//             }


//         }

//         else {

//             Trabajador.estado = "quieto";
//         }


//     }






// }




