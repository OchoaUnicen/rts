
let imagen_worker = new Image();
imagen_worker.src = "./img/worker.png"

let max_cantidad_recursos_acarreados = 25;

let Trabajador = {

    "imagen": imagen_worker,
    "posicion_x": 100,
    "posicion_y": 100,
    "cantidad": 0,
    "estado":"quieto",
    //estados : quieto, buscando, recolectando, volviendo, depositando
    "cooldown": 0,
    "objetivo": "el_spot",

    w: 100,
    h: 100

}



function dibujarTrabajador(context) {

    context.drawImage(Trabajador.imagen, Trabajador.posicion_x, Trabajador.posicion_y);




}




