
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

        //     console.log("trab pos x" +Trabajador.posicion_x);
        // console.log("trab pos y" +Trabajador.posicion_y);

            if ((Trabajador.posicion_x >= 9 && Trabajador.posicion_x <= 12) && (Trabajador.posicion_y >= 79 && Trabajador.posicion_x <= 83)) {


                Trabajador.cooldown = 5000;
                Trabajador.estado = "recolectando"

                // console.log(Trabajador.cooldown);
                // console.log(Trabajador.estado);
            }




        }


        
}


function recolectarMateriales() {


    
    if (Trabajador.estado == "recolectando") {

        
        
        switch (Trabajador.cooldown) {

            case 4980: 

            Trabajador.cantidad += 1;
        
            break;

            case 4000:

                Trabajador.cantidad += 1;
        
                break;

            case 3000: 
            Trabajador.cantidad += 1;
        
            break;
           
            case 2000: 
            Trabajador.cantidad += 1;
        
            break;

            case 1000: 
            Trabajador.cantidad += 1;
        
            break;

        }


        console.log(Trabajador.cantidad);


        if (Trabajador.cantidad == 5) {


            Trabajador.estado = "volviendo";

            console.log(Trabajador.estado);
        }


    }



}



function volverBase() {

    if (Trabajador.estado == "volviendo" && Trabajador.cooldown == 0) {


        if (Trabajador.posicion_x <= Base.posicion_x) {

            Trabajador.posicion_x += 3;


        }

        
        if (Trabajador.posicion_x >= Base.posicion_x) {

            Trabajador.posicion_x -= 3;


        }

        
        if (Trabajador.posicion_y <= Base.posicion_y) {

            Trabajador.posicion_y += 3;


        }

        if (Trabajador.posicion_y <= Base.posicion_y) {

            Trabajador.posicion_y += 3;


        }

        //298 82
        console.log(Trabajador.posicion_x);
        console.log(Trabajador.posicion_y);


        //(Trabajador.posicion_x >= 295 && Trabajador.posicion_x <= 300) && (Trabajador.posicion_y >= 80 && Trabajador.posicion_y <= 85)

        if ((Trabajador.posicion_x >= 295 && Trabajador.posicion_x <= 300) && (Trabajador.posicion_y >= 80 && Trabajador.posicion_y <= 85)) {


            Trabajador.cooldown = 5000;
            Trabajador.estado = "depositando";
            console.log("Estado del trabajador" + Trabajador.estado);

        }


    }


}



function despositandoMateriales() {


    if (Trabajador.estado == "depositando" && Trabajador.cantidad > 0){
       

        switch (Trabajador.cooldown) {

            case 4980: 

            Trabajador.cantidad -= 1;
            Stats.madera += 1;
        
            break;

            case 4000:

                Trabajador.cantidad -= 1;
                Stats.madera += 1;
                break;

            case 3000: 
            Trabajador.cantidad -= 1;
            Stats.madera += 1;
            break;
           
            case 2000: 
            Trabajador.cantidad -= 1;
            Stats.madera += 1;
            break;

            case 1000: 
            Trabajador.cantidad -= 1;
            Stats.madera += 1;
            break;

        }



        if (Trabajador.cantidad == 0) {


            Trabajador.estado = "buscando";
            console.log("Cantidad maderas acumuladas: " + Stats.madera);


        }
        //aca cambia estado en cantidad 0



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




