
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




function buscarElemento() {

        if (Trabajador.estado == "buscando") {

            if (Trabajador.posicion_x > Spot_Madera.posicion_x) {

                Trabajador.posicion_x -= 3;

            }


            if (Trabajador.posicion_x < Spot_Madera.posicion_x) {

                Trabajador.posicion_x += 3;

            }


            if ( Trabajador.posicion_y > Spot_Madera.posicion_y) {


                Trabajador.posicion_y -= 3;
            }

            if ( Trabajador.posicion_y < Spot_Madera.posicion_y) {


                Trabajador.posicion_y += 3;
            }

            console.log("trab pos x" +Trabajador.posicion_x);
        console.log("trab pos y" +Trabajador.posicion_y);

            if ((Trabajador.posicion_x >= 9 && Trabajador.posicion_x <= 12) && (Trabajador.posicion_y >= 79 && Trabajador.posicion_x <= 83)) {


                Trabajador.cooldown = 1000;
                Trabajador.estado = "recolectando"

                console.log(Trabajador.cooldown);
                console.log(Trabajador.estado);
            }




        }


        
}








function dibujarTrabajador(context) {

    context.drawImage(Trabajador.imagen, Trabajador.posicion_x, Trabajador.posicion_y);




}


function moverTrabajador () {        
    
    if (Trabajador.estado == "caminando"){

         if (Trabajador.posicion_x != (Trabajador.objetivo_x - (Trabajador.w / 2))) {
            //console.log("moviendo");
            if (Trabajador.posicion_x < (Trabajador.objetivo_x - (Trabajador.w / 2))){

                Trabajador.posicion_x += 1;

            }

            if (Trabajador.posicion_x > (Trabajador.objetivo_x - (Trabajador.w / 2))){

                Trabajador.posicion_x -= 1;

            }

        }    
    
        if(Trabajador.posicion_y != Trabajador.objetivo_y - (Trabajador.h / 2)) {

            if (Trabajador.posicion_y < Trabajador.objetivo_y - (Trabajador.h / 2)){

                Trabajador.posicion_y += 1;

            }

            if (Trabajador.posicion_y > Trabajador.objetivo_y - (Trabajador.h / 2)){

                Trabajador.posicion_y -= 1;

            }

            //console.log("Trabajador y - trabajador.h div dos" + (Trabajador.objetivo_y - (Trabajador.h / 2)));

        }

        if (Trabajador.posicion_y == (Trabajador.objetivo_y - (Trabajador.h / 2)) && (Trabajador.posicion_x == Trabajador.objetivo_x - (Trabajador.w / 2)))  {
            //console.log("cambio estado quieto");
            Trabajador.estado = "quieto";
        }


    }






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




